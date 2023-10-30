import { Component, signal } from '@angular/core';
import { GalleryModule, Gallery, GalleryRef, ImageItem, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-content',
  standalone : true,
  imports: [GalleryModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  images: GalleryItem[] = []

  constructor(private gallery: Gallery){

  }

  //  images: GalleryItem = [
  //   {
  //     src: '../../../assets/images/demo.jpg',
  //     thumbnail: '../../../assets/images/demo.jpg',
  //     text: 'Sky & Clouds'
  //   },{
  //     src: '../../../assets/images/demo.jpg',
  //     thumbnail: '../../../assets/images/demo.jpg',
  //     text: 'Sky & Clouds'
  //   },{
  //     src: '../../../assets/images/demo.jpg',
  //     thumbnail: '../../../assets/images/demo.jpg',
  //     text: 'Sky & Clouds'
  //   },{
  //     src: '../../../assets/images/demo.jpg',
  //     thumbnail: '../../../assets/images/demo.jpg',
  //     text: 'Sky & Clouds'
  //   },{
  //     src: '../../../assets/images/demo.jpg',
  //     thumbnail: '../../../assets/images/demo.jpg',
  //     text: 'Sky & Clouds'
  //   },{
  //     src: '../../../assets/images/demo.jpg',
  //     thumbnail: '../../../assets/images/demo.jpg',
  //     text: 'Sky & Clouds'
  //   },{
  //     src: '../../../assets/images/demo.jpg',
  //     thumbnail: '../../../assets/images/demo.jpg',
  //     text: 'Sky & Clouds'
  //   },
  //   // ...
  // ];
  ngOnInit() {
    this.images = [
      new ImageItem({ src: '../../../assets/images/demo.jpg', thumb: 'hhh' }),
      new ImageItem({ src: '../../../assets/images/demo.jpg', thumb: '../../../assets/images/demo.jpg' }),
      new ImageItem({ src: '../../../assets/images/demo.jpg', thumb: '../../../assets/images/demo.jpg' }),
      new ImageItem({ src: '../../../assets/images/demo.jpg', thumb: '../../../assets/images/demo.jpg' }),
      new ImageItem({ src: '../../../assets/images/demo.jpg', thumb: '../../../assets/images/demo.jpg' }),
      new ImageItem({ src: '../../../assets/images/demo.jpg', thumb: '../../../assets/images/demo.jpg' }),
      // ... more items
    ];

  }

}
