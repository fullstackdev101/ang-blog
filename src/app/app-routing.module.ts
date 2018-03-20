import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent }      from './front-pages/aboutus/aboutus.component';
import { ContactusComponent }      from './front-pages/contactus/contactus.component';
import { FrontPagesComponent }      from './front-pages/front-pages.component';

import { PostDetailComponent } from './front-pages/post-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/front-pages', pathMatch: 'full' },
  { path: 'home', component: FrontPagesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'postdetail/:id', component: PostDetailComponent }
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}