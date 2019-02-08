import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coche, CarState } from './coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Micropractica ANGULAR - 02';
  public CarState:any = CarState
  public coches:Array<Coche>=[new Coche(
    'renault', 'scenic', new Date(2007,10,1),
    new Date(2018,3,1), 5000, 'coche01.jpg',
    CarState.GOOD), new Coche(
    'seat', 'ibiza', new Date(2003,4,12),
    new Date(2018,2,1), 1200, 'coche02.jpg',
    CarState.GOOD), new Coche(
    'renault', 'megane', new Date(2006,12,23),
    new Date(2018,2,1), 3500, 'coche03.jpg',
    CarState.BAD), new Coche(
    'tesla', 'model 3', new Date(2006,12,23),
    new Date(2018,2,1), 4000, '',
    CarState.GOOD)];

    public filter:string='';

    public getFiltered():Array<number> {
      var filtered:Array<number>=[];
      var index:number=0;
      for (var coche of this.coches) {
        if(coche.make.lastIndexOf(this.filter, 0) == 0)
          filtered.push(index);
          index=index+1;
      }
      return filtered;
    }

    public cmd_sell(id) {
      this.coches.splice(id, 1);
    }

    public cmd_lower(id) {
      this.coches[id].lowerPrice();
    }
}
