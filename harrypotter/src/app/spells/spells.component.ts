import {Component, OnInit} from '@angular/core';
import {SpellsService} from '../spells.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Spell} from '../spell';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  spells: Spell[];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private spellsService: SpellsService) {
  }

  ngOnInit(): void {
    this.getSpells();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) { // todo: remove if not needed
      const newSpell = this.generateSpellWithId(value.trim());
      this.addSpell(newSpell);
    }

    if (input) {
      input.value = '';
    }
  }

  private generateSpellWithId(value: string) {
    return {id: this.spells.length, name: value};
  }

  remove(spell: Spell): void { // todo: use deleteSpell instead
    this.deleteSpell(spell);
  }


  getSpells(): void {
    this.spellsService.getSpells().subscribe(
      spells => this.spells = spells
    );
  }

  addSpell(spell: Spell): void {
    this.spellsService.addSpell(spell).subscribe(
      () => this.spells.push(spell)
    );
  }

  deleteSpell(spell: Spell): void {
    this.spellsService.deleteSpell(spell).subscribe(
      () => this.spells.splice(this.spells.indexOf(spell), 1)
    );
  }
}
