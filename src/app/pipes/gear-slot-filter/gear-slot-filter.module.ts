import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearSlotFilterPipe } from './gear-slot-filter.pipe';

@NgModule({
  declarations: [GearSlotFilterPipe],
  exports: [GearSlotFilterPipe],
  imports: [
    CommonModule
  ]
})
export class GearSlotFilterModule {
}
