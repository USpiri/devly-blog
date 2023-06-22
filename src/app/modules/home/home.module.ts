import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RecentBlogEntriesComponent } from './components/recent-blog-entries/recent-blog-entries.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [HomeComponent, RecentBlogEntriesComponent],
  imports: [CommonModule, HomeRoutingModule, ComponentsModule],
})
export class HomeModule {}
