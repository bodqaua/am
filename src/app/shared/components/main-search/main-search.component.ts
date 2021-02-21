import {Component, OnInit} from '@angular/core';
import {IDropdownOption} from '../../../models/Dropdown.model';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {
  public options: IDropdownOption[] = [
    {value: 'Toronto', label: 'Toronto (+100km)'},
    {value: 'Stratford', label: 'Stratford (+100km)'},
    {value: 'Cambridge', label: 'Cambridge (+100km)'},
  ];
  public carOptions: IDropdownOption[] = [
    {value: 'car 3', label: 'Car 1'},
    {value: 'car 2', label: 'Car 2'},
    {value: 'car 1', label: 'Car 3'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  // TODO pass data top or to ngrx, do something you want
  public log(data): void {
    console.log(data);
  }

}
