import {Component, Input, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Wizard} from '../wizard';

@Component({
  selector: 'app-spells-edit',
  templateUrl: './spells-edit.component.html',
  styleUrls: ['./spells-edit.component.css']
})
export class SpellsEditComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() spells: string[];
  @Input() wizard: Wizard;

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our spell
    if ((value || '').trim()) {
      this.spells.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(spell: string): void {
    const index = this.spells.indexOf(spell);

    if (index >= 0) {
      this.spells.splice(index, 1);
      this.wizard.spells = this.spells;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
