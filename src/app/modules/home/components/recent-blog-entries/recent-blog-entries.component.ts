import { Component } from '@angular/core';
import { BLOGS } from 'src/assets/data/blogs.mock';

@Component({
  selector: 'app-recent-blog-entries',
  templateUrl: './recent-blog-entries.component.html',
  styleUrls: ['./recent-blog-entries.component.scss'],
})
export class RecentBlogEntriesComponent {
  blogs = BLOGS;
}
