import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Image } from '../image-fields';
import { trigger, transition, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css'],
  animations: [
    trigger('appear', [
      transition(':enter', [
          style({opacity:0,transform: 'translateY(50%)'}),
          animate('1000ms 800ms ease', style({opacity:1, transform: 'none'}))

      ]),
      transition(':leave', [

          style({transform: '*'}),
          animate('150ms linear', style({transform: 'scale(0.9)'}))

      ])
    ])
  ]
})
export class ImagePreviewComponent implements OnInit {
  @Input() image: Image;
  @HostBinding('@appear')
  public appear = true;
  
  constructor() { }

  ngOnInit() {
  }

}
