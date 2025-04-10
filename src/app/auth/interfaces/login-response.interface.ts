import { User } from "./user.interfac";


export interface AuthResponse {
    user:  User;
    token: string;
}


