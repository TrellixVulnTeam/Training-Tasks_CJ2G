import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AssingmentTabComponent } from './assingment-tab/assingment-tab.component';
import { MaterialsModule } from './materials/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatacomonentComponent } from './componet/datacomonent/datacomonent.component';

@NgModule({
  declarations: [AppComponent, AssingmentTabComponent, DatacomonentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
