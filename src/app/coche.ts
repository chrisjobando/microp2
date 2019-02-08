export enum CarState {GOOD, BAD}

export class Coche {
  public make:string;
  public model:string;
  public model_date:Date;
  public sale_date:Date;
  public price:number;
  public photo:string;
  public state:CarState;

  constructor(make:string, model:string,
    model_date:Date, sale_date:Date,
    price:number, photo:string,
    state:CarState) {
      this.make=make;
      this.model=model;
      this.model_date=model_date;
      this.sale_date=sale_date;
      this.price=price;
      this.photo=photo;
      this.state=state;
    }

    public getPVP():number {
      return this.price*1.21;
    }

    public lowerPrice() {
      this.price*=0.90;
    }
}
