import { Component, Input, OnInit, inject } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss'],
})
export class BlogContentComponent implements OnInit {
  @Input() content = '';

  markdownService = inject(MarkdownService);

  ngOnInit() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const headerLevel = level + 1;
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `<h${headerLevel}>
                <a name="${escapedText}" class="anchor" href="#${escapedText}">
                  <span class="header-link"></span>
                </a>${text}
              </h${headerLevel}>`;
    };
  }

  processContent(content: string) {
    const regex = /\[info\]([\s\S]*?)\[\/info\]/g;

    return content.replace(/\n/g, '  \n').replace(regex, (match, content) => {
      const renderedHtml = this.markdownService.parse(content);
      return `<div class="info d-flex flex-column p-3 px-4">
                <div class='mb-2 header'>
                  <i class="fa-solid fa-info me-2"></i>
                  Info
                </div>
                <div>${renderedHtml}</div>
              </div>`;
    });
  }
}
