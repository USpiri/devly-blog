import { Component, Input, OnInit, inject } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss'],
})
export class BlogContentComponent implements OnInit {
  @Input() content = '';
  processedContent = '';
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
    this.processedContent = this.processContent(this.content);
  }

  processContent(content: string) {
    const regex = /\[(\w+)](?:\n*(.*?)\s*\n)?([\s\S]*?)\[\/\1]/g;
    const componentConfig = CUSTOM_COMPONENT_CONFIG;

    return content
      .replace(/\n/g, '  \n')
      .replace(regex, (match, componentType, title, content) => {
        componentType = componentType.toLowerCase();
        const config = componentConfig[componentType];
        if (config) {
          const renderedHtml = this.markdownService.parse(content);
          const componentTitle = title ? title.trim() : config.title;
          return `<div class="${componentType} callout d-flex flex-column p-3 px-4">
                      <div class='${
                        renderedHtml.length > 0 ? 'mb-2' : ''
                      } header'>
                        <i class="${config.icon} me-2"></i>
                        ${componentTitle}
                      </div>
                      <div>${renderedHtml}</div>
                    </div>`;
        } else {
          return match;
        }
      });
  }
}

interface ComponentConfig {
  [key: string]: {
    icon: string;
    title: string;
  };
}

const CUSTOM_COMPONENT_CONFIG: ComponentConfig = {
  info: {
    icon: 'fa-solid fa-info',
    title: 'Info',
  },
  note: {
    icon: 'fa-solid fa-sticky-note',
    title: 'Note',
  },
  success: {
    icon: 'fa-solid fa-check',
    title: 'Success',
  },
  question: {
    icon: 'fa-solid fa-question',
    title: 'Question',
  },
  warning: {
    icon: 'fa-solid fa-exclamation-triangle',
    title: 'Warning',
  },
  error: {
    icon: 'fa-solid fa-xmark',
    title: 'Error',
  },
  example: {
    icon: 'fa-solid fa-list-ul',
    title: 'Example',
  },
  quote: {
    icon: 'fa-solid fa-quote-left',
    title: 'Quote',
  },
};
