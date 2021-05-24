import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder,FormsModule, FormGroup, NgForm, Validators } from '@angular/forms';
import{ReligiousGroups} from '../model/ReligiousGroups';
import{Religion} from '../model/Religion';
import{ProfileService} from '../service/profile.service';
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  isPhotoAvailable = false;
  showInitials = false;
  initials: string;
  circleColor: string;
  userName: string;
  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
];

  basicInfoForm: FormGroup;
  isIdProofDisabled: boolean = false;
  name: string;
  message: string;
  photoUrl: any={};
  imagePath: string;
  imageModel: any={};
  idProofModel: any={};
  religionControl = new FormControl();
  languageControl = new FormControl();
  idProofControl = new FormControl();
  religion: Religion;
  languages: String[] = ['Kannada','Hindi', 'English','Bengali','Marathi','Telugu',
                          'Tamil', 'Marathi', 'Gujarathi', 'Urdu', 'Odia', 'Malayalam',
                        'Punjabi', 'Assamese'];
  proofs: String[] = ['Aadhar','VoterID', 'Pan Card','Passport'];
  
  religiousGroups: ReligiousGroups[]=[
    {
      name: 'Hindu',
      religion: [
        {value: 'brahmin', viewValue: 'Brahmin'},
        {value: 'vaishya', viewValue: 'Vaishya'},
        {value: 'khsatriya', viewValue: 'Kshatriya'},
        {value: 'shudra', viewValue: 'Shudra'}
      ]
    },
    {
      name: 'Christian',
      religion: [
        {value: 'romanCatholic', viewValue: 'Roman Catholic'},
        {value: 'protestants', viewValue: 'Protestants'},
        {value: 'catholic', viewValue: 'Catholic'}
      ]
    },
    {
      name: 'Muslim',
      disabled: true,
      religion: [
        {value: 'sunni', viewValue: 'Sunni Islam'},
        {value: 'shia', viewValue: 'Shia Islam'}
      ]
    },
    {
      name: 'Other',
      religion: [
        {value: 'sikh', viewValue: 'Sikh'},
        {value: 'buddhist', viewValue: 'Buddhist'},
        {value: 'jewish', viewValue: 'Jewish'},
        {value: 'athiest', viewValue: 'Athiest'}
      ]
    }
  ];
  
  constructor(private router: Router, private formBuilder: FormBuilder, private profileService: ProfileService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(!this.isPhotoAvailable){
      this.showInitials = true;
      this.createInititals();

      const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
      this.circleColor = this.colors[randomIndex];
    }

    this.basicInfoForm = this.formBuilder.group({
      height : [null, Validators.required],
      heightParam : [null, Validators.required]
    });
  }

  back(){
    this.router.navigate(['introq']);
  }

  submit(){
    this.router.navigate(['matches']);
  }

  onSubmit(form: NgForm){

  }

  onFileChange(event){
    const files = event.target.files;
    if(files.length == 0 ){
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
  }
  const reader = new FileReader();
    this.imagePath = files;
    let image:any = reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
    this.photoUrl = reader.result; 
    this.imageModel.file = event.target.files[0];

    const img = new Image();
    img.src = reader.result as string;
    img.onload = () => {
      const height = img.naturalHeight;
      const width = img.naturalWidth;
      console.log('Width and Height', width, height);
    };
  }
  this.isPhotoAvailable = true;
  this.showInitials= false;
}

  submitImage(){
    console.log("About to send upload image data"+this.imageModel.file)
    this.profileService.uploadImage(this.imageModel);
  }

  private createInititals(): void {
    let initials = "";
    var retrievedObject = JSON.parse(localStorage.getItem('user'));
    this.userName = retrievedObject.firstName + retrievedObject.lastName;
    console.log("This current user is: "+this.userName);
    for (let i = 0; i < this.userName.length; i++) {
        if (this.userName.charAt(i) === ' ') {
            continue;
        }

        if (this.userName.charAt(i) === this.userName.charAt(i).toUpperCase()) {
            initials += this.userName.charAt(i);

            if (initials.length == 2) {
                break;
            }
        }
    }

    this.initials = initials;
}


onProofSubmit(event){
  this.idProofModel.file = event.target.files[0];
  this.isIdProofDisabled = true;
  this.dialog.open(DialogElementsExampleDialog);
  
  
}


}

export interface DialogData {
  dialog: 'This is just a dialogue box' ;
}

@Component({
  selector: 'dialog-elements-example-dialog',
  template: '<div style="font-family:cursive;font-weight: bolder;font-size: 17px;" mat-dialog-content>Id Proof Uploaded Successfully.</div>',
  
})
export class DialogElementsExampleDialog {}

