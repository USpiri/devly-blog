import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface NavItems {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarItems: NavItems[] = [{ label: 'Home', route: '' }];

  router = inject(Router);

  focusComponent(componentName: string) {
    const element = document.getElementById(componentName);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView();
      }, 100);
    }
  }

  goTo(component: string) {
    this.router.navigate(['/']).then(() => {
      this.focusComponent(component);
    });
  }
}
