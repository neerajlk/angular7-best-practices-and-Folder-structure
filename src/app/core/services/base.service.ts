import { Injectable } from '@angular/core';

import { Http } from '@angular/http'; 

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: Http) { }  
  

  public url = 'https://jsonplaceholder.typicode.com/posts';  
    
  
  getPosts() {  
    return this.http.get(this.url + '?_limit=10');  
  }  
  
  createPost(post) {  
    return this.http.post(this.url, JSON.stringify(post))  
  }  
  
  updatePost(post){  
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))  
  }  
  
  deletePost(id) {  
    return this.http.delete(this.url + '/' + id);  
  } 
}
