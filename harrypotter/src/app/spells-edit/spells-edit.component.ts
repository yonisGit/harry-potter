import {Component, Input, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Wizard} from '../wizard';
import {SpellsService} from '../spells.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-spells-edit',
  templateUrl: './spells-edit.component.html',
  styleUrls: ['./spells-edit.component.css']
})
export class SpellsEditComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  wizardSpells: string[];
  @Input() wizard: Wizard;
  allSpells: string[];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();

  // todo: refactor function
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our spell
    if ((value || '').trim()) { // todo: remove trim and '' everywhere.
      const spellName = value.trim();
      if (this.allSpells.includes(spellName)) {
        if (!this.wizardSpells.includes(spellName)) {
          this.wizardSpells.push(spellName);
          this.wizard.spells = this.wizardSpells;
        } else {
          alert('The ' + spellName + ' spell is already exists! Sorry...');
        }
      } else {
        alert('The ' + spellName + ' spell doesn\'t exist in the allowed spell list! Sorry...');
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(spell: string): void {
    const index = this.wizardSpells.indexOf(spell); // todo: use includes

    if (index >= 0) {
      this.wizardSpells.splice(index, 1);
      this.wizard.spells = this.wizardSpells;
    }
  }

  // todo: constructor always first and after it the ngOnInit.
  constructor(private spellsService: SpellsService) {
  }

  getSpells(): void {
    this.spellsService.getSpells().subscribe(
      spells => {
        this.allSpells = spells;
        // in order for this to happen only after the above command
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      }
    );
  }

  ngOnInit() {
    this.wizardSpells = [...this.wizard.spells];
    this.getSpells();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSpells
      .filter(option => option.toLowerCase().startsWith(filterValue) && this.wizardSpells.includes(option));
  }
}
