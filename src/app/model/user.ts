export class User {

    constructor (
        public id: number,
        public username: string,
        public money: number,
        public owned_video: number[]
    ) {}
}
