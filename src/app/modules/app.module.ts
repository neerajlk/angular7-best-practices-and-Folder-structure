//core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Environment
import { environment } from '../../environments/environment';

//external angular components,modules,directives
import { AppComponent } from './app.component';

//Services
import { BaseService } from '../core/services/base.service'

//Modules
import { ModuleOneModule } from '../modules/module-one/module-one.module'
import { ModuleTwoModule } from '../modules/module-two/module-two.module'

//Shared Module
import { SharedModule } from '../shared/shared.module'

//routes
import { Routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ModuleOneModule,
    ModuleTwoModule,
    SharedModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})


export class AppModule {

  baseUrl = environment.baseUrl;

}
