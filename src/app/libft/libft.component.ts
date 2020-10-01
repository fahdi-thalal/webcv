import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libft',
  templateUrl: './libft.component.html',
  styleUrls: ['./libft.component.css']
})
export class LibftComponent implements OnInit {
	title = 'Libft';
	icon = 'fas fa-book';

  constructor() { }

  ngOnInit(): void {
  }

}
