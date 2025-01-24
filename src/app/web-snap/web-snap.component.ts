import { Component, Input, OnInit } from '@angular/core';
import { LikeBtnComponent } from '../like-btn/like-btn.component';
import { WebSnap } from '../models/web-snap.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WebSnapsService } from '../services/web-snaps.service';

@Component({
  selector: 'app-web-snap',
  standalone: true,
  imports: [
    CommonModule,
    LikeBtnComponent,
    RouterLink
  ],
  templateUrl: './web-snap.component.html',
  styleUrl: './web-snap.component.css'
})
export class WebSnapComponent implements OnInit{
  @Input() websnap!: WebSnap;
  defaultWebSnap:WebSnap = new WebSnap({
    title: "Default Card",
    description:"Enter any values here !",
    createdDate: new Date(),
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTR4cHg4cGw0bXV4ZWEwaDJ2ZnZqajZscmxjZXoxeXNuaHMzdWxkYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
  });

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private webSnapsService:WebSnapsService
  ){}

  ngOnInit(): void{
    const webSnapId:number|undefined = Number(this.route.snapshot.params["id"]);

    if(webSnapId){
      const webSnapByService = this.webSnapsService.getWebsnapById(webSnapId);
      this.websnap = webSnapByService;
    }
  }

  onRedirect(){
    this.router.navigateByUrl("websnaps");
  }
}
