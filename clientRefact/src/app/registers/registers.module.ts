import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistersComponent } from './components/registers/registers.component';

import { RegisterRoutingModule } from './registers-routing.module';
import { SharedModule } from './../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [RegistersComponent, RegisterComponent],
  imports: [CommonModule, SharedModule, RegisterRoutingModule, MaterialModule],
})
export class RegistersModule {}
