import {Component, OnInit, Input, Inject} from '@angular/core';
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
export class HouseWizardsComponent implements OnInit {
  @Input() house: House;
  wizards: Wizard[];
  wizardPrefix: string;
  whichSort: number;

  constructor(private wizardService: WizardService, public dialog: MatDialog) {
  }

  openDialog(wizard: Wizard) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = wizard;
    const dialogRef = this.dialog.open(WizardDialogContentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      try {
        if (result.old && result.wiz) {
          this.wizards.splice(this.wizards.findIndex(wiz => wiz === result.old), 1);
          this.wizards.push(result.wiz);
        }
      } catch (e) {
        console.log('window closed by bad client...');
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  getWizards(): void {
    this.wizardService.getWizards()
      .subscribe(wizards => this.wizards = wizards);
  }

  ngOnInit(): void {
    this.whichSort = 0;
    this.getWizards();
  }
}
