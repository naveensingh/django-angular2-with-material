import {Component, Input, OnInit} from "@angular/core";
import {MoviesService} from "../app.movies.service";

@Component({
    selector: 'movies-list',
    templateUrl: '/static/app/js/movies/as_list/movies.list.component.html?' + new Date()
})

export class MoviesListComponent {
    movies = {
        results: []
    };
    selectedMovie = {};
    filter = {
        search: ''
    };

    constructor(private _moviesService: MoviesService) {
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

    ngOnInit(): void {
        this.getMovies({}, undefined);
    }
}