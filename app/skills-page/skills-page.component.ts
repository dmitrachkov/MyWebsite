import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, animateChild, group } from '@angular/animations';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css'],
  animations: [
    trigger('skills', [
      transition(':enter', [
        query(':enter', animateChild()),
        query('section', [
          style({
            height: '2px',
            overflow: 'hidden',
            padding: 0
          })
        ]),
        group([
          query('#title, #text', [
            style({opacity:0,transform: 'translateY(-50px)'}),
            stagger(500, animate('800ms 500ms ease', style({opacity:1, transform: 'none'})))
          ]),
          query('section', [
            style({position: 'relative', left: '-150%'}),
            stagger(300, animate('600ms ease', style({left: 0})))
          ]),
          query('h3', [
            style({color: 'rgba(100, 149, 237, 1)'}),
            stagger(300, animate('600ms ease', style({color: 'rgba(100, 149, 237, 0)'})))
          ])
        ]),
        query('section', [
          animate('1000ms ease', style({height: '*', overflow: 'hidden', padding: '*'}))
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
export class SkillsPageComponent implements OnInit {
  @HostBinding('@skills')
  public anim = true;

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
