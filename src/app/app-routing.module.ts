import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FormationComponent } from './formation/formation.component';
import { CvComponent } from './cv/cv.component';
import { ProjetsComponent } from './projets/projets.component';
import { FillitComponent} from './fillit/fillit.component';
import { P42shComponent } from './p42sh/p42sh.component';
import { FtLsComponent  } from './ft-ls/ft-ls.component';
import { FtPrintfComponent } from './ft-printf/ft-printf.component';
import { RogerSkylineComponent } from './roger-skyline/roger-skyline.component';
import { LibftComponent } from './libft/libft.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, data: {animation: 'Home'}},
	{ path: 'cv', component: CvComponent, data: {animation: 'Cv'}},
	{ path: 'experience', component: ExperienceComponent, data: {animation: 'Experience'}},
	{ path: 'formation', component: FormationComponent, data: {animation: 'Formation'}},
	{ path: 'projets', component: ProjetsComponent, data: {animation: 'Projects'}, children: [
		{ path: '', redirectTo: '/projets/42sh', pathMatch: 'full' },
		{ path: '42sh', component: P42shComponent},
		{ path: 'ft_ls', component: FtLsComponent},
		{ path: 'ft_printf', component: FtPrintfComponent},
		{ path: 'roger_skyline', component: RogerSkylineComponent},
		{ path: 'fillit', component: FillitComponent},
		{ path: 'libft', component: LibftComponent},
	]},
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
