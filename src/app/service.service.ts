import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Clients } from './admin/models.ts/models';
import { catchError } from 'rxjs/operators';
import { Batches } from './client/create-batch/batch';
import { Courses } from './client/course/course';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }
  _url = 'http://localhost:3000/userData';
  _url1 = 'http://localhost:8086/users/save';
  private handleError(errorResponse: HttpErrorResponse) {

    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error:', errorResponse.error.message);
    }
    else {
      console.error('Server Side Error:', errorResponse.error);

    }
    return throwError('there is a problem with a server .We are notified & working on it.Please try again later.');
  }
  register(userData) {
    return this._http.post<any>(this._url, userData);
  }
  clientRegister(clientData: Clients): Observable<Clients> {


    console.log(clientData);
    console.log(new Clients());
    return this._http.post<Clients>(this._url1, clientData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));


  }
  updateEmployee(client: Clients): Observable<void> {
    return this._http.put<void>("http://localhost:3000/clientData/" + client.sno, client, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }
  getClients(): Observable<Clients[]> {
    return this._http.get<Clients[]>('http://localhost:8086/users/list')
      .pipe(catchError(this.handleError));
  }
  getClient(id: number): Observable<Clients> {
    return this._http.get<Clients>("http://localhost:8086/users/get/" + id)
      .pipe(catchError(this.handleError));
  }

  deleteClient(id: number): Observable<void> {
    console.log(id)
    return this._http.delete<void>("http://localhost:8086/users/delete/" + id)
      .pipe(catchError(this.handleError));
  }

  batchRegister(batch: Batches): Observable<Batches> {


    console.log(batch);
    console.log(new Clients());
    return this._http.post<Batches>("http://localhost:8086/batch/save", batch, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));


  }
  getBatches(): Observable<any> {
    return this._http.get<any>("http://localhost:8086/batch/list")
      .pipe(catchError(this.handleError));
  }
  getBatch(id: number): Observable<Batches> {
    return this._http.get<Batches>("http://localhost:8086/batch/get/" + id)
      .pipe(catchError(this.handleError));
  }

  deleteBatch(id: number): Observable<void> {
    console.log(id)
    return this._http.delete<void>("http://localhost:8086/batch/delete/" + id)
      .pipe(catchError(this.handleError));
  }

  updateBatch(batch: Batches): Observable<void> {
    return this._http.put<void>("http://localhost:8086/batch/update" + batch, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  courseRegister(course: Courses): Observable<Courses> {


    console.log(course);
    console.log(new Courses());
    return this._http.post<Courses>("http://localhost:8086/course/save", course, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));


  }
}
