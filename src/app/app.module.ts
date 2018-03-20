import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {FrontPagesService} from './services/front-pages.service';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages/pages.component';
import { FrontPagesComponent } from './front-pages/front-pages.component';

import { PostDetailComponent } from './front-pages/post-detail.component';



import { AboutusComponent } from './front-pages/aboutus/aboutus.component';
import { ContactusComponent } from './front-pages/contactus/contactus.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    PagesComponent,
    FrontPagesComponent,
    PostDetailComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FrontPagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
