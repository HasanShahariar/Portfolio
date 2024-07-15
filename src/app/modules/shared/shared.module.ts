import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
