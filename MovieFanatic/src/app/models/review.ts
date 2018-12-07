export class Review {
    constructor (
        public id: number,
        public user_name: string,
        public review_date: string,
        public movie_name: string,
        public rating: number,
        public review: string,
        public join_date: string,
        public thumbs_up: number,
        public thumbs_down: number
    ) { }
}
