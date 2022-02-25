import { Component, Output, EventEmitter } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

import { Router } from '@angular/router';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent  {
  

  @Output() public sidenavToggle = new EventEmitter();
  constructor(public router: Router, private dialog: MatDialog) { }

  public links = [
    { name: 'Profile', href:'/', icon: 'manage_accounts'},
      {name: 'Dashboard', href: '/', icon: 'dashboard'},
      {name: 'Personal Intro Questions', href: '/introq', icon: 'engineering'}
      ];


  
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    this.router.navigate(['home']);
  }

  
   onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  visible(){
    return !(this.router.url === '/login' || this.router.url === '/signup' || this.router.url === '/home');
  }

  openLogoutConfirmationDialog(){
    const dialogRef = this.dialog.open(DialogLogoutConfirmation);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.logout();
      }
    });
  }

}
@Component({
  selector: 'dialog-logout-confirmation',
  templateUrl: 'dialog-logout-confirmation.html',
})
export class DialogLogoutConfirmation {}
