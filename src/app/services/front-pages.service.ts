import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FrontPagesService { 
public posts: any;
public keyword: any;
private url = 'http://localhost/test_area/angulars/ang-blog/remote-data/connect.php';
private url_post = 'http://localhost/test_area/angulars/ang-blog/remote-data/post.php';

  constructor(private http: HttpClient) {

    this.posts = [{
      Title: 'Post 1',
      Detail: 'Post Detail.....'
    },
    {
      Title: 'Post 2',
      Detail: 'Post 2 Detail.....'    
   }] 
  } 

  getPosts(value): Observable<any>
  {
    
    console.log(value); 

    if(value != '' && value != undefined)
        return this.http.get(this.url+'?searchvalue='+value);
      else
        return this.http.get(this.url);
    //return of(this.posts);
  }

  getPostDetail(postId)
  {

    //alert(this.url_post+'---'+postId);
    //return this.http.post(this.url_post,"{postId:222}",httpOptions);
    return this.http.get(this.url+'?postId='+postId);
    //return this.http.get(this.url_post);    

  }

  
}
