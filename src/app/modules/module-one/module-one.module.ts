import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModuleOneComponent } from './module-one.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { RouterModule, Routes } from '@angular/router'

const moduleRoutes: Routes = [{
  path: 'mod-1-cmp/mod-1-cmp-1',
  component: ComponentOneComponent
},
{
  path: 'mod-1-cmp/mod-1-cmp-2',
  component: ComponentTwoComponent
},
]

@NgModule({
  declarations: [ModuleOneComponent,ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(moduleRoutes)
  ]
})

export class ModuleOneModule { }
