import { trigger, transition, style, query, animateChild, group, animate, sequence } from '@angular/animations';
import { QueryValueType } from '@angular/core/src/view';

export const scrollAnimation = 
  trigger('routeAnimations', [
    transition(':increment', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0
        })
      ], {optional: true}),
      query(':enter', [
        style({left: '100%', zIndex: 8900})
      ], {optional: true}),
      query(':leave', [
        style({filter: '*', opacity:'*', left: 0, zIndex: 6900})
      ], {optional: true}),
      
      query(':leave', animateChild(), {optional: true}),
      
      group([
        query(':leave', [
          animate( '1000ms ease-in', style({ filter: 'grayscale(1)', zIndex: 6900, opacity: 0.9, left: '-30%'})),
        ], {optional: true}),
  
        query(':enter', [
          animate( '1000ms ease-in', style({zIndex: 8900, left: 0}))
        ], {optional: true})
      ]),
      
      query(':enter', animateChild(), {optional: true})
      
    ]),
    transition(':decrement', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden'
        })
      ], {optional: true}),
      query(':enter', [
        style({left: '-105%', zIndex: 8900})
      ], {optional: true}),
      query(':leave', [
        style({filter: '*', opacity:'*', left: 0, zIndex: 6900})
      ], {optional: true}),
      
      query(':leave', animateChild(), {optional: true}),
      
      group([
        query(':leave', [
          animate( '1000ms ease-in', style({ filter: 'grayscale(1)',zIndex: 6900, opacity: 0.9, left: '30%'})),
        ], {optional: true}),
  
        query(':enter', [
          animate( '1000ms ease-in', style({zIndex: 8900, left: 0}))
        ], {optional: true})
      ]),
      
      query(':enter', animateChild(), {optional: true})
      
    ]),
    transition('1 => elem, 2 => elem, 3 => elem, 4 => elem', [
      group([
        query(':leave, :enter', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden'
          })
        ]),
        query(':enter', [
          style({
            position: 'absolute',
            top: '110%',
            left: 0,
            overflow: 'hidden'
          }) 
        ]),
      ]),
      group([
        query(':enter', [
          animate('800ms ease', style({
            top: 0
          }))
        ])
      ]),
      query(':enter', animateChild(), {optional: true}) 
    ]),
    transition('elem => 1, elem => 2, elem => 3, elem => 4', [
      query(':leave', animateChild()),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden'
        })
      ]),
      
      group([
        query(':leave', [
          animate('800ms ease', style({
            top: '110%'
          }))
        ])
      ])
    ])
    
  
  ]);
