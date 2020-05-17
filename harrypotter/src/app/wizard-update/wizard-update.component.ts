import {Component, Input} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {HouseWizardsComponent} from '../house-wizards/house-wizards.component';

@Component({
  selector: 'app-wizard-update',
  templateUrl: './wizard-update.component.html',
  styleUrls: ['./wizard-update.component.css']
})
export class WizardUpdateComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
