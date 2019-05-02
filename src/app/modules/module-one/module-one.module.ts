import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModuleOneComponent } from './module-one.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';


import {ModuleOneRouting} from './module-one.routing'



@NgModule({
  declarations: [ModuleOneComponent, ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    ModuleOneRouting
  ]
})

export class ModuleOneModule { }
