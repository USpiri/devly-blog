import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { BlogScrollerComponent } from './components/blog-scroller/blog-scroller.component';

@NgModule({
  declarations: [BlogComponent, BlogEntryComponent, BlogScrollerComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
