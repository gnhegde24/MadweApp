import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  //Authenticate the username and password..The sessionStorage object stores data for only one session . So the data gets deleted if the browser is closed
  authenticate(username, password) {
    if (username === "test@gmail.com" && password === "test") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }
  //checks the session storage if user name exists. If it does then return true
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  //This method clears the session storage of user name
  logOut() {
    sessionStorage.removeItem('username')
  }
}
