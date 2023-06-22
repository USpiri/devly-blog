import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BlogCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  exports: [BlogCardComponent],
})
export class ComponentsModule {}
