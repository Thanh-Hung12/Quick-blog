import React from "react";
import { useState, useEffect } from "react";
import MyPost from "@/components/MyPost";
import { fetchPosts } from "@/services/api/blog";
import { deletePost } from "@/services/api/blog";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetchPosts();
      setPosts(res.data.items);
    };
    getPosts();
  }, []);
  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Failed to delete the post:", error);
    }
  };
  return (
    <div>
      <MyPost posts={posts} handleDelete={handleDelete} />
    </div>
  );
};

export default MyPosts;
