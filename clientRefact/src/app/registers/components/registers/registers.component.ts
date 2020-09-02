import { Component, OnInit } from '@angular/core';
import { Register } from './../../../core/models/register.model';
import { RegistersService } from './../../../core/services/registers.service';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss'],
})
export class RegistersComponent implements OnInit {
  registers: Register;

  displayedColumns: string[] = [
    'name',
    'last_name',
    'phone',
    'email',
    'address',
    'actions',
  ];

  constructor(private registersService: RegistersService) {}

  ngOnInit() {
    this.fetchRegisters();
  }

  fetchRegisters() {
    this.registersService.getAllRegisters().subscribe((registers) => {
      this.registers = registers;
      console.log(registers);
    });
  }

  deleteRegister(id: string) {
    this.registersService.deleteRegister(id).subscribe((rta) => {
      this.fetchRegisters();
    });
  }

  // TEST CRUD
  // createRegister() {
  //   const newRegister: Register = {
  //     name: 'DAVID',
  //     last_name: 'dasdasda',
  //     phone: 123456,
  //     email: 'dsd@dasdad.com',
  //     address: 'dasdasd',
  //   };
  //   this.registersService.createRegister(newRegister).subscribe((register) => {
  //     console.log(register);
  //   });
  // }
  // updateRegister() {
  //   const updateRegister: Partial <Register> = {
  //     name: 'DAVID',
  //     last_name: 'dasdasda',
  //     phone: 123456,
  //     email: 'adad@k.com',
  //     address: 'dasdasd',
  //   };
  //   this.registersService.updateRegister('1',updateRegister).subscribe((register) => {
  //     console.log(register);
  //   });
  // }
  // deleteRegister() {
  //   this.registersService
  //     .deleteRegister('11')
  //     .subscribe((register) => {
  //       console.log(register);
  //     });
  // }
}
