import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterEditComponent } from './components/register-edit/register-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: RegisterFormComponent,
      },
      {
        path: 'edit/:id',
        component: RegisterEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
