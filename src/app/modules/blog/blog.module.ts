import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { BlogScrollerComponent } from './components/blog-scroller/blog-scroller.component';
import { BlogHeaderComponent } from './components/blog-entry/components/blog-header/blog-header.component';
import { BlogContentComponent } from './components/blog-entry/components/blog-content/blog-content.component';

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
