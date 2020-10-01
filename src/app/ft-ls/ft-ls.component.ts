import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ft-ls',
  templateUrl: './ft-ls.component.html',
  styleUrls: ['./ft-ls.component.css']
})
export class FtLsComponent implements OnInit {
	title = 'ft_ls';
	icon = 'fas fa-list-alt';

  constructor() { }

  ngOnInit(): void {
  }

}
