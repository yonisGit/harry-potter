import {Component, Input, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Wizard} from '../wizard';
import {SpellsService} from '../spells.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Spell} from '../spell';

@Component({
  selector: 'app-spells-edit',
  templateUrl: './spells-edit.component.html',
  styleUrls: ['./spells-edit.component.css']
})
export class SpellsEditComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  wizardSpells: string[];
  @Input() wizard: Wizard;
  allSpells: Spell[];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();

  // todo: constructor always first and after it the ngOnInit.
  constructor(private spellsService: SpellsService) {
  }

  ngOnInit() {
    this.wizardSpells = [...this.wizard.spells];
    this.getSpells();
  }

  // todo: refactor function
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our spell
    if (value.trim()) { // todo: remove trim and '' everywhere. ---> DONE
      const newSpell = {id: this.allSpells.findIndex(s => s.name === value), name: value};
      if (this.allSpells.includes(newSpell)) {
        if (!this.wizardSpells.includes(newSpell.name)) {
          this.wizardSpells.push(newSpell.name);
          this.wizard.spells = this.wizardSpells;
        } else {
          alert('The ' + newSpell + ' spell is already exists! Sorry...');
        }
      } else {
        alert('The ' + newSpell + ' spell doesn\'t exist in the allowed spell list! Sorry...');
      }
    }

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

  getSpells(): void {
    this.spellsService.getSpells().subscribe(
      spells => {
        this.allSpells = spells;
        // in order for this to happen only after the above command
        this.filteredOptions = this.myControl.valueChanges.pipe(
          map(value => value.name),
          map(value => this._filter(value))
        );
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSpells
      .filter(option => option.name.toLowerCase().startsWith(filterValue) && this.wizardSpells.includes(option.name))
      .map(spell => spell.name);
  }
}
