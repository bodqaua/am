import {AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild} from '@angular/core';

@Component({
  selector: 'app-am-slider-timeout',
  templateUrl: './am-slider-timeout.component.html',
  styleUrls: ['./am-slider-timeout.component.scss']
})
export class AmSliderTimeoutComponent implements OnInit, AfterViewInit {
  @Input() timeout = 4000;
  @ContentChildren('slide') slides: QueryList<ElementRef>;
  @ViewChild('wrapper') wrapper: ElementRef;

  public steps = [];
  public activeStep = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initSlider(this.slides);
  }

  public changeStep(position: number): void {
    if (position < 0) {
      this.activeStep = this.slides.length - 1;
    } else if (position > this.slides.length - 1) {
      this.activeStep = 0;
    } else {
      this.activeStep = position;
    }
    const positionLeft = this.wrapper.nativeElement.offsetWidth * this.activeStep;
    this.wrapper.nativeElement.scroll({left: positionLeft, top: 0, behavior: 'smooth'});
  }

  private initSlider(slides: QueryList<ElementRef>): void {
    setInterval(() => {
      this.changeStep(this.activeStep + 1);
    }, this.timeout);
    this.initSteps(slides.length);
  }

  private initSteps(length: number): void {
    for (let i = 0; i < length; i++) {
      this.steps.push(i);
    }
    this.activeStep = 0;
  }
}
