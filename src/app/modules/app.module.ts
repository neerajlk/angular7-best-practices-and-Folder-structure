//core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

//Environment
import { environment } from '../../environments/environment';

//external angular components,modules,directives
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component-2/my-component-2.component';

//Services
import { BaseService } from '../core/services/base.service'
import { PostService } from '../core/services/post/post.service'
import { SubService } from '../core/services/sub/sub.service';
import {ModuleOneModule} from '../modules/module-one/module-one.module'
import {ModuleTwoModule} from '../modules/module-two/module-two.module'

import { ModuleOneComponent } from './module-one/module-one.component';
import { ModuleTwoComponent } from './module-two/module-two.component';



//Routes
const moduleRoutes: Routes = [{
  path: 'new-cmp',
  component: MyComponentComponent
},
{
  path: 'new-cmp-2',
  component: MyComponent2Component
},
{
  path: 'mod-1-cmp',
  component: ModuleOneComponent
},
{
  path: 'mod-2-cmp',
  component: ModuleTwoComponent
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
    ModuleOneModule,
    ModuleTwoModule,
  ],
  providers: [BaseService, PostService, SubService],
  bootstrap: [AppComponent]
})


export class AppModule {

  baseUrl = environment.baseUrl;

}
