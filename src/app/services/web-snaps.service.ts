import { Injectable } from "@angular/core";
import { WebSnap } from "../models/web-snap.model";

@Injectable({
  providedIn: "root"
})
export class WebSnapsService{
  private webSnaps: WebSnap[] = [
    {
      id: 1,
      title: "ExtWebSnap",
      description: "Simulation d'un Websnap Externe - ID 1",
      createdDate: new Date(),
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWtxbWg2cmttY2g4bWthbjhtYjVhMmk5dXdnNGI3OTRocW5ha29oZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25UxpWoNBu8nOtURm9/giphy.gif",
      location: "Paris"
    }
  ];

  getAllWebSnaps(): WebSnap[]{
    return this.webSnaps;
  }

  getWebsnapById(webSnapId: number):WebSnap{
    const webSnap = this.webSnaps.find(webSnap => webSnap.id === webSnapId);

    if(!webSnap){
      throw new Error(`Le websnap ayant pour ID ${webSnapId} n'existe pas.`);
    }
    
    return webSnap;
  }
}