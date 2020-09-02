import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { PageNotFoundRoutingModule } from './pagenotfoundrouting.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [CommonModule, SharedModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule {}
