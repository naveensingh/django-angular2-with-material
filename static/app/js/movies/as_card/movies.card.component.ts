import {Component, Input, OnInit} from "@angular/core";
import {MdDialog} from '@angular/material';
import {MoviesService} from "../app.movies.service";
import {MovieDialog} from "../movie.dialog.component";

@Component({
    selector: 'movies-card',
    templateUrl: '/static/app/js/movies/as_card/movies.card.component.html?' + new Date()
})

export class MoviesCardComponent {
    movies: Array<any>;
    selectedMovie = {};
    filter = {
        search: ''
    };


    constructor(private _moviesService: MoviesService, public dialog: MdDialog) {
    }

    onChange(value) {
        this.getMovies(value);
    }

    getMovies(value) {
        this._moviesService.getMovies(value).subscribe(movies => this.movies = movies);
    }

    getMovie(slug: string) {
        this._moviesService.getMovie(slug).subscribe(movie => this.openDialog(movie));
    }

    ngOnInit(): void {
        this.getMovies({});
    }

    openDialog(movie) {
        let dialogRef = this.dialog.open(MovieDialog, {
            disableClose: true,
        });
        dialogRef.componentInstance.movie = movie;
    }
}