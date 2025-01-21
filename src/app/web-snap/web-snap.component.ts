import { Component, OnInit } from '@angular/core';
import { LikeBtnComponent } from '../like-btn/like-btn.component';

@Component({
  selector: 'app-web-snap',
  standalone: true,
  imports: [
    LikeBtnComponent
  ],
  templateUrl: './web-snap.component.html',
  styleUrl: './web-snap.component.css'
})
export class WebSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  likes!: number;
  image!: string;
  likeBtnClass!: string;
  isLiked!: boolean;

  ngOnInit() {
    this.title = "Webdevoo";
    this.description = "Concepteur de sites internet et boutiques en ligne depuis 2019.";
    this.createdDate = new Date();
    this.likes = 4;
    this.image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80";
    this.likeBtnClass = "like-cta";
    this.isLiked = false;
  }
}
