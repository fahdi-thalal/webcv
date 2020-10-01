import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdb-navbar',
  templateUrl: './mdb-navbar.component.html',
  styleUrls: ['./mdb-navbar.component.css']
})

export class MdbNavbarComponent implements OnInit {
	icon = 'fas fa-home';

  constructor() { }

  ngOnInit(): void {
  }

}
