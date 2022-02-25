import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const API_KEY = 'AIzaSyAG3MiOfvJhzOdvUIq0nPMP0ol2PYJw-Fg';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    signUp(user) {
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, user);
    }

    login(user) {
        return this.http.post<{
            localId: string,
            email: string
        }>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY, user)
    }

}