import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LangService} from './shared/services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'auto-market';

  constructor(
    private translate: TranslateService,
    private lang: LangService) {
    translate.setDefaultLang(this.lang.getLangFromLocalStorage());
  }

  ngOnInit(): void {
    this.subscribeLanguageChanges();
  }

  private subscribeLanguageChanges(): void {
    this.lang.subscribeLang().subscribe(lang => {
      this.translate.use(lang);
    });
  }
}
