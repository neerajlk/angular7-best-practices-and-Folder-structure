import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ModuleTwoComponent } from './module-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

//Routes
const moduleRoutes: Routes = [{
  path: 'Number-operations/add-numbers',
  component: ComponentOneComponent
},
{
  path: 'Number-operations/subtract-numbers',
  component: ComponentTwoComponent
},

]

@NgModule({
  declarations: [ModuleTwoComponent,ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(moduleRoutes)
  ],
})
export class ModuleTwoModule { }
