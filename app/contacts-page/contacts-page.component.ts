import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, animateChild, group } from '@angular/animations';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
  animations: [
    trigger('contact', [
      transition(':enter', [
        query(':enter', animateChild()),
        query('li', [
          style({
            position:'relative',
            opacity:0,
            transform:'translateY(-50%)'
          })
        ]),
        group([
          query('#title, #text', [
            style({opacity:0,transform: 'translateY(-50px)'}),
            stagger(500, animate('800ms 500ms ease', style({opacity:1, transform: 'none'})))
          ]),
          query('li', [
            stagger(300, animate('600ms ease', style({
              position:'relative',
              opacity:1,
              transform:'translateY(0)'})))
          ])
        ])
      ]),
      transition(':leave', [
        
        group([
          query('#title, #text', [
            style({ opacity:'*', transform: '*'}),
            animate('200ms linear', style({transform: 'scale(0.9)'}))
          ]),
          query(':leave', animateChild(), {optional: true})
        ])
      ])
    ])
  
]
})
export class ContactsPageComponent implements OnInit {

  @HostBinding('@contact')
  public ancon = true;

  constructor() { }

  ngOnInit() {
  }

  isLoaded = false;
  loaded() {
    this.isLoaded = true;
  }
  unloaded() {
    this.isLoaded = false;
  }

}
