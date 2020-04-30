import {Component, OnInit, Input} from '@angular/core';
import {House} from '../house';
import {Wizard} from '../wizard';
import {WIZARDS} from '../mock-wizards';
import {WizardService} from '../wizard.service';

@Component({
  selector: 'app-house-wizards',
  templateUrl: './house-wizards.component.html',
  styleUrls: ['./house-wizards.component.css']
})
export class HouseWizardsComponent implements OnInit {
  @Input() house: House;
  wizards: Wizard[];

  constructor(private wizardService: WizardService) {
  }

  getWizards(): void {
    this.wizardService.getWizards()
      .subscribe(wizards => this.wizards = wizards);
  }

  ngOnInit(): void {
    this.getWizards();
  }

}
