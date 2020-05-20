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
  name: string;
  age: number;
  spells: string[];
  @Input() wizard: Wizard;
  passedWizard: Wizard;

  constructor(public dialogRef: MatDialogRef<WizardDialogContentComponent>,
              @Inject(MAT_DIALOG_DATA) data, private wizardService: WizardService) {
    this.wizard = data;
  }

  ngOnInit(): void {
    this.passedWizard = Object.create(this.wizard);
    this.name = this.wizard.name;
    this.age = this.wizard.age;
  }

  submitUpdate() {
    const newWizard = {
      id: this.passedWizard.id,
      name: this.name,
      age: Number(this.age),
      image: this.passedWizard.image,
      spells: this.passedWizard.spells,
      house: Number(this.passedWizard.house)
    };
    const result = {old: this.wizard, wiz: newWizard};
    this.wizardService.editWizard(newWizard).subscribe(
      () => this.dialogRef.close(result)
    );
  }

  cancel() {
    this.dialogRef.close();
  }
}
