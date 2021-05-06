import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {VanillaTilt} from 'src/assets/vanilla-tilt.js';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit, AfterViewInit {
  value = '0';
  dom: HTMLElement = this.elementRef.nativeElement;
  vanilla: VanillaTilt;
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.vanilla.init(document.querySelector('.container'), {max: 25, speed: 400});
    this.vanilla.init(document.querySelectorAll('.container'));
  }

  evaluate(): number {
    return 0;
  }

  // tslint:disable-next-line:typedef
  calculator(s: string) {
    this.value += s;
  }

  hoverOver(): any {
  }

  ngAfterViewInit(): void {
    // VanillaTilt.init(this.dom.querySelectorAll('.container'));
  }

}
