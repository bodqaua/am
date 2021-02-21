import {Injectable} from '@angular/core';
import {IDropdownOption} from '../../models/Dropdown.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private languages: IDropdownOption[] = [
    {value: 'en', label: 'English'},
    {value: 'ru', label: 'Russian'},
  ];
  private currentLang$: BehaviorSubject<string> = new BehaviorSubject<string>(this.getLangFromLocalStorage());

  constructor() {
  }

  public changeLanguage(lang: string): void {
    const newLang = this.languages.find(language => language.value === lang);
    if (!newLang) {
      console.warn('No language found');
      return;
    }

    this.setLangToLocalStorage(String(newLang.value));
    this.currentLang$.next(String(newLang.value));
  }

  public subscribeLang(): BehaviorSubject<string> {
    return this.currentLang$;
  }

  public getAllLanguages(): IDropdownOption[] {
    return this.languages;
  }

  public getLangFromLocalStorage(): string {
    const lang = localStorage.getItem('ng_lang');
    return lang || 'en';
  }

  public setLangToLocalStorage(lang: string): void {
    localStorage.setItem('ng_lang', lang);
  }
}
