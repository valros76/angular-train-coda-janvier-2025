export class WebSnap{
  public id?:number;
  public title!:string;
  public description!:string;
  public createdDate!:Date;
  public image!:string;
  public location?:string;

  constructor(params:{
    id?:number,
    title:string,
    description:string,
    createdDate:Date,
    image:string,
    location?:string
  }){
    const {
      id = undefined,
      title,
      description,
      createdDate,
      image,
      location = undefined
    } = params;

    this.id = id;
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.image = image;
    this.location = location;
  }

}