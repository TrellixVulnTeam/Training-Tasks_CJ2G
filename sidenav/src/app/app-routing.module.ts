import { SettingComponent } from './Components/setting/setting.component';
import { AcademyComponent } from './Components/academy/academy.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'academy',
    component: AcademyComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
