import { Component, Input, OnInit } from '@angular/core';
import { WebSnap } from '../models/web-snap.model';
import { WebSnapsService } from '../services/web-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-web-snap',
  standalone: true,
  imports: [],
  templateUrl: './single-web-snap.component.html',
  styleUrl: './single-web-snap.component.css'
})
export class SingleWebSnapComponent implements OnInit{
  webSnap!:WebSnap;
  @Input() id?: number;

  constructor(
    private webSnapsService:WebSnapsService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{
    const webSnapId = this.id ? Number(this.id) : Number(this.route.snapshot.params["id"]);

    this.webSnap = this.webSnapsService.getWebsnapById(webSnapId);
  }

  onShow(webSnapId: number|undefined){
    if(!webSnapId){
      throw new Error("L'id du websnap est invalide !");
    }
    this.router.navigateByUrl(`websnap/${webSnapId}`);
  }
}
