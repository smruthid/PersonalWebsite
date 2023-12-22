import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { TravelComponent } from './travel/travel.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutme',
    component: AboutmeComponent
  },
  {
    path: 'travel',
    component: TravelComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
