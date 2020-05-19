import {Component, OnInit} from '@angular/core';
import {House} from '../house';
import {HouseService} from '../house.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses: House[];
  selectedHouse: House;

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
