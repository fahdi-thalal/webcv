import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ft-printf',
  templateUrl: './ft-printf.component.html',
  styleUrls: ['./ft-printf.component.css']
})
export class FtPrintfComponent implements OnInit {
	title = 'ft_printf';
	icon = 'fas fa-print';

  constructor() { }

  ngOnInit(): void {
  }

}
