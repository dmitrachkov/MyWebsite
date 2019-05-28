import { Component, OnInit, Output, HostListener, HostBinding, Host } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, state } from '@angular/animations';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  animations: [
    trigger('hello', [
      transition(':enter', [
        query('span', [
          style({opacity:0,transform: 'translateY(-50px)'}),
          stagger(500, animate('800ms 500ms ease', style({opacity:1, transform: 'none'})))
        ])
      ]),
      transition(':leave', [
        query('span', [
          style({ opacity:'*', transform: '*'}),
          animate('200ms linear', style({transform: 'scale(0.9)'}))
        ])
      ])
    ])
  
]
})
export class WelcomePageComponent implements OnInit {
  
  @HostBinding('@hello') 
  public hello = true;

  
  isLoaded = false;
  
  constructor() { }

  text = "today";

  loaded() {
    this.isLoaded = true;
    let hour = new Date;
    let h = hour.getHours();
    if ( h >= 7 && h < 12 ) {
      this.text = "this morning";
    }
    else if ( h >= 12 && h < 17 ) {
      this.text = "this afternoon";
    }
    else if ( h >= 17 && h < 21 ) {
      this.text = "this evening";
    }
    else if ( h >= 0 && h < 7 || h >= 21 ) {
      this.text = "tonight";
    }
    else {
      this.text = "today";
    }
  }
  unloaded() {
    this.isLoaded = false;
  }
  ngOnInit() {
  }

}
