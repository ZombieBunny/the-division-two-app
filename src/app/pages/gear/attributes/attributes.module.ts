import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesComponent } from './attributes.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GearAttributeFilterModule } from '../../../pipes/gear-attribute-filter/gear-attribute-filter.module';

@NgModule({
  declarations: [AttributesComponent],
  exports: [AttributesComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    GearAttributeFilterModule
  ]
})
export class AttributesModule {
}
