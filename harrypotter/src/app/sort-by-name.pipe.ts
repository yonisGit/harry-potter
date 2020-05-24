import {Pipe, PipeTransform} from '@angular/core';
import {Wizard} from './wizard';
import {PipeType} from './pipe-type';

@Pipe({
  name: 'sortOrFilter'
})
export class SortOrFilterPipe implements PipeTransform {

  transform(unsortedWizards: Wizard[], sortType: PipeType): any {
    if (sortType === PipeType.Sort_Name) {
      return unsortedWizards.sort((wizard1, wizard2) =>
        wizard1.name > wizard2.name ? 1 : -1);
    } else if (sortType === PipeType.Sort_Name_Dec) {
      return unsortedWizards.sort((wizard1, wizard2) =>
        wizard1.name > wizard2.name ? -1 : 1);
    } else if (sortType === PipeType.Sort_Age) {
      return unsortedWizards.sort((wizard1, wizard2) =>
        wizard1.age > wizard2.age ? 1 : -1);
    } else if (sortType === PipeType.Sort_Age_Dec) {
      return unsortedWizards.sort((wizard1, wizard2) =>
        wizard1.age > wizard2.age ? -1 : 1);
    } else {
      return unsortedWizards;
    }
  }

}
