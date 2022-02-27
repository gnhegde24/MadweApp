import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormsModule, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReligiousGroups } from '../model/ReligiousGroups';
import { Religion } from '../model/Religion';
import { ProfileService } from '../service/profile.service';
import { ShowInitialsService } from '../service/show-initials.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImageCropperModule, ImageTransform ,  ImageCroppedEvent,  Dimensions} from 'ngx-image-cropper';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {


 
  basicInfoForm: FormGroup;
  isIdProofDisabled: boolean = false;
  name: string;
  userName:boolean=false;
  idProofModel: any = {};
  religionControl = new FormControl();
  languageControl = new FormControl();
  idProofControl = new FormControl();
  religion: Religion;
  initials: string;
  circleColor: string;
  showInitials = true;
  message: string;
  photoUrl: any ={};
  croppedImage: any = '';
  imagePath: string;
  imageModel: any = {};
  isUserIdColumnClicked: boolean=false;
  private colors = [
    '#EB7181', // red
    '#ff9933', // orange
    '#ff6699', // pink
    '#003399', // blue
    '#00ff99', // red
    '#ffff00', // orange
    '#996633', // pink
    '#b3b300', // blue
  ];

  languages: String[] = ['Kannada', 'Hindi', 'English', 'Bengali', 'Marathi', 'Telugu',
    'Tamil', 'Marathi', 'Gujarathi', 'Urdu', 'Odia', 'Malayalam',
    'Punjabi', 'Assamese'];
  proofs: String[] = ['Aadhar', 'VoterID', 'Pan Card', 'Passport'];

  religiousGroups: ReligiousGroups[] = [
    {
      name: 'Hindu',
      religion: [
        { value: 'brahmin', viewValue: 'Brahmin' },
        { value: 'vaishya', viewValue: 'Vaishya' },
        { value: 'khsatriya', viewValue: 'Kshatriya' },
        { value: 'shudra', viewValue: 'Shudra' }
      ]
    },
    {
      name: 'Christian',
      religion: [
        { value: 'romanCatholic', viewValue: 'Roman Catholic' },
        { value: 'protestants', viewValue: 'Protestants' },
        { value: 'catholic', viewValue: 'Catholic' }
      ]
    },
    {
      name: 'Muslim',
      disabled: true,
      religion: [
        { value: 'sunni', viewValue: 'Sunni Islam' },
        { value: 'shia', viewValue: 'Shia Islam' }
      ]
    },
    {
      name: 'Other',
      religion: [
        { value: 'sikh', viewValue: 'Sikh' },
        { value: 'buddhist', viewValue: 'Buddhist' },
        { value: 'jewish', viewValue: 'Jewish' },
        { value: 'athiest', viewValue: 'Athiest' }
      ]
    }
  ];
  

  constructor(private router: Router, private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private showInitialsService: ShowInitialsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.showInitials) {
      this.initials = this.showInitialsService.createInititals();
      //this.initials="GH";
      const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
      this.circleColor = this.colors[randomIndex];
    }

    this.basicInfoForm = this.formBuilder.group({
      checked: false,
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      qualification: [null, Validators.required],
      id: [null, Validators.required],
      state: [null, Validators.required],
      pin: [null, Validators.required],
    });
  }

 

  onSubmit(form: NgForm) {

  }

  onFileChange(event) {
    const files = event.target.files;
    if (files.length == 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    let image: any = reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.photoUrl = reader.result;
      var size = ((files[0].size/(1024*1024)) > 1)? (files[0].size/(1024*1024)) + ' mB' : (files[0].size/		1024)+' kB';
      this.imageModel.file = event.target.files[0];

      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        const height = img.naturalHeight;
        const width = img.naturalWidth;
        console.log('Width and Height', width, height);
      };
    }
    this.showInitials = false;
  }







  submitImage() {
    console.log("About to send upload image data" + this.imageModel.file)
    this.profileService.uploadImage(this.imageModel);
  }




  onProofSubmit(event) {

    this.idProofModel.file = event.target.files[0];
    this.isIdProofDisabled = true;
    if (event.target.files.length == 1) {
      //this.dialog.open(DialogElementsExampleDialog);
    }



  }

  onImageUpload(event){
    //this.profileImageComp.fileChangeEvent(event);
    //this.profileImageComp.imageCropped(event);
    console.log("opening dialog");
   
    //const dialogRef = this.dialog.open(ProfileImageCropperDialog, {
     /// data: {croppedImage: this.photoUrl}
    //});
    console.log("open dialog is called...")
    //dialogRef.afterClosed().subscribe(result => {
    //  console.log("Dialog result:");
    //  console.log(result+"");
  //  })
   // this.showInitials = false;
    

  }


  checkName(isChecked: boolean){
    if(isChecked){
      var retrievedObject = JSON.parse(localStorage.getItem('user'));
      this.basicInfoForm.controls['firstname'].setValue(retrievedObject.firstName+"");
      this.basicInfoForm.controls['lastname'].setValue(retrievedObject.lastName+"");
      this.basicInfoForm.controls['firstname'].disable();
      this.basicInfoForm.controls['lastname'].disable();
      this.basicInfoForm.controls['id'].setValue((retrievedObject.firstName+"").substring(0,3)+retrievedObject.lastName);
    }
    else {
      this.basicInfoForm.controls['firstname'].reset();
      this.basicInfoForm.controls['lastname'].reset();
      this.basicInfoForm.controls['firstname'].enable();
      this.basicInfoForm.controls['lastname'].enable();
      this.basicInfoForm.controls['id'].reset();
    }

    }

isUserIdDisplay(){
  this.isUserIdColumnClicked = true;
}
}

export class DialogData {
  imageChangedEvent: any = '';
    

}

/*
@Component({
  selector: 'profile-image-cropper-dialog',
  templateUrl: 'profile-image-cropper-dialog.html',

})
export class ProfileImageCropperDialog { 

  imageChangedEvent: any = '';
  croppedImage: any = '';
  // canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};
  constructor(
    public dialogRef: MatDialogRef<ProfileImageCropperDialog>) {}

  onImageUpload(): void {
    this.dialogRef.close();
  }

  fileChangeEvent(event: any): void {
            this.imageChangedEvent = event;
        }
        imageCropped(event: ImageCroppedEvent) {
            this.croppedImage = event.base64;
        }
        imageLoaded() {
            this.showCropper = true;
            console.log('Image loaded');
        }
        cropperReady(sourceImageDimensions: Dimensions) {
            console.log('Cropper ready', sourceImageDimensions);
        }
        loadImageFailed() {
            console.log('Load failed');
        }
        zoomOut() {
            this.scale -= .1;
            this.transform = {
                ...this.transform,
                scale: this.scale
            };
        }
        zoomIn() {
            this.scale += .1;
            this.transform = {
                ...this.transform,
                scale: this.scale
            };
        }
       
        updateRotation() {
            this.transform = {
                ...this.transform,
                rotate: this.rotation
            };
        }
        imageUpload(){
            this.dialogRef.close();
        }
    
}
*/
