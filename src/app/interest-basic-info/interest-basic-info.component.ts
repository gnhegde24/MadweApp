import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interest-basic-info',
  templateUrl: './interest-basic-info.component.html',
  styleUrls: ['./interest-basic-info.component.css']
})
export class InterestBasicInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.router.navigate(['introq']);
  }


}
