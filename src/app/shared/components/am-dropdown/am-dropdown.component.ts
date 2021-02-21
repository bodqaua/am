import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {IDropdownOption} from '../../../models/Dropdown.model';

@Component({
  selector: 'app-am-dropdown',
  templateUrl: './am-dropdown.component.html',
  styleUrls: ['./am-dropdown.component.scss']
})
export class AmDropdownComponent implements OnInit, OnChanges {
  @Input() options: IDropdownOption[] = [];
  @Input() placeholder = '';
  @Input() leftIcon: string;
  @Input() customClass = '';
  @Input() defaultValue = '';
  @Input() position: 'top' | 'bottom' = 'bottom';
  @Output() onSelecting: EventEmitter<IDropdownOption> = new EventEmitter<IDropdownOption>();

  @ViewChild('menu') menu: ElementRef;
  @ViewChild('toggle') toggle: ElementRef;
  public isDropdownOpen = false;
  public selectedOption: IDropdownOption;
  private hadDefault = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.setDefaultValue(this.defaultValue);
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


  private setDefaultValue(value): void {
    if (!value || this.hadDefault) {
      return;
    }

    const option: IDropdownOption = this.options.find((option) => {
      return option.value === value;
    });

    if (option) {
      this.selectedOption = option;
      this.hadDefault = true;
    } else {
      console.warn('Invalid default value');
    }

  }
}
