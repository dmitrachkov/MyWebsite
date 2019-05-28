import { Component, OnInit, HostBinding } from '@angular/core';
import { Image } from '../image-fields';
import { ImagesService } from '../images.service';
import { trigger, transition, query, style, stagger, animate, animateChild, group } from '@angular/animations';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.css'],
  animations: [
    trigger('works', [
      transition(':enter', [
        query(':enter', animateChild()),
        query('span', [
          style({opacity:0,transform: 'translateY(-50px)'}),
          stagger(500, animate('800ms 500ms ease', style({opacity:1, transform: 'none'})))
        ])
        
      ]),
      transition(':leave', [
        
        group([
          query('span', [
            style({ opacity:'*', transform: '*'}),
            animate('200ms linear', style({transform: 'scale(0.9)'}))
          ]),
          query(':leave', animateChild())
        ])
      ])
    ])
  
]
})
export class ImagesPageComponent implements OnInit {

  @HostBinding('@works')
  public animate = true;

  images: Image[];

  activeImage: Image;

  elem = 0;
  

  constructor(private imagesService: ImagesService) {
    imagesService.getImages()
      .subscribe(i => {this.images = i;
        this.activeImage = this.images[this.elem];
      });
  }

  ngOnInit() {
    
  }

  nexr(): void {
    this.elem++;
    if (this.elem >= this.images.length) this.elem = 0;
    this.activeImage = this.images[this.elem];
    console.log(1);
  }

  jumpTo(i: Image): void {
    this.activeImage = i;
  }

  isLoaded = false;
  loaded() {
    this.isLoaded = true;
  }
  unloaded() {
    this.isLoaded = false;
  }

}
