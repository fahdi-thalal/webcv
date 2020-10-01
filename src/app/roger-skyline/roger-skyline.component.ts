import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roger-skyline',
  templateUrl: './roger-skyline.component.html',
  styleUrls: ['./roger-skyline.component.css']
})
export class RogerSkylineComponent implements OnInit {
	title = 'Roger Skyline';
	icon = 'fas fa-broadcast-tower';

  constructor() { }

  ngOnInit(): void {
  }

}
