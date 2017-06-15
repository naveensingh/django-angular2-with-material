import {Component, Inject} from "@angular/core";
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
    selector: 'movie-dialog',
    templateUrl: '/static/app/js/movies/movie.dialog.component.html?' + new Date()
})
export class MovieDialog {
    constructor(@Inject(MD_DIALOG_DATA) public movie: string) {
    }
}