import {Component, OnInit} from '@angular/core';
import {SpellsService} from '../services/spells.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Spell} from '../entities/spell';
import {WizardService} from '../services/wizard.service';
import {Wizard} from '../entities/wizard';
import {Observable} from 'rxjs';
import {AlertErrorService} from '../services/alert-error.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  observable: Observable<number>;
  spells: Spell[];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private spellsService: SpellsService, private wizardService: WizardService,
              private alertErrorService: AlertErrorService) {
  }

  ngOnInit(): void {
    this.getSpells();
    this.observable = Observable.create(observer => {
      let value = 0;
      const interval = setInterval(() => {
        observer.next(value);
        value++;
      }, 1000);

      return () => clearInterval(interval);
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (value.trim()) { // todo: remove if not needed ----> DONE
      const isSpellExistAlready = this.spells.filter(spell => spell.name === value).length > 0;
      if (!isSpellExistAlready) {
        const newSpell = this.generateSpellWithId(value.trim());
        this.addSpell(newSpell);
      } else {
        this.alertErrorService.alertError('Spell is already exists!');
      }
    }

    if (input) {
      input.value = '';
    }
  }

  private generateSpellWithId(value: string) {
    return {id: this.spells.length, name: value};
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
      () => {
        this.spells.splice(this.spells.indexOf(spell), 1);
        this.wizardService.getWizards().subscribe(
          (wizards) => this.deleteSpellFromWizards(wizards, spell)
        );
      }
    );
  }

  deleteSpellFromWizards(wizards: Wizard[], spell: Spell) {
    wizards.map(wizard => {
      const wizardSpells = wizard.spells;
      const index = wizardSpells.indexOf(spell.name);
      if (index >= 0) {
        wizardSpells.splice(index, 1);
        wizard.spells = wizardSpells;
        this.wizardService.editWizard(wizard).subscribe(() => {
        }); // todo: check what to do instead of this empty func
      }
    });
  }
}
