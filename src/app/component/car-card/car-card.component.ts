import { Component, OnInit, Input } from '@angular/core';
import {CarInterface} from "../../interfaces/car.interface";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() public myCar: CarInterface;
  constructor() { }

  ngOnInit() {
    console.log(this.myCar);
  }
}
