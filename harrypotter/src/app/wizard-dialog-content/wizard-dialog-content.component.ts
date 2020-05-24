import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Wizard} from '../wizard';
import {WizardService} from '../wizard.service';

@Component({
  selector: 'app-wizard-dialog-content',
  templateUrl: './wizard-dialog-content.component.html',
  styleUrls: ['./wizard-dialog-content.component.css']
})
export class WizardDialogContentComponent implements OnInit {
  // name: string;
  // age: number;
  spells: string[];
  @Input() wizard: Wizard;
  passedWizard: Wizard;

  constructor(public dialogRef: MatDialogRef<WizardDialogContentComponent>,
              @Inject(MAT_DIALOG_DATA) data, private wizardService: WizardService) {
    this.wizard = data;
  }

  ngOnInit(): void {
    this.passedWizard = {... this.wizard}; // todo: change to {... this.wizard}
    // this.name = this.wizard.name; // todo: remove value from html
    // this.age = this.wizard.age; // todo: remove value from html
  }

  saveWizard() {
    // todo: use passedWizard here and on the ngModel
    this.wizardService.editWizard(this.passedWizard).subscribe(
      () => this.dialogRef.close(this.passedWizard)
    );
  }

  cancel() {
    this.dialogRef.close();
  }
}
