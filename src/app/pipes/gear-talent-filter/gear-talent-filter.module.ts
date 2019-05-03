import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearTalentFilterPipe } from './gear-talent-filter.pipe';

@NgModule({
  declarations: [GearTalentFilterPipe],
  exports: [GearTalentFilterPipe],
  imports: [
    CommonModule
  ]
})
export class GearTalentFilterModule {
}
