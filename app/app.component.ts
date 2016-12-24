import { Component, OnInit, NgZone } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
    locale:string;

    constructor(private zone: NgZone) {}

    setLocale(locale?: string) {
        this.locale = locale || this.locale || 'en';
        this.zone.runOutsideAngular(() => {
            localStorage.setItem('lang', this.locale);
            location.reload();
        });
    }

    isLocale(locale: string):boolean {
      return locale === this.locale;
    }

    ngOnInit() {
        this.locale = localStorage.getItem('lang') || 'en';
    }
}
