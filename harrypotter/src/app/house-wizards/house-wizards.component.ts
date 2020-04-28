import { Component, OnInit, Input} from '@angular/core';
import {House} from '../house';

@Component({
  selector: 'app-house-wizards',
  templateUrl: './house-wizards.component.html',
  styleUrls: ['./house-wizards.component.css']
})
export class HouseWizardsComponent implements OnInit {
  @Input() house: House;
  constructor() { }

  ngOnInit(): void {
  }

}
