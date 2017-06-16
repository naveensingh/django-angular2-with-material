import {Component, Input, OnInit} from "@angular/core";
import {MoviesService} from "../app.movies.service";

@Component({
    selector: 'edit-movie',
    templateUrl: '/static/app/js/movies/edit_movie/edit.movie.dialog.component.html?' + new Date()
})

export class EditMovieComponent {
    movie = {};
    actors = [];
    directors = [];
    genres = [];

    constructor(private _moviesService: MoviesService) {
    }

    onChange(value) {
        console.log(value);
    }

    ngOnInit(): void {
    }
}