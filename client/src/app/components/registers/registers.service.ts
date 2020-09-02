import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RegistersComponent } from './registers.component';

import { HandleError, HttpErrorHandler } from '../../http-error-hand.service';

import { Register } from "./../../models/register.model";

@Injectable()
export class RegistersService {
  private handleError: HandleError;

  constructor (
    private http:HttpClient , httpErrorHandler : HttpErrorHandler {
      this.handleError = httpErrorHandler.createHandleError('RegisterService')
    };
  )

  getRegisters(): Observable<Register[]>{
    return this.http.get<Register[]>('api/registers').pipe(catchError(this.handleError('getRegisters',[])))
  }
  addRegister(register: Register): Observable<Register>{
    return this.http.
    post<Register>('api/registers',register)
    .pipe(catchError(this.handleError('addRegisters',register)))
  }
  updateRegister(register: Register): Observable<Register>{
    return this.http.
    put<Register>('api/registers/${register.id}',register)
    .pipe(catchError(this.handleError('updateRegister',register)))
  }
  deleteRegister(id:number): Observable<{}>{
    const url = `api/registers/${id}`;
    return this.http.delete(url)
    .pipe(catchError(this.handleError('deleteRegister'))
  };
}
