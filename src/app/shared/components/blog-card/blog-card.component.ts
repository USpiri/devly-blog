import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.interface';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() blog!: Blog;
}
