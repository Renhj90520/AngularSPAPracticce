import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api';
import { Router } from '@angular/router';

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = false;
    constructor(private router: Router) { }
    signin(username: string, password: string, rememberMe: boolean): Observable<any> {
        console.log('UserService.signin: ' + username + ' ' + password + ' ' + rememberMe);
        this.isAuthenticated = true;
        return Observable.of({});
        // return Observable.of({}).delay(2000).flatMap(x => Observable.throw('Invalid User Name and/or Password'));
    }
    signOut(): Observable<any> {
        debugger;
        this.isAuthenticated = false;
        this.router.navigate(['signin']);
        return Observable.of({});
    }

}
