import {Component, Input, OnInit} from "@angular/core";
import {MdDialog} from "@angular/material";
import {MoviesService} from "../app.movies.service";
import {EditMovieComponent} from "../edit_movie/edit.movie.dialog.component";

@Component({
    selector: 'movies-card',
    templateUrl: '/static/app/js/movies/as_card/movies.card.component.html?' + new Date()
})

export class MoviesCardComponent {
    movies = {
        results: []
    };
    selectedMovie = {};
    clicked = false;
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

    getMovie(slug: string) {
        this._moviesService.getMovie(slug).subscribe(movie => this.selectedMovie = movie);
    }

    editMovie() {
        this.editMovieDialog(this.selectedMovie);
    }
    ngOnInit(): void {
        this.getMovies({}, undefined);
    }

    editMovieDialog(movie) {
        let dialogRef = this.dialog.open(EditMovieComponent, {
            disableClose: true,
        });
        dialogRef.componentInstance.movie = movie;
    }

}