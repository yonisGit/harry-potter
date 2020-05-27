import {Component, Input, OnInit} from '@angular/core';
import {House} from '../entities/house';
import {HouseService} from '../services/house.service';

@Component({
  selector: 'app-house-tabs',
  templateUrl: './house-tabs.component.html',
  styleUrls: ['./house-tabs.component.css']
})
export class HouseTabsComponent implements OnInit {
  @Input() houses: House[];
  selectedHouse: House;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(house: House) {
    this.selectedHouse = house;
  }
}
