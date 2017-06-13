import {Component, Input, OnInit} from "@angular/core";
import {MoviesService} from "./app.movies.service";

@Component({
    selector: 'movies-list',
    templateUrl: '/static/app/js/movies/movies.component.html?' + new Date()
})

export class MoviesComponent {
    movies: Array<any>;
    constructor(private _moviesService: MoviesService) {
    }

    getMovies() {
        this._moviesService.getMovies().subscribe(movies => this.movies=movies)
    }

    ngOnInit(): void {
        this.getMovies();
    }
}