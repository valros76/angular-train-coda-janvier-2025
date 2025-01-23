import { Component, OnInit } from '@angular/core';
import { WebSnap } from '../models/web-snap.model';
import { WebSnapComponent } from '../web-snap/web-snap.component';
import { WebSnapsService } from '../services/web-snaps.service';

@Component({
  selector: 'app-web-snap-list',
  standalone: true,
  imports: [
    WebSnapComponent
  ],
  templateUrl: './web-snap-list.component.html',
  styleUrl: './web-snap-list.component.css'
})
export class WebSnapListComponent implements OnInit {
  webSnaps!: WebSnap[];
  webSnapsServiceList!: WebSnap[];

  constructor(
    private webSnapsService: WebSnapsService
  ) { }

  ngOnInit(): void {
    this.webSnaps = [
      new WebSnap({
        id: 1,
        title: "Webdevoo",
        description: "Concepteur de sites internet et boutiques en ligne depuis 2019.",
        createdDate: new Date(),
        image: "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "Orléans"
      }
      ),
    ];

    this.webSnapsServiceList = this.webSnapsService.getAllWebSnaps();
  }

}
