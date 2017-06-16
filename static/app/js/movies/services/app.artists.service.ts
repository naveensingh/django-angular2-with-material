import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ArtistsService {
    private artistsUrl = "/api/v1.0/app/artists/";

    constructor(private http: Http) {
    }

    static extractDataArray(res: Response) {
        let body = res.json();
        return body || {results: []};
    }

    static handleError(error: error) {
        return error;
    }

    getartists(filters, url = this.artistsUrl) {
        return this.http.get(url, {search: filters}).map(ArtistsService.extractDataArray)
            .catch(ArtistsService.handleError);
    }
}