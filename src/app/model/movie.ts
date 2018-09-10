export class Movie {

    constructor (
        public id: number,
        public vote_count: number,
        public video: boolean,
        public vote_average: number,
        public title: string,
        public popularity: number,
        public poster_path: string,
        public original_language: string,
        public original_title: string,
        public genre_ids: number[],
        public backdrop_path: string,
        public budget: number,
        public revenue: number,
        public adult: boolean,
        public overview: string,
        public runtime: number,
        public status: string,
        public release_date: string,
        public production_countries: string
    ) {}
}
