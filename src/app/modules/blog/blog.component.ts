import { Component, inject } from '@angular/core';
import { BlogService } from './services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blog!: Blog;

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
        console.log('A');
      },
    });
  }
}
