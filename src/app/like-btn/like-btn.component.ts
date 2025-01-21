import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-btn',
  standalone: true,
  imports: [],
  templateUrl: './like-btn.component.html',
  styleUrl: './like-btn.component.css'
})
export class LikeBtnComponent implements OnInit{
  likes!:number;
  likeBtnClass!:string;
  isLiked!:boolean;

  ngOnInit(): void{
    this.likes = 0;
    this.likeBtnClass = "like-btn";
    this.isLiked = false;
  }

  onLike(): void{
    this.likes = this.isLiked ? (this.likes - 1) : (this.likes + 1);
    this.likeBtnClass = this.isLiked ? "like-btn" : "like-btn like-btn-active" ;
    this.isLiked = !this.isLiked;
  }
}
