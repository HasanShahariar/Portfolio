import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StopPropagationDirective } from './directives/stop-propagation.directive';




@NgModule({
  declarations: [
    NavComponent,
    StopPropagationDirective
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NavComponent,
    StopPropagationDirective
  ]
})
export class SharedModule { }
