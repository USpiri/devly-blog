import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RecentBlogEntriesComponent } from './components/recent-blog-entries/recent-blog-entries.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, RecentBlogEntriesComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
