import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from "rxjs";
import {environment} from "../../../environment";

@Injectable()
export class FibonacciService {

  backendBaseUrl = environment.backendBaseUrl;

  /**
   * Interacts with the Fibonacci backend service
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Fetch the fibonacci sequence from our backend service
   * @param n
   */
  public getFibonacciOf(n: Number) {
    return this.http.get(`${this.backendBaseUrl}/fibonacci/${n}`)
      .pipe(catchError((error: any): Observable<any> => {
        console.error('There was an error getting Fibonacci of n!', error);
        // Think otherwise I'd properly log if I had anywhere for logs to go
        return of();
      }))
  }
}
