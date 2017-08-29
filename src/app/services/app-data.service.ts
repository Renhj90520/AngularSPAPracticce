import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Country } from '../view-models/country';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {
    countries: Array<Country> = [
        { id: 1, name: 'Switzerland', epiIndex: 87.67 },
        { id: 2, name: 'China', epiIndex: 87.67 },
        { id: 3, name: 'Australia', epiIndex: 87.67 },
        { id: 4, name: 'Singapore', epiIndex: 87.67 },
        { id: 5, name: 'Spain', epiIndex: 87.67 },
        { id: 6, name: 'Sweden', epiIndex: 87.67 },
        { id: 7, name: 'Norway', epiIndex: 87.67 },
    ];

    constructor(private userService: UserService) { }

    createCountry(vm: Country): Observable<any> {
        let id = 0;
        this.countries.forEach(c => {
            if (c.id >= id) {
                id = c.id + 1;
            }
        });

        vm.id = id;
        this.countries.push(vm);
        return Observable.of(vm);
    }

    deleteCountry(id: number): Observable<any> {
        return Observable.of({}).delay(2000).do(e => this.countries.splice(this.countries.findIndex(c => c.id === id), 1));
    }

    getCountries(): Observable<any> {
        return Observable.of(this.countries);
    }
    getCountry(id: number): Observable<Country> {
        const country = this.countries.find(c => c.id == id);
        return Observable.of(country);
    }
    updateCountry(updateCountry: Country): Observable<any> {
        const country = this.countries.find(c => c.id === updateCountry.id);
        Object.assign(country, updateCountry);
        return Observable.of(country).delay(2000);
    }
}
