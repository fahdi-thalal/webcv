import { Component, OnInit } from '@angular/core';
import { OpenFullscreenService } from '../app.component';

@Component({
	selector: 'app-formation',
	templateUrl: './formation.component.html',
	styleUrls: ['./formation.component.css'],
	providers: [OpenFullscreenService],
})

export class FormationComponent implements OnInit {
	title = 'La formation';
	icon = '/assets/img/42_Logo.svg';

	constructor(public op: OpenFullscreenService) { }

	ngOnInit(): void {
	}
}
