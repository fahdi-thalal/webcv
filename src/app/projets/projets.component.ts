import { Component, OnInit } from '@angular/core';
import { OpenFullscreenService } from '../app.component';

@Component({
	selector: 'app-projets',
	templateUrl: './projets.component.html',
	styleUrls: ['./projets.component.scss'],
	providers: [OpenFullscreenService]
})

export class ProjetsComponent implements OnInit {
	title = 'Mes projets';
	icon42 = 'fas fa-terminal';
	iconPrintf = 'fas fa-print';
	iconRoger = 'fas fa-broadcast-tower';
	iconLibft = 'fas fa-book';
	iconLs = 'fas fa-list-alt';
	openFullscreen(_ID: string): void{}
	toggleFullscreen(_ID: any): void{}

	constructor(private op: OpenFullscreenService) { }

	ngOnInit(): void {
		this.openFullscreen = this.op.openFullscreen;
		this.toggleFullscreen = this.op.toggleFullscreen;
	}
}
