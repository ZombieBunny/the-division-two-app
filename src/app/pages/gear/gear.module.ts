import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearComponent } from './gear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { TypesModule } from '../types/types.module';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';
import { GearAttributeFilterModule } from '../../pipes/gear-attribute-filter/gear-attribute-filter.module';
import { GearSlotFilterModule } from '../../pipes/gear-slot-filter/gear-slot-filter.module';
import { GearModelCardModule } from '../gear-model-card/gear-model-card.module';
import { GearTalentFilterModule } from '../../pipes/gear-talent-filter/gear-talent-filter.module';

@NgModule({
  declarations: [GearComponent],
  exports: [GearComponent],
  imports: [
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
    GearModelCardModule,
    GearTalentFilterModule
  ]
})
export class GearModule {
}
