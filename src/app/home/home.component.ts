import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';
/* import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialAuthService } from "angularx-social-login"; */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogInDialoge(){

    if(!localStorage.getItem('user')){
      const dialogRef = this.dialog.open(LoginComponent, {
        position: {
          top: '100px',
          left: '450px'
        }
      });
  
    }
    else 
    this.router.navigate(['matches']);
    
  }
  openSignUpDialoge(){
    if(!localStorage.getItem('user')){
    this.dialog.open(SignupComponent, {
      position: {
        top: '0px',
        left: '450px'
      }
    });
  } else
  this.router.navigate(['matches']);
  }

/*   signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  } */

/*   loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['introi']));
  } */

}
