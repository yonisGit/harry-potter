import {Pipe, PipeTransform} from '@angular/core';
import {Wizard} from '../entities/wizard';

@Pipe({
  name: 'wizardNameFilter'
})
export class WizardNameFilterPipe implements PipeTransform {

  transform(wizards: Wizard[], wizardNameString: string): Wizard[] {
    if (!wizardNameString) {
      return wizards;
    } else {
      return wizards.filter(wizard => wizard.name.toLowerCase().includes(wizardNameString.toLowerCase()));
    }
  }

}

