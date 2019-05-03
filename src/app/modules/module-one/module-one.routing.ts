import { RouterModule, Routes } from '@angular/router';

//Components
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';



//Routes
const moduleRoutes: Routes = [{
    path: 'posts/posts-list',
    component: ComponentOneComponent
},
{
    path: 'posts/posts-list/:id',
    component: ComponentTwoComponent
}
]

export const ModuleOneRouting = RouterModule.forRoot(moduleRoutes);