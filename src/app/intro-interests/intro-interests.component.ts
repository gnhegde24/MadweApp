import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-interests',
  templateUrl: './intro-interests.component.html',
  styleUrls: ['./intro-interests.component.css']
})
export class IntroInterestsComponent implements OnInit {
  interests: FormGroup;
  showOthers: boolean = false;


  constructor(private router: Router, fb: FormBuilder) {
    this.interests = fb.group({
      politics: false,
      sports: false,
      gaming: false,
      travel: false,
      arts: false,
      petCare: false,
      music: false,
      cooking: false,
      reading: false,
      movies: false,
      others: false
    })
  }

  ngOnInit() {
  }

  submit() {
    this.router.navigate(['introq']);
  }
}
