import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Register } from './../models/register.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistersService {
  registers: Register[];

  constructor(private http: HttpClient) {}
  getAllRegisters() {
    return this.http.get<Register>(`${environment.url_api}/registers`);
  }
  getRegister(id: number) {
    return this.http.get(`${environment.url_api}/registers/${id}`);
  }
  createRegister(register: Register) {
    return this.http.post(`${environment.url_api}/registers`, register);
  }
  updateRegister(id: number, changes: Partial<Register>) {
    return this.http.put(`${environment.url_api}/registers/${id}`, changes);
  }

  deleteRegister(id: string) {
    return this.http.delete(`${environment.url_api}/registers/${id}`);
  }
}
