import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {House} from '../entities/house';
import {Wizard} from '../entities/wizard';
import {WizardService} from '../services/wizard.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WizardDialogContentComponent} from '../wizard-dialog-content/wizard-dialog-content.component';
import {PipeType} from '../entities/pipe-type';
import {EditActions} from '../entities/edit-actions';
import {WizardAddDialogComponent} from '../wizard-add-dialog/wizard-add-dialog.component';

@Component({
  selector: 'app-house-wizards',
  templateUrl: './house-wizards.component.html',
  styleUrls: ['./house-wizards.component.css']
})
export class HouseWizardsComponent implements OnInit, OnChanges {
  @Input() house: House;
  wizards: Wizard[];
  wizardFilterString: string; // todo: rename to wizardFilterPrefix ----> DONE
  sortField: PipeType; // todo: rename to sortField ---> DONE

  constructor(private wizardService: WizardService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openEditWizardDialog(wizard: Wizard) {
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

  openAddWizardDialog() {
    const dialogRef = this.dialog.open(WizardAddDialogComponent);
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
}
