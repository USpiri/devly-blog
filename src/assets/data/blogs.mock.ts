import { Blog } from 'src/app/models/blog.interface';

export const BLOGS: Blog[] = [
  {
    _id: '1',
    title: 'Some Blog',
    author: {
      name: 'Uriel Spiridione',
      image: 'https://picsum.photos/id/55/100/100',
    },
    createdAt: new Date(),
    image: 'https://picsum.photos/id/43/740/300',
    tags: ['typescript'],
    description: 'This is some blog',
    content: `# Que es inject()?

A partir de la versión 14 de Angular,
`,
    pages: [],
  },
];
