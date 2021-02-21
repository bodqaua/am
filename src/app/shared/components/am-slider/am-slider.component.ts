import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-am-slider',
  templateUrl: './am-slider.component.html',
  styleUrls: ['./am-slider.component.scss']
})
export class AmSliderComponent implements OnInit, AfterViewInit {
  @Input() slidesLength: number;
  @Input() navigation = true;

  @ContentChildren('slide') slides: QueryList<ElementRef>;
  @ViewChild('wrapper') wrapper: ElementRef;

  public currentStep = 0;
  public slideWith = 0;

  constructor(
    private renderer: Renderer2
  ) {
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.slides.forEach(item => {
      this.calculateStyles(item, this.slides.length, this.slidesLength);
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.slides.forEach(item => {
      this.calculateStyles(item, this.slides.length, this.slidesLength);
    });
  }

  public goToStep(step: number): void {

    if (step < 0) {
      step = this.slides.length - 1;
    } else if (step < this.currentStep && step > this.slides.length - this.slidesLength) {
      step = this.slides.length - this.slidesLength - 1;
    } else if (step > this.slides.length - this.slidesLength) {
      step = 0;
    }


    this.currentStep = step;
    this.wrapper.nativeElement.scroll({
      left: this.currentStep * this.slideWith,
      behavior: 'smooth'
    });
  }

  private calculateStyles(element: ElementRef, allItems: number, slidesLength: number): void {
    const width = `calc(${(100 / slidesLength).toFixed(2)}% - 24px)`;
    this.renderer.setStyle(element.nativeElement, 'width', width);
    this.renderer.setStyle(element.nativeElement, 'min-width', width);
    this.renderer.addClass(element.nativeElement, 'slide');
    this.slideWith = element.nativeElement.offsetWidth + 24;
  }
}
