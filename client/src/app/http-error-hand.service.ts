import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messageService.service';

export type HandleError = <Reg>(
  operation?: string,
  result?: Reg
) => (error: HttpErrorResponse) => Observable<Reg>;

@Injectable()
export class HttpErrorHandler {
  constructor(private messageService: MessageService) {}

    createHandleError = (serviceName = '') =>
      {
        operation = 'operation',
        result = {} as Reg;
      } as; Reg => this.handleError(serviceName, operation, result);

handleError<Reg>(serviceName = '', operation = 'operation', result = { } as Reg); {
        return (error: HttpErrorResponse): Observable<Reg> => {
          console.log(error);
          const message = error.error instanceof ErrorEvent ? error.error.message : `Servicio no encontrado por error ${error.status}`;

          this.messageService.add(
            `${serviceName} : ${operation} failed ${message}`
          );
          return of(result);
        };
      }
}
