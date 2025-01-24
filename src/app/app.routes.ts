import { Routes } from '@angular/router';
import { WebSnapListComponent } from './web-snap-list/web-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WebSnapComponent } from './web-snap/web-snap.component';
import { SingleWebSnapComponent } from './single-web-snap/single-web-snap.component';

export const routes: Routes = [
  {
    path:"",
    component: LandingPageComponent
  },
  {
    path: "websnaps",
    component: WebSnapListComponent
  },
  {
    path:"websnap/:id",
    component: WebSnapComponent
  }
];
