import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {WizardDialogContentComponent} from '../wizard-dialog-content/wizard-dialog-content.component';

@Component({
  selector: 'app-wizard-dialog',
  templateUrl: './wizard-dialog.component.html',
  styleUrls: ['./wizard-dialog.component.css']
})
export class WizardDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(WizardDialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
