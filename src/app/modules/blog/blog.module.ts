import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
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
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          headerIds: false,
        },
      },
      sanitize: SecurityContext.NONE,
    }),
  ],
})
export class BlogModule {}
