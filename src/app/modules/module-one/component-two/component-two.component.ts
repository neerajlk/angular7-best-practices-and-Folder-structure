// import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { PostService } from '../../../core/services/post/post.service';
import { Post } from '../../../shared/models/post'

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

   private postDetails: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService
  ) {}

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'))

    
    this.service.getPost(id)
    .subscribe(response => {
      this.postDetails = response.json();
      console.log(this.postDetails)
    });
  }

}
