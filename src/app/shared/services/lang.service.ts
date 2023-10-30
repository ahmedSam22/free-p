import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor() { }
   currentLang:string = localStorage.getItem("currentLang") ||  navigator.language.split("-")[0];

  lang = signal(this.currentLang);
}
