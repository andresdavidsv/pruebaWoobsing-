import { Component, OnInit, Input } from '@angular/core';

import { Register } from './../../models/register.model';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss'],
})
export class RegistersComponent implements OnInit {
  registers: Register;
  constructor() {}

  ngOnInit() {}
}
