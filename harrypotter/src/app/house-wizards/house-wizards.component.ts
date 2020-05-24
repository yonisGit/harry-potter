import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {House} from '../house';
import {Wizard} from '../wizard';
import {WizardService} from '../wizard.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WizardDialogContentComponent} from '../wizard-dialog-content/wizard-dialog-content.component';
import {PipeType} from '../pipe-type';
import {EditActions} from '../edit-actions';

@Component({
  selector: 'app-house-wizards',
  templateUrl: './house-wizards.component.html',
  styleUrls: ['./house-wizards.component.css']
})
export class HouseWizardsComponent implements OnInit, OnChanges {
  @Input() house: House;
  wizards: Wizard[];
  wizardNameString: string; // todo: rename to wizardFilterPrefix
  sortField: PipeType; // todo: rename to sortField

  constructor(private wizardService: WizardService, private dialog: MatDialog) {
  }

  openDialog(wizard: Wizard) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = wizard;
    const dialogRef = this.dialog.open(WizardDialogContentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      try {
        if (result.action === EditActions.EDIT) {
          const wizId = this.wizards.findIndex(w => w.id === result.wizard.id);
          this.wizards[wizId] = result.wizard;
        } else if (result.action === EditActions.DELETE) {
          const index = this.wizards.findIndex(w => w.id === result.wizard.id);
          this.wizards.splice(index, 1);
        }
      } catch (e) {
        console.log('Client closed the window sloppily...'); // todo: check if comes to this line ---> DONE : comes to this!
      }
    });
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
  }

  sortByName(acDec: number) {
    if (acDec === 1) {
      this.sortField = PipeType.Sort_Name;
    } else {
      this.sortField = PipeType.Sort_Name_Dec;
    }
  }

  sortByAge(acDec: number) {
    if (acDec === 1) {
      this.sortField = PipeType.Sort_Age;
    } else {
      this.sortField = PipeType.Sort_Age_Dec;
    }
  }
}
