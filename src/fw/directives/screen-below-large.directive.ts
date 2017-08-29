import { Directive, Input, TemplateRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({ selector: '[fwScreenBelowLarge]' })
export class ScreenBelowLargeDirective implements OnDestroy {
    private hasView = false;
    private resizesub: Subscription;
    private loadsub: Subscription;

    ngOnDestroy(): void {
        this.resizesub.unsubscribe();
        this.loadsub.unsubscribe();
    }
    constructor(private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>,
        private screenService: ScreenService) {
        this.resizesub = screenService.resize$.subscribe(() => this.onResize());
        this.loadsub = screenService.load$.subscribe(() => {
            debugger;
            this.onResize();
        });
    }

    @Input()
    set screenBelowLarge(condition) {
        debugger;
        condition = this.screenService.screenWidth < this.screenService.largeBreakPoint;
        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    onResize() {
        this.screenBelowLarge = false;
    }
}
