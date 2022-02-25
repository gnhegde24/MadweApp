import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-matches',
  templateUrl: './profile-matches.component.html',
  styleUrls: ['./profile-matches.component.css']
})
export class ProfileMatchesComponent implements OnInit {


  matchingPhotos: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Shraddha_Kapoor_at_Badlapur_success_bash.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/07/25/852308-shraddhakapoor-061519.jpg",
    "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/23/Pictures/_8612849c-3d9f-11ea-bfbd-f812f33ac46f.jpg",
    "https://static.toiimg.com/photo/msid-71503055/71503055.jpg?689801",
    "https://filmfare.wwmindia.com/content/2021/apr/shraddhakapoor11618291823.jpg",
    "https://i.pinimg.com/564x/9e/fe/b8/9efeb89987b103ca771fa8fa8fafd08e.jpg",
    "https://www.indiantelevision.com/sites/default/files/styles/230x230/public/images/tv-images/2021/04/16/img_16042021_125420_800_x_800_pixel.jpg?itok=2zpy8IlT",
    "https://img.dtnext.in/Articles/2021/Feb/202102051607144525_Shraddha-Kapoor-explains-the-power-of-shunya_SECVPF.gif",
    "https://c.ndtvimg.com/2019-01/pkglnbs8_shraddha-kapoor_625x300_15_January_19.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Shraddha_Kapoor_at_Badlapur_success_bash.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/07/25/852308-shraddhakapoor-061519.jpg",
    "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/23/Pictures/_8612849c-3d9f-11ea-bfbd-f812f33ac46f.jpg",
    "https://static.toiimg.com/photo/msid-71503055/71503055.jpg?689801",
    "https://filmfare.wwmindia.com/content/2021/apr/shraddhakapoor11618291823.jpg",
    "https://i.pinimg.com/564x/9e/fe/b8/9efeb89987b103ca771fa8fa8fafd08e.jpg",
    "https://www.indiantelevision.com/sites/default/files/styles/230x230/public/images/tv-images/2021/04/16/img_16042021_125420_800_x_800_pixel.jpg?itok=2zpy8IlT",
    "https://img.dtnext.in/Articles/2021/Feb/202102051607144525_Shraddha-Kapoor-explains-the-power-of-shunya_SECVPF.gif",
    "https://c.ndtvimg.com/2019-01/pkglnbs8_shraddha-kapoor_625x300_15_January_19.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
