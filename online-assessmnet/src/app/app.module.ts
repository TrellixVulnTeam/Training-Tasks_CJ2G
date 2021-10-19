import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssessmentComponent } from './assessment/assessment.component';
import { MaterialsModule } from './materials/materials.module';
import { CardsComponent } from './component/cards/cards.component';

@NgModule({
  declarations: [AppComponent, AssessmentComponent, CardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
