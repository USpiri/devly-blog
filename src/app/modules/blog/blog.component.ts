import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { BlogService } from './services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @ViewChild('scrollspyNav') scrollspyNav!: ElementRef;

  blog!: Blog;
  headings: [string, string][] | undefined;
  activeHeadingId: string | null = null;

  private blogService = inject(BlogService);
  private titleService = inject(Title);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    const id = this.route.snapshot.params['id'];
    this.blogService.getBlogEntry(id).subscribe({
      next: (entry: Blog) => {
        this.blog = entry;
        this.titleService.setTitle(entry.title);
      },
      error: () => {
        this.router.navigateByUrl('404');
      },
    });
  }

  ngOnInit(): void {
    this.setHeadings();
  }

  private setHeadings(): void {
    const headingsRegex = /^#\s+(.+)$/gm;
    const content = this.blog.content;
    const matches = content.matchAll(headingsRegex);
    const headings: [string, string][] = [];

    for (const match of matches) {
      const title = match[1];
      const id = title.toLowerCase().replace(/[^\w]+/g, '-');
      headings.push([title, id]);
    }

    this.headings = headings;
  }

  @HostListener('window:scroll')
  onScroll() {
    const headerElements = document.querySelectorAll('a.anchor');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let closestDistance = Number.MAX_SAFE_INTEGER;
    let activeHeaderId: string | undefined = '';

    headerElements.forEach((element) => {
      const name = element.getAttribute('name');

      if (name) {
        const targetElement = document.getElementsByName(name)[0];
        const distance = Math.abs(
          scrollPosition - targetElement.offsetTop - 64
        );

        if (
          distance < closestDistance &&
          this.headings?.some((heading) => heading[1] === name)
        ) {
          closestDistance = distance;
          activeHeaderId = name;
        }
      }
    });

    this.activeHeadingId = activeHeaderId ?? '';
  }
}
