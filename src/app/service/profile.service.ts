import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

interface Profile{
  emailOrPhone: string;
  profileImageUrl: string;
}

const apiUrl = 'http://localhost:8080/api/madwe/';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  currentProfile: Profile = 
    {emailOrPhone: localStorage.getItem("user")+"", 
    profileImageUrl: ""}
  ;

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  uploadImage(data: any): Observable<any> {
    
    //this.currentProfile.id = JSON.parse(localStorage.getItem("token"));
    
    console.log("EmailIdorPhone is: "+localStorage.getItem("user"));
    this.currentProfile.emailOrPhone = localStorage.getItem("user")+"";
    this.currentProfile.profileImageUrl = data.profileImageUrl;
    return this.http.post<any>(apiUrl + 'upload', data)
      .pipe(
        tap((response: any) => {
          const user = response;
          console.log(user);
        }),
        catchError(this.handleError('login', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }


}
