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
  justString: string;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.justString = data.name;
  }

  ngOnInit(): void {
  }

}
