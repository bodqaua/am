import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IDropdownOption} from '../../../models/Dropdown.model';

@Component({
  selector: 'app-am-dropdown',
  templateUrl: './am-dropdown.component.html',
  styleUrls: ['./am-dropdown.component.scss']
})
export class AmDropdownComponent implements OnInit {
  @Input() options: IDropdownOption[] = [];
  @Input() placeholder: string;
  @Input() leftIcon: string;
  @Input() customClass = '';

  @Output('onSelecting') onSelecting: EventEmitter<IDropdownOption> = new EventEmitter<IDropdownOption>();

  @ViewChild('menu') menu: ElementRef;
  @ViewChild('toggle') toggle: ElementRef;

  public isDropdownOpen = false;
  public selectedOption: IDropdownOption;

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectOption(option: IDropdownOption): void {
    this.selectedOption = option;
    this.onSelecting.emit(option);
    this.closeDropdown();
  }

  public openDropdown(focus = false): void {
    this.isDropdownOpen = true;
    if (focus) {
      this.menu.nativeElement.focus();
    }

    this.toggle.nativeElement.blur();
  }

  public closeDropdown(delay = 0): void {
    setTimeout(() => {
      this.isDropdownOpen = false;
    }, delay);
    this.toggle.nativeElement.blur();
    this.menu.nativeElement.blur();
  }

  public toggleDropdown(focus = false): void {
    this.isDropdownOpen ? this.closeDropdown() : this.openDropdown(focus);
  }
}
