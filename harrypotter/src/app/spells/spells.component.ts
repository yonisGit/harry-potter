import {Component, OnInit} from '@angular/core';
import {SpellsService} from '../spells.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  spells: string[];

  constructor(private spellsService: SpellsService) {
  }

  getSpells(): void {
    this.spellsService.getSpells().subscribe(
      spells => this.spells = spells
    );
  }

  ngOnInit(): void {
    this.getSpells();
  }

}
