import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gearAttributeFilter',
  pure: true
})
export class GearAttributeFilterPipe implements PipeTransform {

  transform(attributes: { name: string, type: string, available: any[] }[],
            type: 'Offensive' | 'Defensive' | 'Utility',
            slot: 'Backpack' | 'Chest' | 'Gloves' | ' Holster' | 'Kneepads' | 'Mask'): any[] {

    if (!attributes) {
      return [];
    }

    console.log(attributes);

    if (!type || !slot) {
      return [];
    }

    return attributes.filter(a => {
      if (type.includes(a.type) && a.available.includes(slot)) {
        return a;
      }
    });
  }

}
