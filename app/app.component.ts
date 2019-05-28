import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { scrollAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    scrollAnimation
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  act = true;

  changeAct() {
    this.act = !this.act;
  }

  l(a: any): void {
    a.loaded();
  }
  u(a: any): void {
    a.unloaded();
  }
}
