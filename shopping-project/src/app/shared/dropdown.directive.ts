import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirective {
  // Bind class property
  @HostBinding('class.open') isOpen: boolean = false;

  //Add directive to listen click event on dropdown, when button clicked, call toggleOpen() method
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
