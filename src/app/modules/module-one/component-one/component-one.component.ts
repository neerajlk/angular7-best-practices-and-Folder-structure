import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../core/http/post/post.service';

import { Post } from '../../../shared/models/post'

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  posts: Post[];
  constructor(private service: PostService) {
  }


  ngOnInit() {

    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        alert('User_ID : ' + response.json().userId + ' Updated')
      });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        alert('post_ID : ' + post.id + ' Deleted')
      });
  }

}
