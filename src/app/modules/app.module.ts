//core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Environment
import { environment } from '../../environments/environment';

//external angular components,modules,directives
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component-2/my-component-2.component';

//Services
import { BaseService } from '../core/services/base.service'

//Modules
import {ModuleOneModule} from '../modules/module-one/module-one.module'
import {ModuleTwoModule} from '../modules/module-two/module-two.module'

//routes
import { Routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent2Component,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Routing,
    ModuleOneModule,
    ModuleTwoModule,
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})


export class AppModule {

  baseUrl = environment.baseUrl;

}
