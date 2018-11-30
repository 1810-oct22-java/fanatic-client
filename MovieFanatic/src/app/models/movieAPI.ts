import { SafeStyle } from "@angular/platform-browser";

export interface MovieAPI {
    id: number;
    original_title: string;
    poster_path: string;
    backdrop_path: SafeStyle;
    overview: string;
    release_date: string;
}
