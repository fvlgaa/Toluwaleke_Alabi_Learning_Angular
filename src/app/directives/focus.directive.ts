import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true
})
export class FocusDirective {
  // Input property to accept custom color for focus
  @Input() appFocus: string = 'green'; // Default color is green if not specified

  constructor(private el: ElementRef) {}

  // On focus event, change the background color
  @HostListener('focus') onFocus() {
    this.changeBackgroundColor(this.appFocus); // Use the input color or default color
  }

  // On blur event, reset the background color
  @HostListener('blur') onBlur() {
    this.changeBackgroundColor(''); // Reset background to default
  }

  // Method to change the background color of the element
  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
