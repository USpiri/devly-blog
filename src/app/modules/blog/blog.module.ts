import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {
  BlogEntryComponent,
  BlogScrollerComponent,
  BlogHeaderComponent,
  BlogContentComponent,
} from './components';

@NgModule({
  declarations: [
    BlogComponent,
    BlogEntryComponent,
    BlogScrollerComponent,
    BlogHeaderComponent,
    BlogContentComponent,
  ],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
