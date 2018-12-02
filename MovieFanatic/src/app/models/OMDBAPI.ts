// http://www.omdbapi.com/
import { ratingsAPI } from "src/app/models/ratingsAPI";

export interface OMDBAPI {
    id: number;
    Title: string;
    Genre: string;
    Ratings: ratingsAPI[];
    Rated: string;
    Metascore: string;
    imdbRating: string;
    RottenTomatoes: string;
    MovieFanatic: string;
}