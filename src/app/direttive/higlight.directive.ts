import { animate, style } from '@angular/animations';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiglight]',
})
export class HiglightDirective {
  hasBeenClicked = false;

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') mouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'black';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = '#212529';
  }

  @HostListener('click') mouseClick() {
    if (!this.hasBeenClicked) {
      this.element.nativeElement.style.width = '40%';
      this.element.nativeElement.style.fontSize = '20px';
      this.element.nativeElement.style.lineHeight = '30px';
      this.hasBeenClicked = true;
      animate('400ms ease-in', style({ opacity: 1 }))
    } else {
      this.element.nativeElement.style.width = '338.78px';
      this.element.nativeElement.style.fontSize = '14px';
      this.element.nativeElement.style.lineHeight = '20px';
      this.hasBeenClicked = false;
      animate('400ms ease-in', style({ opacity: 1 }))
    }
  }
}
