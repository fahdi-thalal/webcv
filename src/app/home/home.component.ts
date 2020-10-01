import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
	bgImg = document.body.style;
	mainContent = Array.from(document.getElementsByClassName('main_content') as HTMLCollectionOf<HTMLElement>);

	constructor() {}

	ngOnInit(): void {
		this.mainContent[0].style.marginLeft = '0';
		this.mainContent[0].style.marginRight = '0';
		this.mainContent[0].style.marginTop = '0';
	}
	ngOnDestroy(): void {
		this.mainContent[0].style.marginTop = '60px';
	}
}
