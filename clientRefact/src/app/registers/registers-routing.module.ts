import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistersComponent } from './components/registers/registers.component';

const routes: Routes = [
  {
    path: '',
    component: RegistersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
