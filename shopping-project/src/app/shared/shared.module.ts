import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DropdownDirective, LoadingSpinnerComponent, AlertComponent],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, AlertComponent, CommonModule],
  entryComponents: [AlertComponent],
})
export class SharedModule {}
