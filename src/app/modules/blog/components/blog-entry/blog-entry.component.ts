import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.interface';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss'],
})
export class BlogEntryComponent {
  @Input() blog!: Blog;
}
