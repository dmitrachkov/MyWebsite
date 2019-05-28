import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../images.service';
import { Location } from '@angular/common';
import { Image } from '../image-fields';
import { trigger, transition, query, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.css'],
  animations: [
    trigger('big', [
      transition(':enter', [
        query('#back', style({left: '-15vw'})),
        query('#back', [
          animate('500ms ease', style({left: '*'}))
        ])
      ]),
      transition(':leave', [
        query('#back', style({left: '*'})),
        query('#back', [
          animate('500ms ease', style({left: '-15vw'}))
        ])
      ])
    ]),
    trigger('loadedImage', [
      state('no', style({
        transform: 'translateY(100px)',
        opacity: 0
      })),
      state('yes', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('yes <=> no', animate('1000ms ease'))
    ])
  ]
})
export class BigImageComponent implements OnInit {

  @HostBinding('@big') 
  public a = true;

  image: Image;

  constructor(
    private route: ActivatedRoute,
    private images: ImagesService,
    private location: Location
  ) { 
    const elem = this.route.snapshot.paramMap.get('elem');
    images.getImages().subscribe(Images => this.image = Images.find(Image => Image.elem === elem));
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  isLoaded = false;
  loaded() {
    this.isLoaded = true;
  }
  unloaded() {
    this.isLoaded = false;
  }


}
