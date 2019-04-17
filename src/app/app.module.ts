// Importing core angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


// Importing External Modules
import { AppComponent } from './modules/app.component';
import { environment } from '../environments/environment';


// Importing required components
import { MyComponentComponent } from './modules/my-component/my-component.component';
import { MyComponent2Component } from './modules/my-component-2/my-component-2.component';


// Importing Service
import { PostService } from './core/services/post.service'



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent2Component,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'new-cmp',
        component: MyComponentComponent
      },
      {
        path: 'new-cmp2',
        component: MyComponent2Component
      }
    ]),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {

  baseUrl = environment.baseUrl;

}
