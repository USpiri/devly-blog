import { Blog } from 'src/app/models/blog.interface';

export const BLOGS: Blog[] = [
  {
    title: 'Some Blog',
    author: 'Uriel Spiridione',
    createdAt: new Date(),
    image: 'https://picsum.photos/id/43/300/200',
    tags: ['typescript'],
    description: 'This is some blog',
    content: `# Que es inject()?

A partir de la versión 14 de Angular,
`,
    pages: [],
  },
];
