export class User {
    constructor(
        public id: number,
        public user_name: string,
        //public username: string,
        public email: string,
        public password: string,
        public token: string
    ) {}
}

