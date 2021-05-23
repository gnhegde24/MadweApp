import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-footer',
  templateUrl: './content-footer.component.html',
  styleUrls: ['./content-footer.component.css']
})
export class ContentFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  visible(){
    return !(this.router.url === '/login' || this.router.url === '/signup' || this.router.url === '/home');
  }

  

}
