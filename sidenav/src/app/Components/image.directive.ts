import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImage]',
})
export class ImageDirective {
  @Input() radius: any;
  @Input() height: any;
  @Input() width: any;
  @Input() margin: any;

  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // const div = this.renderer.createElement('img');
    this.renderer.setStyle(
      this.ele.nativeElement,
      'margin',
      `${this.margin}px`
    );

    this.renderer.setStyle(this.ele.nativeElement, 'width', `${this.width}px`);
    this.renderer.setStyle(
      this.ele.nativeElement,
      'height',
      `${this.height}px`
    );
    this.renderer.setStyle(
      this.ele.nativeElement,
      'border-radius',
      `${this.radius}%`
    );
  }
}
