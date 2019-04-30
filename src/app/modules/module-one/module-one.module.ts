import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ModuleOneComponent } from './module-one.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { RouterModule, Routes } from '@angular/router'

const moduleRoutes: Routes = [{
  path: 'posts/posts-list',
  component: ComponentOneComponent
},
{
  path: 'posts/posts-list/:id',
  component: ComponentTwoComponent
}
]

@NgModule({
  declarations: [ModuleOneComponent, ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(moduleRoutes)
  ]
})

export class ModuleOneModule { }
