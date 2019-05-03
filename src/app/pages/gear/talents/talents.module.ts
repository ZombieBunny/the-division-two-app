import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentsComponent } from './talents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GearTalentFilterModule } from '../../../pipes/gear-talent-filter/gear-talent-filter.module';

@NgModule({
  declarations: [TalentsComponent],
  exports: [TalentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    GearTalentFilterModule
  ]
})
export class TalentsModule {
}
