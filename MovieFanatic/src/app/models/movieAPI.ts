import { SafeStyle } from "@angular/platform-browser";

export class MovieAPI {
    id: string;
    title: string;
    poster_path: string;
    backdrop_path: SafeStyle;
    overview: string;
    release_date: string;
}