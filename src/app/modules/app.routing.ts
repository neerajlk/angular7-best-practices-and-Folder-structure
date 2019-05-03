import { RouterModule, Routes } from '@angular/router';

//Components
import { ModuleOneComponent } from './module-one/module-one.component';
import { ModuleTwoComponent } from './module-two/module-two.component';


//Routes
const moduleRoutes: Routes = [
  {
    path: 'posts',
    component: ModuleOneComponent
  },
  {
    path: 'Number-operations',
    component: ModuleTwoComponent
  }
  ]

  export const Routing = RouterModule.forRoot(moduleRoutes);