import { Component, OnInit } from '@angular/core';
import {IDropdownOption} from '../../../models/Dropdown.model';
import {LangService} from '../../services/lang.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public languages: IDropdownOption[] = this.lang.getAllLanguages();

  constructor(private lang: LangService) { }

  ngOnInit(): void {
  }

  public changeLanguage(data: IDropdownOption): void {
    this.lang.changeLanguage(String(data.value));
  }

}
