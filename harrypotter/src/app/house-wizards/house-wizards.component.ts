import {Component, OnInit, Input} from '@angular/core';
import {House} from '../house';
import {Wizard} from '../wizard';
import {WIZARDS} from '../mock-wizards';
import {WizardService} from '../wizard.service';
import {WizardUpdateComponent} from '../wizard-update/wizard-update.component';

@Component({
  selector: 'app-house-wizards',
  templateUrl: './house-wizards.component.html',
  styleUrls: ['./house-wizards.component.css']
})
export class HouseWizardsComponent implements OnInit {
  @Input() house: House;
  wizards: Wizard[];
  wizardPrefix: string;
  public toOpen: boolean;

  constructor(private wizardService: WizardService) {
  }

  getWizards(): void {
    this.wizardService.getWizards()
      .subscribe(wizards => this.wizards = wizards);
  }

  ngOnInit(): void {
    this.toOpen = false;
    this.getWizards();
  }

  editWizard(wizard: Wizard) {
    this.toOpen = true;
  }
}
