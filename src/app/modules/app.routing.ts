import { RouterModule, Routes } from '@angular/router';


import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component-2/my-component-2.component';

//Modules
import {ModuleOneModule} from '../modules/module-one/module-one.module'
import {ModuleTwoModule} from '../modules/module-two/module-two.module'

//Components
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

  export const Routing = RouterModule.forRoot(moduleRoutes);