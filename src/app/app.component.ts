import { Component} from '@angular/core';
import { SlideInAnimation} from './animations';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [SlideInAnimation]
})

export class AppComponent {
	title = 'CV Fahdi THALAL';

	prepareRoute(outlet: RouterOutlet): void {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
	}
}

@Injectable()
export class OpenFullscreenService{
	constructor() { }

	public openFullscreen(id: string): void{
		const elem = document.getElementById(id);
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		}
	}
	public closeFullscreen(): void {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
	// Click bascule en mode plein écran
	public toggleFullscreen(event: any): void {
		const target = document.getElementById(event.currentTarget.id);
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			target.requestFullscreen();
		}
	}
}
