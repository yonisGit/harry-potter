import {Pipe, PipeTransform} from '@angular/core';
import {Wizard} from './wizard';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(wizardsUnsorted: Wizard[], whichSort: number): Wizard[] {
    let wizardsSorted: Wizard[];
    if (whichSort === 1) {
      wizardsSorted = wizardsUnsorted.sort((a, b) =>
        a.name > b.name ? 1 : -1);
      return wizardsSorted;
    } else if (whichSort === 2) {
      wizardsSorted = wizardsUnsorted.sort((a, b) =>
        a.age > b.age ? 1 : -1);
      return wizardsSorted;
    } else {
      return wizardsUnsorted;
    }
  }

}
