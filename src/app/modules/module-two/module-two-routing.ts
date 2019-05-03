import { RouterModule, Routes } from '@angular/router';

//Components
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

export const ModuleTwoRouting = RouterModule.forRoot(moduleRoutes);