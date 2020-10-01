import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-p42sh',
	templateUrl: './p42sh.component.html',
	styleUrls: ['./p42sh.component.css']
})
export class P42shComponent implements OnInit {
	title = '42sh';
	icon = 'fas fa-terminal';

	constructor() { }

	ngOnInit(): void {
	}

}
