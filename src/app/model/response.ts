import { Movie } from './movie';

export class Response {

    constructor (
        public page: number,
        public total_results: number,
        public total_pages: number,
        public results: Movie[]
    ) {}
}
