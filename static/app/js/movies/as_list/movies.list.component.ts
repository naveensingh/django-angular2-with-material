import {Component, Input, OnInit} from "@angular/core";
import {MdDialog} from "@angular/material";
import {MoviesService} from "../app.movies.service";
import {EditMovieComponent} from "../edit_movie/edit.movie.dialog.component";

@Component({
    selector: 'movies-list',
    templateUrl: '/static/app/js/movies/as_list/movies.list.component.html?' + new Date()
})

export class MoviesListComponent {
    movies = {
        results: []
    };
    selectedMovie = {};
    clicked = false;
    index: number;
    filter = {
        search: ''
    };

    constructor(private _moviesService: MoviesService, public dialog: MdDialog) {
    }

    onChange(value) {
        this.getMovies(value, undefined);
    }

    getMovies(value, url) {
        this._moviesService.getMovies(value, url).subscribe(movies => this.movies = movies);
    }

    getValues(arr) {
        const new_ar = [];
        arr.forEach(function (item) {
            new_ar.push(item["id"])
        });
        return new_ar;
    }

    getMovie(slug: string, edit = false) {
        this._moviesService.getMovie(slug).subscribe(movie => {
            this.selectedMovie = movie;
            if (edit) {
                this.selectedMovie["readable_genres"] = movie["genres"];
                this.selectedMovie["genres"] = this.getValues(movie["genres"]);

                this.selectedMovie["readable_actors"] = movie["actors"];
                this.selectedMovie["actors"] = this.getValues(movie["actors"]);

                this.selectedMovie["readable_directors"] = movie["directors"];
                this.selectedMovie["directors"] = this.getValues(movie["directors"]);
                return this.editMovieDialog(this.selectedMovie);
            } else {
                this.movies.results[this.index] = this.selectedMovie;
                return this.selectedMovie;
            }
        });
    }

    editMovie(slug: string, edit = true, $index) {
        this.index = $index;
        this.getMovie(slug, edit);

    }

    editMovieDialog(movie) {
        let dialogRef = this.dialog.open(EditMovieComponent, {
            disableClose: true,
        });
        dialogRef.componentInstance.movie = movie;
        dialogRef.afterClosed().subscribe(result => {
            this.getMovie(result["slug"]);
        });
    }
    ngOnInit(): void {
        this.getMovies({}, undefined);
    }
}