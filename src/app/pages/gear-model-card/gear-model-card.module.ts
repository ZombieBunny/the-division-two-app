import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearModelCardComponent } from './gear-model-card.component';
import { TypesModule } from '../types/types.module';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GearSlotFilterModule } from '../../pipes/gear-slot-filter/gear-slot-filter.module';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';
import { GearAttributeFilterModule } from '../../pipes/gear-attribute-filter/gear-attribute-filter.module';

@NgModule({
  declarations: [GearModelCardComponent],
  exports: [GearModelCardComponent],
  imports: [
    CommonModule,
    TypesModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    GearSlotFilterModule,
    BrowserAnimationsModule,
    GearAttributeFilterModule,
  ]
})
export class GearModelCardModule {
}
