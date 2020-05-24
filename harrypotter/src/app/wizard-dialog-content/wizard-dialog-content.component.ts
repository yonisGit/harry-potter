import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Wizard} from '../entities/wizard';
import {WizardService} from '../services/wizard.service';
import {EditActions} from '../entities/edit-actions';

@Component({
  selector: 'app-wizard-dialog-content',
  templateUrl: './wizard-dialog-content.component.html',
  styleUrls: ['./wizard-dialog-content.component.css']
})
export class WizardDialogContentComponent implements OnInit {
  spells: string[];
  @Input() wizard: Wizard;
  passedWizard: Wizard;
  initialSpells: string[];

  constructor(public dialogRef: MatDialogRef<WizardDialogContentComponent>,
              @Inject(MAT_DIALOG_DATA) data, private wizardService: WizardService) {
    this.wizard = data;
  }

  ngOnInit(): void {
    this.initialSpells = this.wizard.spells;
    this.passedWizard = {...this.wizard}; // todo: change to {... this.wizard} ---> DONE
  }

  saveWizard() {
    // todo: use passedWizard here and on the ngModel ---> DONE
    this.wizardService.editWizard(this.passedWizard).subscribe(
      () => this.dialogRef.close({wizard: this.passedWizard, action: EditActions.EDIT})
    );
  }

  deleteWizard() {
    this.wizardService.deleteWizard(this.passedWizard).subscribe(
      () => {
        this.dialogRef.close({wizard: this.passedWizard, action: EditActions.DELETE});
      }
    );
  }

  cancel() {
    this.wizard.spells = this.initialSpells;
    this.dialogRef.close();
  }
}
