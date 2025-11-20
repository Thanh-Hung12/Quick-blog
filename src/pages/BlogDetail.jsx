import React, { useEffect } from "react";
import BlogDetailPage from "../components/BlogDetailPage";
import { fetchPostById } from "@/services/api/blog";
const BlogDetail = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const loadPosts = async () => {
    try {
      setLoading(true);
      //http://localhost:3000/blog-details/68df5674ec9dd0ef3a77c652
      const id = window.location.pathname.split("/")[2];
      const data = await fetchPostById(id);
      const dataBlog = data.data;
      console.log(dataBlog);
      setData(dataBlog);
      console.log("data:", data);
    } catch (err) {
      setError(err.message); // Hiển thị message ở đây
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BlogDetailPage data={data} />
    </div>
  );
};

export default BlogDetail;
