export interface Profile {
  name: string;
  bio: string;
  avatar: string;
  username?: string;
  socials?: {
    twitter?: string;
    x?: string;
    github?: string;
    linkedin?: string;
    substack?: string;
    youtube?: string;
    email?: string;
  };
}

export interface Link {
  id: string;
  title: string;
  url: string;
  active: boolean;
  color?: string;
}
