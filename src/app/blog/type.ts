export type BlogPost = {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  link?: string;
}

export type BlogsProps = {
  blogData: BlogPost[];
}
