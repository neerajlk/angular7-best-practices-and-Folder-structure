import { Injectable } from '@angular/core'; 

import { BaseService } from '../base.service'
  
@Injectable({  
  providedIn: 'root'  
})  
export class PostService {  
  
    
  constructor(private BaseService: BaseService) { }  
  
  getPosts() {  
    // return this.http.get(this.url);  
    return this.BaseService.getPosts();  
  }  
  
  createPost(post) { 
    // return this.http.post(this.url, JSON.stringify(post))  
    return this.BaseService.createPost(post)  ;
  }  
  
  updatePost(post){  
    // return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))  
    return this.BaseService.updatePost(post);
  }  
  
  deletePost(id) {  
    // return this.http.delete(this.url + '/' + id);  
    return this.BaseService.deletePost(id);
  }  
}  