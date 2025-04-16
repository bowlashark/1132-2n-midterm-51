import { getBlogs } from '@/lib/db-blog';
import Blogs_51 from '@/components/demo/blogs_51/Blogs_51';

export default async function P3Page_51() {
  const blogs = await getBlogs();
  console.log('blog', JSON.stringify(blogs));
  return (
    <>
      <Blogs_51 blogs={blogs} />
    </>
  );
}
