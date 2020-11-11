import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterdashboardPage } from './registerdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterdashboardPageRoutingModule {}
