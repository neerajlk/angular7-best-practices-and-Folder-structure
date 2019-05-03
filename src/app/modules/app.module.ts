//core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//external angular components,modules,directives
import { AppComponent } from './app.component';
import { ModuleOneModule } from '../modules/module-one/module-one.module'
import { ModuleTwoModule } from '../modules/module-two/module-two.module'

//Shared Module
import { SharedModule } from '../shared/shared.module'

//core Module
import {CoreModule} from '../core/core.module'

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
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {


}
