import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public translate: TranslateService,public lang:LangService){

  }
  switchLang(){
    this.lang.lang.set("ar");
  this.translate.use(this.lang.lang());

    console.log("done");     
}
}
