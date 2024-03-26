import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WelcomeMsgComponent } from '../shared/welcome-msg/welcome-msg.component';

const routes = [
  { path: '', component: WelcomeMsgComponent }
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { 
  constructor(private router: RouterModule){}
}
