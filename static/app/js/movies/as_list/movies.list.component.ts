import {Component, Input, OnInit} from "@angular/core";
import {MoviesService} from "../app.movies.service";

@Component({
    selector: 'movies-list',
    templateUrl: '/static/app/js/movies/as_list/movies.list.component.html?' + new Date()
})

export class MoviesListComponent {
    movies: Array<any>;
    selectedMovie = {};
    filter = {
        search:''
    };

    constructor(private _moviesService: MoviesService) {
    }

    onChange(value) {
        this.getMovies(value);
    }

    getMovies(value) {
        this._moviesService.getMovies(value).subscribe(movies => this.movies = movies);
    }

    getMovie(slug: string) {
        this._moviesService.getMovie(slug).subscribe(movie => this.selectedMovie = movie);
    }

    ngOnInit(): void {
        this.getMovies({});
        // this.getMovie("1308f2b6-e63d-4547-bf39-895d5c2eadbb"); // testing random movie for get
    }
}