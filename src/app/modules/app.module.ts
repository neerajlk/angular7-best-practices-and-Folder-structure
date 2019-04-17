//core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

//Environment
import { environment } from '../../environments/environment';

//external angular components,modules,directives
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component-2/my-component-2.component';

//Services
import { PostService } from '../core/services/post.service'


//Routes
const moduleRoutes: Routes = [{
  path: 'new-cmp',
  component: MyComponentComponent
},
{
  path: 'new-cmp-2',
  component: MyComponent2Component
}
]




@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent2Component,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(moduleRoutes),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})


export class AppModule {

  baseUrl = environment.baseUrl;

}
