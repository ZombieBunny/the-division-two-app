import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gearTalentFilter',
  pure: false
})
export class GearTalentFilterPipe implements PipeTransform {

  transform(talents: any[], filter: {
    type: 'Offensive' | 'Defensive' | 'Utility'[],
    typeSlot: 'Common' | 'Active',
    slot: 'Backpack' | 'Chest' | 'Gloves' | ' Holster' | 'Kneepads' | 'Mask'
  }): any {

    if (!filter && !filter.type.length && !filter.typeSlot && !filter.slot) {
      return [];
    }


    return talents.filter(t => {
      if (filter.type.includes(t.type) && t.typeSlot === filter.typeSlot && t.available.includes(filter.slot)) {
        return t;
      }
    });
  }

}
