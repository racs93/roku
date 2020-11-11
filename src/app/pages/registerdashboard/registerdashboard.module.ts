import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterdashboardPageRoutingModule } from './registerdashboard-routing.module';

import { RegisterdashboardPage } from './registerdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterdashboardPageRoutingModule
  ],
  declarations: [RegisterdashboardPage]
})
export class RegisterdashboardPageModule {}
