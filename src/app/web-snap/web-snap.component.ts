import { Component, Input } from '@angular/core';
import { LikeBtnComponent } from '../like-btn/like-btn.component';
import { WebSnap } from '../models/web-snap.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-snap',
  standalone: true,
  imports: [
    CommonModule,
    LikeBtnComponent
  ],
  templateUrl: './web-snap.component.html',
  styleUrl: './web-snap.component.css'
})
export class WebSnapComponent{
  @Input() websnap!: WebSnap;
  defaultWebSnap:WebSnap = new WebSnap({
    title: "Default Card",
    description:"Enter any values here !",
    createdDate: new Date(),
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTR4cHg4cGw0bXV4ZWEwaDJ2ZnZqajZscmxjZXoxeXNuaHMzdWxkYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
  });
}
