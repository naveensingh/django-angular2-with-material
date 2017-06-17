import {Component, Input, OnInit} from "@angular/core";
import {MoviesService} from "../app.movies.service";
import {ArtistsService} from "../services/app.artists.service";
import {GenresService} from "../services/app.genres.service";

@Component({
    selector: 'edit-movie',
    templateUrl: '/static/app/js/movies/edit_movie/edit.movie.dialog.component.html?' + new Date()
})

export class EditMovieComponent {
    movie = {};
    selectedMovie = {};
    actors = {
        results: []
    };
    directors = {
        results: []
    };
    genres = {
        results: []
    };

    constructor(private _moviesService: MoviesService, private _artistsService: ArtistsService, private _genresService: GenresService) {
    }

    submitMovie(value) {
        this._moviesService.updateMovie(value, value.slug).subscribe(movie => this.selectedMovie = movie);
    }

    ngOnInit(): void {
        this._artistsService.getartists({forte: "Actor"}).subscribe(actors => this.actors = actors);
        this._artistsService.getartists({forte: "Director"}).subscribe(directors => this.directors = directors);
        this._genresService.getGenres({}).subscribe(genres => this.genres = genres);
    }
}