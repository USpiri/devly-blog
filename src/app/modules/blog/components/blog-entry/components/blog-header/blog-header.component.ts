import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
})
export class BlogHeaderComponent {
  @Input() image!: string;
  @Input() title = '';
  @Input() date!: Date;
  @Input() author!: User;
  @Input() isSaved = false;
  @Input() isLiked = false;
  @Input() likes = 25;
  saveEntry() {
    this.isSaved = !this.isSaved;
  }
  likeEntry() {
    if (!this.isLiked) {
      this.likes++;
      this.isLiked = true;
    } else {
      this.likes--;
      this.isLiked = false;
    }
  }
  shareEntry() {
    console.log('SHARED');
  }
}
