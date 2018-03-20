import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import {FrontPagesService} from '../services/front-pages.service';

@Component({
  selector: 'app-front-pages',
  templateUrl: './post-detail.component.html',
   /* styleUrls: ['./front-pages.component.css'] */
})
export class PostDetailComponent implements OnInit {

  public postTitle: any;  
  public postImg: any;  
  public postDetail: any;  
  public postDate: any;  



  public post: any;  
  public subscription: any; public myParam: any;
  

    constructor(private activeRoute: ActivatedRoute,private frontpagesService: FrontPagesService) { }


  ngOnInit() {
    //params.get('id');
    //this.getPosts();

    this.subscription = this.activeRoute.paramMap
       .subscribe(params => {
           if(params.get('id') !== this.myParam) {
               this.myParam= +params.get('id');

               //alert(this.myParam);

               this.post = this.frontpagesService.getPostDetail(this.myParam)
               .subscribe(post => 
                {
                  //console.log(post);
                  //this.post = post;
                  this.postTitle  = post[0].Title;
                  this.postImg    = post[0].img;
                  this.postDetail = post[0].Detail;
                  this.postDate   = post[0].DateEntered;
                });

               //console.log('--->'+this.post+'<---'+this.myParam);

               //Do things with new parameter - e.g. reload data
           }
       });
  }  // End of  ngInit

} // End of Class