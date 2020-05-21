import {Component, OnInit} from '@angular/core';
import {SpellsService} from '../spells.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  spells: string[];
  spellsToDelete: string[]; // todo: delete
  spellsToAdd: string[];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) { // todo: remove if not needed
      this.addSpell(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  remove(spell: string): void { // todo: use deleteSpell instead
    this.deleteSpell(spell);
  }

  constructor(private spellsService: SpellsService) {
  }

  getSpells(): void {
    this.spellsService.getSpells().subscribe(
      spells => this.spells = spells
    );
  }

  addSpell(spell: string): void {
    this.spellsService.addSpell(spell).subscribe(
      () => this.spells.push(spell)
    );
  }

  deleteSpell(spell: string): void {
    this.spellsService.deleteSpell(spell).subscribe(
      () => this.spells.splice(this.spells.indexOf(spell), 1)
    );
  }

  ngOnInit(): void {
    this.spellsToAdd = [];
    this.spellsToDelete = [];
    this.getSpells();
  }
}
