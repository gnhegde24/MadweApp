import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-chat-head',
  templateUrl: './profile-chat-head.component.html',
  styleUrls: ['./profile-chat-head.component.css']
})
export class ProfileChatHeadComponent implements OnInit {

  profilePanelMatches: string[] = [
    "https://randomuser.me/api/portraits/women/25.jpg",
    "https://randomuser.me/api/portraits/women/26.jpg",
    "https://randomuser.me/api/portraits/men/25.jpg",
    "https://randomuser.me/api/portraits/men/89.jpg",
    "https://randomuser.me/api/portraits/men/39.jpg",
    "https://randomuser.me/api/portraits/men/59.jpg",
    "https://randomuser.me/api/portraits/women/39.jpg",
    "https://randomuser.me/api/portraits/women/79.jpg",
    "https://randomuser.me/api/portraits/women/25.jpg",
    "https://randomuser.me/api/portraits/women/26.jpg",
    "https://randomuser.me/api/portraits/women/25.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
