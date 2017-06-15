import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class MoviesService {
    private moviesUrl = "/api/v1.0/app/entertainment/movies";

    constructor(private http: Http) {
    }

    static extractDataArray(res: Response) {
        let body = res.json();
        return body.results || [];
    }

    static extractDataObject(res: Response) {
        let body = res.json();
        return body || {};
    }

    static handleError(error: error) {
        return error;
    }

    getMovies(filters) {
        return this.http.get(this.moviesUrl, {search: filters}).map(MoviesService.extractDataArray)
            .catch(MoviesService.handleError);
    }

    getMovie(slug: string) {
        const url = `${this.moviesUrl}/${slug}`;
        return this.http.get(url)
            .map(MoviesService.extractDataObject);
    }
}