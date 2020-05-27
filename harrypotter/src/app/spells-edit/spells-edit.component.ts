import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Wizard} from '../entities/wizard';
import {SpellsService} from '../services/spells.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Spell} from '../entities/spell';
import {MatAutocomplete} from '@angular/material/autocomplete';
import {AlertErrorService} from '../services/alert-error.service';

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
  spellsOptions: Observable<string[]>;
  spellControl = new FormControl();
  @ViewChild('spellInput') spellInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private spellsService: SpellsService, private alertErrorService: AlertErrorService) {
  }

  ngOnInit() {
    this.wizardSpells = [...this.wizard.spells];
    this.getSpells();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    this.createAndAddSpellToWizard(value.trim());

    if (input) {
      input.value = '';
    }
  }

  private createAndAddSpellToWizard(spellName: string) {
    if (spellName) {
      const newSpell = this.allSpells.find(spell => spell.name === spellName);

      if (!!newSpell) {
        this.addSpellToWizard(newSpell);
      } else {
        this.alertErrorService
          .alertError(`The ${newSpell.name} spell doesn't exist in the allowed spell list! Sorry...`);
      }
    }
  }

  private addSpellToWizard(newSpell: { name: string; id: number }) {
    if (!this.wizardSpells.includes(newSpell.name)) {
      this.wizardSpells.push(newSpell.name);
      this.wizard.spells = this.wizardSpells;
    } else {
      this.alertErrorService
        .alertError(`The ${newSpell.name} spell is already exists for this wizard! Sorry...`);
    }
  }

  remove(spell: string): void {
    const index = this.wizardSpells.indexOf(spell);

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
        this.spellsOptions = this.spellControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSpells
      .filter(option => option.name.toLowerCase().startsWith(filterValue) && !this.wizardSpells.includes(option.name))
      .map(spell => spell.name);
  }
}
