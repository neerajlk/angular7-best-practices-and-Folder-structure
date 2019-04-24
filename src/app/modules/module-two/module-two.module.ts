import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ModuleTwoComponent } from './module-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

//Routes
const moduleRoutes: Routes = [{
  path: 'mod-2-cmp/mod-2-cmp-1',
  component: ComponentOneComponent
},
{
  path: 'mod-2-cmp/mod-2-cmp-2',
  component: ComponentTwoComponent
},

]

@NgModule({
  declarations: [ModuleTwoComponent,ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(moduleRoutes)
  ],
})
export class ModuleTwoModule { }
