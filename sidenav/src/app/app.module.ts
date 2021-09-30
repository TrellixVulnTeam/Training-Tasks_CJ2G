import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterilasModule } from './materilas/materilas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { NavComponent } from './nav/nav.component';
import { SidenavContentComponent } from './Components/sidenav-content/sidenav-content.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AcademyComponent } from './Components/academy/academy.component';
// import { LogoutComponent } from './Components/logout/logout.component';
import { SettingComponent } from './Components/setting/setting.component';
import { ImageDirective } from './Components/image.directive';
// import { ImageDirective } from './image.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavContentComponent,
    ToolbarComponent,
    HomeComponent,
    ProfileComponent,
    AcademyComponent,
    SettingComponent,
    ImageDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterilasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
