import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {EditComponent} from './components/edit/edit.component';
import {CreateComponent} from './components/create/create.component';
import {TreeComponent} from './components/tree/tree.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'tree/:id', component: TreeComponent},
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
