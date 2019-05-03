import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gearSlotFilter'
})
export class GearSlotFilterPipe implements PipeTransform {

  transform(gear: any[], slot: 'Backpack' | 'Chest' | 'Gloves' | ' Holster' | 'Kneepads' | 'Mask'): any[] {
    if (!gear) {
      return [];
    }

    if (!slot) {
      return [];
    }

    return gear.filter(g => g.slot.toLowerCase() === slot.toLowerCase());
  }

}
