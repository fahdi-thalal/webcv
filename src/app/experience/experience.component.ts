import { Component, OnInit } from '@angular/core';
import { OpenFullscreenService } from '../app.component';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css'],
	providers: [OpenFullscreenService],
})
export class ExperienceComponent implements OnInit {
	title = 'Experience';

	constructor(public op: OpenFullscreenService) { }

	ngOnInit(): void {
	}

}
