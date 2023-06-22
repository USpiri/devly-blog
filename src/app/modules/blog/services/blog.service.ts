import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Blog } from 'src/app/models/blog.interface';
import { BLOGS } from 'src/assets/data/blogs.mock';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  getBlogEntry(id: string): Observable<Blog> {
    const blog = BLOGS.find((blog) => blog._id === id);
    if (blog) {
      return of(blog);
    } else {
      return throwError(
        () => new Error(`No se encontró una entrada de blog con el ID: ${id}`)
      );
    }
  }
}
