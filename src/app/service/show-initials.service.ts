import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowInitialsService {

  

  
  
  userName: string;
 

  constructor() { }

 createInititals(): string {
    let initials = "";
    var retrievedObject = JSON.parse(localStorage.getItem('user'));
    this.userName = retrievedObject.firstName + retrievedObject.lastName;
    console.log("This current user is: "+this.userName);
    for (let i = 0; i < this.userName.length; i++) {
        if (this.userName.charAt(i) === ' ') {
            continue;
        }

        if (this.userName.charAt(i) === this.userName.charAt(i).toUpperCase()) {
            initials += this.userName.charAt(i);

            if (initials.length == 2) {
                break;
            }
        }
    }

   return initials;
}
}
