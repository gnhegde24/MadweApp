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
       {name: 'Intro Questions', href: '/introi', icon: 'quiz'},
       {name: 'Your Questions', href: '/introq', icon: 'settings_accessibility'}
       ];

  title = 'dashboard-app';

  close(){
    this.sidenav.close();
  }
  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

}
