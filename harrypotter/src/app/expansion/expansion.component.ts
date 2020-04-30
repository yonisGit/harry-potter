import { Component, OnInit } from '@angular/core';
import {HOUSES} from '../mock-houses';
import {House} from '../house';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  panelOpenState = false;
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
