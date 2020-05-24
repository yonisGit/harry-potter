import {Component, OnInit} from '@angular/core';
import {House} from '../entities/house';
import {HouseService} from '../services/house.service';

@Component({
  selector: 'app-house-tabs',
  templateUrl: './house-tabs.component.html',
  styleUrls: ['./house-tabs.component.css']
})
export class HouseTabsComponent implements OnInit {
  houses: House[];
  selectedHouse: House;

  // todo : change name of component to house-component. ---> DONE
  constructor(private houseService: HouseService) {
  }

  getHouses(): void {
    this.houseService.getHouses().subscribe(
      houses => this.houses = houses
    );
  }

  ngOnInit(): void {
    this.getHouses();
  }

  onSelect(house: House) {
    this.selectedHouse = house;
  }
}
