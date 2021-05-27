import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  @ViewChild('sidenav') sidenav: MatSidenav;
  visible: boolean;
  constructor() {
    this.visible = false; 
   }

   public links = [
     { name: 'Profile', href:'/', icon: 'manage_accounts'},
     {name: 'Dashboard', href: '/matches', icon: 'dashboard'},
     
       {name: 'Interests', href: '/introi', icon: 'flutter_dash'},
       {name: 'Your Questions', href: '/introq', icon: 'question_answer'},
       {name: 'Basic Info', href: '/basicinfo', icon: 'fingerprint'}
       ];


 

}
