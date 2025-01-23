import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-btn',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './like-btn.component.html',
  styleUrl: './like-btn.component.css'
})
export class LikeBtnComponent implements OnInit{
  likes!:number;
  isLiked!:boolean;

  ngOnInit(): void{
    this.likes = 0;
    this.isLiked = false;
  }

  onLike(): void{
    this.likes = this.isLiked ? (this.likes - 1) : (this.likes + 1);
    this.isLiked = !this.isLiked;
  }

  onLikeByType(likeType: "like" | "unlike"){
    if(likeType === "like"){
      this.likes++;
    }else{
      this.likes--;
    }

    this.isLiked = !this.isLiked;
  }
}
