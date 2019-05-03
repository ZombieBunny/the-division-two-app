import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GearService } from '../services/gear.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GearModule } from './pages/gear/gear.module';
import { AttributesModule } from './pages/gear/attributes/attributes.module';
import { TalentsModule } from './pages/gear/talents/talents.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatTabsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    GearModule,
    AttributesModule,
    TalentsModule
  ],
  providers: [
    GearService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
