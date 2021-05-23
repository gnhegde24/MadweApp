import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-interests',
  templateUrl: './intro-interests.component.html',
  styleUrls: ['./intro-interests.component.css']
})
export class IntroInterestsComponent implements OnInit {
  politics : string;
  sports : string;
  gaming : string;
  travel : string;
  arts : string;
  petCare : string;
  music: string;
  cooking : string;
  reading : string;


  constructor(private router: Router) {}

  ngOnInit() {
  }

  submit(){
    this.router.navigate(['introq']);
  }
}
