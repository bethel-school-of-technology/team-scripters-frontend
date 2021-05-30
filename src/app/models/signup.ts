export class User {

    id!: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    gender!: string;

    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.username = "";
        this.password = "";
        this.gender = "";
    }
}
