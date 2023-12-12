import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {

  constructor(private element: ElementRef) {
    
  }

  @HostListener('mouseenter') mouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'transparent'
  }

}
