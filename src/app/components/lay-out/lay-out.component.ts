import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  standalone:true,
  imports:[ContentComponent],
  styleUrls: ['./lay-out.component.scss']
})
export class LayOutComponent {

}
