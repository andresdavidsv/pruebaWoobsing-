import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RegistersService } from './../../../core/services/registers.service';

@Component({
  selector: 'app-register-edit',
  templateUrl: './register-edit.component.html',
  styleUrls: ['./register-edit.component.scss'],
})
export class RegisterEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  constructor(
    private fb: FormBuilder,
    private registersService: RegistersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.registersService.getRegister(this.id).subscribe((register) => {
        this.form.patchValue(register);
      });
    });
  }

  saveRegister(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const register = this.form.value;
      this.registersService
        .updateRegister(this.id, register)
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
