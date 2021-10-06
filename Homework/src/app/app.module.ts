import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeworksComponent } from './homeworks/homeworks.component';
import { MaterialsModule } from './materials/materials.module';
import { PendingComponent } from './component/pending/pending.component';
import { OverdueComponent } from './component/overdue/overdue.component';

@NgModule({
  declarations: [AppComponent, HomeworksComponent, PendingComponent, OverdueComponent],
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
