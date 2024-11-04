export type BlogPost = {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
};

export async function fetchBlogData(): Promise<BlogPost[]> {
  try {
    // トークンを取得
    const tokenRes = await fetch(`${process.env.WORDPRESS_BASE_URL}/wp-json/api/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: process.env.WORDPRESS_USERNAME,
        password: process.env.WORDPRESS_PASSWORD,
      }),
    });

    const tokenData = await tokenRes.json();

    // 記事を取得
    const response = await fetch(`${process.env.WORDPRESS_BASE_URL}/wp-json/wp/v2/posts`, {
      headers: {
        'Authorization': `Bearer ${tokenData.jwt_token}`,
      },
      next: {
        revalidate: 3600
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const posts: BlogPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function fetchBlogPostById(id: string): Promise<BlogPost> {
  try {
    // トークンを取得
    const tokenRes = await fetch(`${process.env.WORDPRESS_BASE_URL}/wp-json/api/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: process.env.WORDPRESS_USERNAME,
        password: process.env.WORDPRESS_PASSWORD,
      }),
    });

    const tokenData = await tokenRes.json();

    // 記事を取得
    const response = await fetch(`${process.env.WORDPRESS_BASE_URL}/wp-json/wp/v2/posts/${id}`, {
      headers: {
        'Authorization': `Bearer ${tokenData.jwt_token}`,
      },
      next: {
        revalidate: 3600
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const post: BlogPost = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {} as BlogPost;
  }
}
