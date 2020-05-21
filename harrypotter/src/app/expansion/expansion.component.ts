import {Component, OnInit} from '@angular/core';
import {House} from '../house';
import {HouseService} from '../house.service';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  houses: House[];
  selectedHouse: House;
  // todo : change name of component to house-component.
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
