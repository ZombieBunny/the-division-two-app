import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GearService } from '../services/gear.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TypesModule } from './pages/types/types.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    TypesModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    GearService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
