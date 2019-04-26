import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesComponent } from './types.component';
import { MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TypesComponent],
  exports: [TypesComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ]
})
export class TypesModule {
}
