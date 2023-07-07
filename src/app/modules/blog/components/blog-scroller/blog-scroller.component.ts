import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-blog-scroller',
  templateUrl: './blog-scroller.component.html',
  styleUrls: ['./blog-scroller.component.scss'],
})
export class BlogScrollerComponent {
  @Input() headings: [string, string][] | undefined;
  @Input() activeHeadingId = '';
  @Input() title = '';

  showScrollUpButton = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollUpButton = Math.ceil(window.scrollY) > 320;
  }

  onScrollUp(): void {
    window.scrollTo(0, 0);
    location.hash = '';
  }
}
