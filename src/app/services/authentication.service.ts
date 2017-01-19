import { Injectable } from '@angular/core';
import { Http, Headers, Response ,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(value) {
        const body = new URLSearchParams(value);
              body.set('email', value.username);
              body.set('password', value.password);


        let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('http://localhost:8888/include/login.php',  body.toString(), {headers : headers} )
            .map((response: any) => {
                // login successful if there's a jwt token in the response
                console.log(JSON.stringify(response))
                // let user = response.json();
                // console.log(user)

                if (response._body !="\nError.") {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response._body));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}