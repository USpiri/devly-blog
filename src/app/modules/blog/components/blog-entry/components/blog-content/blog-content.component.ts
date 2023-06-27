import { Component, Input, inject } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss'],
})
export class BlogContentComponent {
  @Input() content = '';

  markdownService = inject(MarkdownService);

  ngOnInit() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const headerLevel = level + 1;
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `<h${headerLevel} class="fs-${level}">
                <a name="${escapedText}" class="anchor" href="#${escapedText}">
                  <span class="header-link"></span>
                </a>${text}
              </h${headerLevel}>`;
    };
  }
}
