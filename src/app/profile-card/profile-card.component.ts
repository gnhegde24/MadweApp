import { Component, OnInit } from '@angular/core';
import { ShowInitialsService } from '../service/show-initials.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  isCoverPhoto: boolean = false;
  initials: string;
  circleColor: string;
  showInitials = true;

  message: string;
  photoUrl: any = {};
  coverPhotoUrl: any={};
  imagePath: string;
  imageModel: any = {};
  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];


  constructor(private showInitialsService: ShowInitialsService) { }

  ngOnInit(): void {
    if(this.showInitials){
  
      this.initials = this.showInitialsService.createInititals();
      const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
      this.circleColor = this.colors[randomIndex];
    }
  }


  onProfileChange(event) {

    
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

onCoverPhotoUpdate(event) {

  
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
    this.coverPhotoUrl = reader.result;
    this.imageModel.file = event.target.files[0];

    const img = new Image();
    img.src = reader.result as string;
    img.onload = () => {
      const height = img.naturalHeight;
      const width = img.naturalWidth;
      console.log('Width and Height', width, height);
    };
  }

  this.isCoverPhoto = true;

}


}
