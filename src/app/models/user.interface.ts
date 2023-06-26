export interface User {
  _id?: string;
  name: string;
  email?: string;
  image?: string;
  media?: SocialMedia;
}

export interface SocialMedia {
  twitter: string;
  github: string;
  linkedin: string;
  instagram: string;
}
