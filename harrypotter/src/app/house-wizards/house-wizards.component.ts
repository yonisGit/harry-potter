import {Component, OnInit, Input, Inject, OnChanges} from '@angular/core';
import {House} from '../house';
import {Wizard} from '../wizard';
import {WizardService} from '../wizard.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WizardDialogContentComponent} from '../wizard-dialog-content/wizard-dialog-content.component';

@Component({
  selector: 'app-house-wizards',
  templateUrl: './house-wizards.component.html',
  styleUrls: ['./house-wizards.component.css']
})
export class HouseWizardsComponent implements OnInit, OnChanges {
  @Input() house: House;
  wizards: Wizard[];
  wizardPrefix: string; // todo: rename to wizardFilterPrefix
  whichSort: number; // todo: rename to sortField

  constructor(private wizardService: WizardService, private dialog: MatDialog) {
  }

  openDialog(wizard: Wizard) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = wizard;
    const dialogRef = this.dialog.open(WizardDialogContentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      try {
        if (result.old && result.wiz) { // todo: remove
          this.wizards.splice(this.wizards.findIndex(wiz => wiz === result.old), 1);
          this.wizards.push(result.wiz);
        }
      } catch (e) {
        console.log('window closed by bad client...'); // todo: check if comes to this line
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  getWizards(): void {
    this.wizardService.getWizards()
      .subscribe(wizards => this.wizards = wizards);
  }

  getWizardsByHouseId(houseId: number): void {
    this.wizardService.getWizardsByHouseId(houseId)
      .subscribe(wizards => this.wizards = wizards);
  }

  ngOnChanges(): void {
    if (this.house) {
      this.getWizardsByHouseId(this.house.id);
    }
  }

  ngOnInit(): void {
    // this.whichSort = 0;
    // this.getWizards();
  }
}
