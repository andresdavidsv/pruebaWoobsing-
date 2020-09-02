import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { Register } from '../../../core/models/register.model';



@Component({
  selector: 'app-product',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  @Input() register: Register;

  today = new Date();

  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {
  }
}
