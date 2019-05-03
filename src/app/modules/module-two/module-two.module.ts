import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ModuleTwoComponent } from './module-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

import {ModuleTwoRouting} from './module-two-routing'



@NgModule({
  declarations: [ModuleTwoComponent,ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModuleTwoRouting
  ],
})
export class ModuleTwoModule { }
