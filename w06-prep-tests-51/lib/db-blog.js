import { supabase } from './supabase';

export async function getBlogs(id) {
  const { data, error } = await supabase.from('blog_51').select('*');

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
  }

  return data;
}
