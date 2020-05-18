import {Component, OnInit, Input, Inject} from '@angular/core';
import {House} from '../house';
import {Wizard} from '../wizard';
import {WIZARDS} from '../mock-wizards';
import {WizardService} from '../wizard.service';
import {WizardUpdateComponent} from '../wizard-update/wizard-update.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WizardDialogContentComponent} from '../wizard-dialog-content/wizard-dialog-content.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-house-wizards',
  templateUrl: './house-wizards.component.html',
  styleUrls: ['./house-wizards.component.css']
})
export class HouseWizardsComponent implements OnInit {
  @Input() house: House;
  wizards: Wizard[];
  wizardPrefix: string;

  constructor(private wizardService: WizardService, public dialog: MatDialog) {
  }

  openDialog(wizard: Observable<Wizard>) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = wizard;
    const dialogRef = this.dialog.open(WizardDialogContentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getWizards(): void {
    this.wizardService.getWizards()
      .subscribe(wizards => this.wizards = wizards);
  }

  setWizard(newWizard: Wizard): void {
    this.wizards.forEach(wizard => {
      if (wizard.name === newWizard.name) {
        wizard.age = 99;
      }
    });
  }

  ngOnInit(): void {
    this.getWizards();
  }

}
