import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormationComponent } from './formation/formation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MdbNavbarComponent } from './mdb-navbar/mdb-navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CvComponent } from './cv/cv.component';
import { ProjetsComponent } from './projets/projets.component';
import { AppRoutingModule } from './app-routing.module';
import { FillitComponent } from './fillit/fillit.component';
import { P42shComponent } from './p42sh/p42sh.component';
import { FtLsComponent  } from './ft-ls/ft-ls.component';
import { FtPrintfComponent } from './ft-printf/ft-printf.component';
import { RogerSkylineComponent } from './roger-skyline/roger-skyline.component';
import { LibftComponent} from './libft/libft.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
	declarations: [
		AppComponent,
		FormationComponent,
		MdbNavbarComponent,
		CvComponent,
		ProjetsComponent,
		FillitComponent,
		P42shComponent,
		FtLsComponent,
		FtPrintfComponent,
		RogerSkylineComponent,
		LibftComponent,
		HomeComponent,
		ExperienceComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LayoutModule,
		MatCardModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MDBBootstrapModule.forRoot(),
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
