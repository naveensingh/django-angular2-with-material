import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GenresService {
    private genresUrl = "/api/v1.0/app/entertainment/genre";

    constructor(private http: Http) {
    }

    static extractDataArray(res: Response) {
        let body = res.json();
        return body || [];
    }

    static extractDataObject(res: Response) {
        let body = res.json();
        return body || {};
    }

    static handleError(error: error) {
        return error;
    }

    getGenres(filters, url = this.genresUrl) {
        return this.http.get(url, {search: filters}).map(GenresService.extractDataArray)
            .catch(GenresService.handleError);
    }
}