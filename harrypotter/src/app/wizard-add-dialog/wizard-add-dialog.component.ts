import {Component, Inject, Input, OnInit} from '@angular/core';
import {Wizard} from '../entities/wizard';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WizardService} from '../services/wizard.service';
import {EditActions} from '../entities/edit-actions';

@Component({
  selector: 'app-wizard-add-dialog',
  templateUrl: './wizard-add-dialog.component.html',
  styleUrls: ['../wizard-dialog-content/wizard-dialog-content.component.css']
})
export class WizardAddDialogComponent implements OnInit {
  wizard: Wizard;

  constructor(public dialogRef: MatDialogRef<WizardAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data, private wizardService: WizardService) {
    this.wizard = data;
  }

  ngOnInit(): void {
  }

  saveWizard() {
    this.wizardService.addWizard(this.wizard).subscribe(
      () => this.dialogRef.close({wizard: this.wizard, action: EditActions.ADD})
    );
  }

  cancel() {
    this.dialogRef.close();
  }
}
