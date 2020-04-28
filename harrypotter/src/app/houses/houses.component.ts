import {Component, OnInit} from '@angular/core';
import {House} from '../house';
import {HOUSES} from '../mock-houses';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses = HOUSES;
  selectedHouse: House;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(house: House) {
  this.selectedHouse = house;
  }
}
