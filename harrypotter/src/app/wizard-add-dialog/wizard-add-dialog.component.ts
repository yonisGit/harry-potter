import {Component, Inject, Input, OnInit} from '@angular/core';
import {Wizard} from '../entities/wizard';
import {MatDialogRef} from '@angular/material/dialog';
import {WizardService} from '../services/wizard.service';

@Component({
  selector: 'app-wizard-add-dialog',
  templateUrl: './wizard-add-dialog.component.html',
  styleUrls: ['../wizard-dialog-content/wizard-dialog-content.component.css']
})
export class WizardAddDialogComponent implements OnInit {
  name: string;
  age: number;
  private spells: string[];
  passedWizard: Wizard;

  constructor(public dialogRef: MatDialogRef<WizardAddDialogComponent>,
              private wizardService: WizardService) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close();
  }

}
