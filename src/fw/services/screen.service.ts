import { Injectable, HostListener } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScreenService {
    private resizeSource = new Subject<null>();
    resize$ = this.resizeSource.asObservable();

    private loadSource = new Subject<null>();
    load$ = this.loadSource.asObservable();

    largeBreakPoint = 800;
    screenWidth = 1000;
    screenHeight = 800;

    constructor() {
        try {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            debugger;
            window.addEventListener('resize', (event) => this.onResize(event));
            window.addEventListener('load', (event) => this.onLoad(event));
        } catch (error) {

        }
    }
    isLarge(): boolean {
        return this.screenWidth > this.largeBreakPoint;
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.resizeSource.next();
    }
    onLoad(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.loadSource.next();
    }
}
