import {Component, Input, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Wizard} from '../wizard';
import {SpellsComponent} from '../spells/spells.component';
import {SpellsService} from '../spells.service';

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
  existSpells: string[];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our spell
    if ((value || '').trim()) {
      const spellName = value.trim();
      if (this.existSpells.includes(spellName)) {
        this.spells.push(spellName);
        this.wizard.spells = this.spells;
      } else {
        alert('The ' + spellName + ' doesn\'t exist in the allowed spell list! Sorry...');
      }
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

  constructor(private spellsService: SpellsService) {
  }

  getSpells(): void {
    this.spellsService.getSpells().subscribe(
      spells => this.existSpells = spells
    );
  }


  ngOnInit(): void {
    this.getSpells();
  }

}
