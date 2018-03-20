import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {FrontPagesService} from '../services/front-pages.service';

import { PostDetailComponent } from '../front-pages/post-detail.component';

import {Router} from "@angular/router";

@Component({
  selector: 'app-front-pages',
  templateUrl: './front-pages.component.html',
  styleUrls: ['./front-pages.component.css']
})
export class FrontPagesComponent implements OnInit {

  public posts: any;
  
  constructor(private frontpagesService: FrontPagesService,private router: Router) {   }  
  

  ngOnInit() {
    this.getPosts();
  }

  getPosts()
  {
    this
    .frontpagesService
    .getPosts('')
    .subscribe(posts => 
      {
        console.debug('->'+posts);
        this.posts= posts.data;
      })
  }
  showmore(postId)
  {
       //alert("LINE"+postId);
    //this.router.navigate(['/postdetail']);
    this.router.navigate(['/postdetail',postId]);

    //this.router.navigate(['/postdetail',{id:10}]);
    return false;
  }

  searchKeyword(value)
  {
    //alert(value);
    this
    .frontpagesService
    .getPosts(value)
    .subscribe(posts => 
      {
        console.debug('->'+posts);
        this.posts= posts.data;
      })
  }
}
