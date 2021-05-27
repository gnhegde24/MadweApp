import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthenticationService } from '../service/authentication.service';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {MatDialogRef} from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  registerForm: FormGroup;
  isLoadingResults = false;
  isSubmitted = false;
  pattern = new RegExp(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8}/);
  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private dialogRef: MatDialogRef<SignupComponent>) { 
    
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName : [null, Validators.required],
      lastName : [null, Validators.required],
      email: [null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.maxLength(254)]],
      phone : [null, [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.maxLength(10)]],
      password : [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}')]],
      confirmPassword : [null, [Validators.required]],
      gender : [null, Validators.required],
      relnStatus : [null, Validators.required],
      dateOfBirth : [null, Validators.required]
    },
    {
      validator : this.checkPasswords("password", "confirmPassword")
    });
  }
  
  async onRegister(form: NgForm){
    if (form.invalid) {  
      return;  
   }  
    this.isSubmitted = true;
    this.authService.register(form).subscribe(res => {
      console.log(res);
      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem("user",JSON.stringify(res.user));
        this.router.navigate(['introi']);
      }
    }, (err) => {
      console.log(err);
    });
    this.dialogRef.close();
  }

  cancel() {
    this.router.navigate(['home']);
  }

  checkPasswords(controlName: string, matchingControlName: string) { 
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

}



