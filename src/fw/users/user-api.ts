import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
    signin: (username: string, password: string, rememberMe: boolean) => Observable<any>;
    signOut: () => Observable<any>;
}
