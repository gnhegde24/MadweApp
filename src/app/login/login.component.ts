import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatDialogRef} from '@angular/material/dialog';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { validateBasis } from '@angular/flex-layout';
import { from } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public socialUser: SocialUser = new SocialUser;
loginForm: FormGroup;
matcher = new MyErrorStateMatcher();
isLoadingResults = false;
isLoginError:boolean = false;

  hide = true;

  //emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private dialogRef: MatDialogRef<LoginComponent>) { }

  async ngOnInit() {

    this.socialAuthService.authState.subscribe((user)=>{
      this.socialUser = user;
      console.log("From GOOGLE"+JSON.stringify(user));
      console.log("MY APP FR GOOGLE"+JSON.stringify(this.socialUser));
    });
    
    if(localStorage.getItem('token')){
      this.router.navigate(['matches']);
  }

    this.loginForm = this.formBuilder.group({
      emailOrPhone: [null, [Validators.required, Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$')]],
      password: [null, Validators.required],
      loginFrom: "Madwe"
    });
  }

  onFormSubmit(form: NgForm) {

    /* if(!this.loginForm.valid){
      return;
    }
 */
    
    this.authService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem("user",JSON.stringify(res.user));
          this.dialogRef.close();
          this.router.navigate(['introi']);
        } else {
          this.isLoginError=true;
        }
      }, (err) => {
        console.log(err);
      });
      /* this.dialogRef.close(); */
  }

  loginWithGoogle(){
    /* this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID); */
    if(!localStorage.getItem("user")){
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(() => this.loginAndGenerateTokenForGoogleUser());
    }
    
  
    /* from(this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)).subscribe((user)=>{
      this.socialUser = user;
      console.log("From GOOGLE"+JSON.stringify(user));
      console.log("MY APP FR GOOGLE"+JSON.stringify(this.socialUser));
    }) */
  /*  this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      console.log("From GOOGLE"+user);
      console.log("MY APP FR GOOGLE"+this.socialUser);
    }); */
   
  }

  cancel() {
    this.router.navigate(['home']);
  }

  loginAndGenerateTokenForGoogleUser(){
    this.socialAuthService.authState.subscribe((user)=>{
      this.socialUser = user;
      console.log("From GOOGLE"+JSON.stringify(user));
      console.log("MY APP FR GOOGLE"+JSON.stringify(this.socialUser));
    });
    this.loginForm.get('emailOrPhone').setValue(this.socialUser.email);
    this.loginForm.get('loginFrom').setValue("Google");
    this.authService.login(this.loginForm.value)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem("user",JSON.stringify(res.user));
          this.dialogRef.close();
          this.router.navigate(['matches']);
        } else {
          this.isLoginError=true;
        }
      }, (err) => {
        console.log(err);
      });
  }

}
