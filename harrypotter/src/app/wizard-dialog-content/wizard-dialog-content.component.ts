import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Wizard} from '../wizard';
import {House} from '../house';

@Component({
  selector: 'app-wizard-dialog-content',
  templateUrl: './wizard-dialog-content.component.html',
  styleUrls: ['./wizard-dialog-content.component.css']
})
export class WizardDialogContentComponent implements OnInit {
  name: string;
  age: number;
  spells: string[];
  house: number;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.name = data.name;
    this.age = data.age;
    this.spells = data.spells;
    this.house = data.house;
  }

  ngOnInit(): void {
  }

  submitUpdate() {

  }
}
