import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Wizard} from '../wizard';
import {House} from '../house';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {HouseWizardsComponent} from '../house-wizards/house-wizards.component';

@Component({
  selector: 'app-wizard-dialog-content',
  templateUrl: './wizard-dialog-content.component.html',
  styleUrls: ['./wizard-dialog-content.component.css']
})
export class WizardDialogContentComponent implements OnInit {
  name: string;
  age: number;
  image: string;
  spells: string[];
  house: number;
  @Input() wizard: Wizard;

  // originalWizard: Wizard;

  constructor(@Inject(MAT_DIALOG_DATA) data, private http: HttpClient) {
    this.wizard = data;
    this.name = data.name;
    this.age = data.age;
    this.image = data.image;
    this.spells = data.spells;
    this.house = data.house;
  }

  ngOnInit(): void {
  }

  submitUpdate() {
    const url = 'http://localhost:8080/harry-potter/wizards';
    this.wizard.age = 11;
    return this.http.post(url, this.wizard);
  }
}
