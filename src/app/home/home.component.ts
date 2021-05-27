import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';

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

    const dialogRef = this.dialog.open(LoginComponent, {
      position: {
        top: '100px',
        left: '450px'
      }
    });
   
  }
  openSignUpDialoge(){
    this.dialog.open(SignupComponent, {
      position: {
        top: '0px',
        left: '450px'
      }
    });
  }

}
