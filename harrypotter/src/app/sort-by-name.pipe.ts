import {Pipe, PipeTransform} from '@angular/core';
import {Wizard} from './wizard';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(wizardsUnsorted: Wizard[]): Wizard[] {
    const wizardsSorted = wizardsUnsorted.sort((a, b) =>
      a > b ? -1 : 1);
    return wizardsSorted;
  }

}
