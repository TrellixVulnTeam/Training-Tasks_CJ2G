import { PendingComponent } from './component/pending/pending.component';
import { OverdueComponent } from './component/overdue/overdue.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'overdue',
    component: OverdueComponent,
  },
  {
    path: 'pending',
    component: PendingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
