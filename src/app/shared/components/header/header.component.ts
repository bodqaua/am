import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeLink = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  public setActiveLink(index: number): void {
    this.activeLink = index;
  }
}
