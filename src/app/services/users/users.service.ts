import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endPoint = 'https://mitsky.tk/';
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public getUsers(): Observable<any> {
    return this.http.get(this.endPoint + 'users')
      .pipe(map(this.extractData));
  }

  public getUser(email: string): Observable<any> {
    return this.http.get(this.endPoint + 'users/user/email' + email).pipe(
      map(this.extractData));
  }

  public addUser(user: User): Observable<any> {
    console.log(user);
    return this.http.post<User>
      (
        this.endPoint + 'users/create',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(
        tap((userRes) => console.log(`User added with id=${userRes.id}`)),
        catchError(this.handleError<any>('Error adding user: \n' + user))
      );
  }

  public updateUserEmail(id: number, email: string): Observable<any> {
    return this.http.put
      (
        this.endPoint + 'users/change-email' + id,
        null,
        this.httpOptions
      ).pipe(
        tap(_ => console.log(`updated product id=${id}`)),
        catchError(this.handleError<any>('Error updating User'))
      );
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.endPoint + 'users/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted USER with id=${id}`)),
      catchError(this.handleError<any>('Error deleting User'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
