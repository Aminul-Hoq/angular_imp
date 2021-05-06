import {Component, ElementRef, HostListener, Injectable, InjectionToken, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sky') sky: ElementRef;
  @ViewChild('text') text: ElementRef;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  // https://www.codegrepper.com/code-examples/javascript/angular+redirect+button
  redirectLink(link): any {
    this.router.navigateByUrl(link);
  }

  @HostListener('window:scroll', ['$event'])
  scrolling(): void {
    const value: number = window.scrollY;
    this.sky.nativeElement.style.top = value + 'px';
    this.text.nativeElement.style.right = value * 2 + 'px';
  }
}
