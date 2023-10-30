import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone : true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  box:any;
  rect = signal(1000)
  ngOnInit(){
    this.hh() 
  }
  hh(){
    this.box = document.getElementById('6');
    let rect = this.box.getBoundingClientRect();
 
    if(rect.top < 80){
      alert('here')
    }
     console.log(rect , '555');
  }
  
}
