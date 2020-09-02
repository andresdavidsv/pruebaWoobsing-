import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RegistersService } from './../../../core/services/registers.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private registersService: RegistersService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  saveRegister(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const register = this.form.value;
      this.registersService
        .createRegister(register)
        .subscribe((newRegister) => {
          console.log(newRegister);
          this.router.navigate(['./registers']);
        });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }
}
