import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearAttributeFilterPipe } from './gear-attribute-filter.pipe';

@NgModule({
  declarations: [GearAttributeFilterPipe],
  exports: [GearAttributeFilterPipe],
  imports: [
    CommonModule
  ]
})
export class GearAttributeFilterModule {
}
