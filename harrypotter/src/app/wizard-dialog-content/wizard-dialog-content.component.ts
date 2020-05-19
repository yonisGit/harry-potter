import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Wizard} from '../wizard';
import {House} from '../house';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HouseWizardsComponent} from '../house-wizards/house-wizards.component';
import {WizardService} from '../wizard.service';

@Component({
  selector: 'app-wizard-dialog-content',
  templateUrl: './wizard-dialog-content.component.html',
  styleUrls: ['./wizard-dialog-content.component.css']
})
export class WizardDialogContentComponent implements OnInit {
  name: string;
  age: number;
  // image: string;
  spellString: string;
  spells: string[];
  // house: number;
  @Input() wizard: Wizard;

  // originalWizard: Wizard;

  constructor(public dialogRef: MatDialogRef<WizardDialogContentComponent>,
              @Inject(MAT_DIALOG_DATA) data, private wizardService: WizardService) {
    this.wizard = data;
    // this.name = data.name;
    // this.age = data.age;
    // this.image = data.image;
    // this.spells = data.spells;
    // this.house = data.house;
  }

  ngOnInit(): void {
    this.name = this.wizard.name;
    this.age = this.wizard.age;
    this.spellString = this.wizard.spells.join();
  }

  submitUpdate() {
    const newWizard = {
      id: this.wizard.id,
      name: this.name,
      age: Number(this.age),
      image: this.wizard.image,
      spells: this.wizard.spells,
      house: Number(this.wizard.house)
    };
    const result = {old: this.wizard, wiz: newWizard};
    this.wizardService.addWizard(newWizard).subscribe(
      () => this.dialogRef.close(result)
    );
  }
}
