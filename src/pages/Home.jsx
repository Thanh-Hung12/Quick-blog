import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import BlogCardsSection from "@/components/BlogCardsSection";
import { fetchPosts } from "@/services/api/blog";

const Home = () => {
  const [listBlogs, setListBlogs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const loadPosts = async () => {
    try {
      const data = await fetchPosts();
      const dataBlog = data.data.items;
      console.log("data:", dataBlog);
      setListBlogs(dataBlog);
      setFilters(dataBlog);
    } catch (err) {
      setError(err.message); // Hiển thị message ở đây
    }
  };

  const handleSearch = (value) => {
    console.log("value:", value);
    const filteredBlogs = listBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilters(filteredBlogs);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  //nếu filter=0 thì hiển thị all
  useEffect(() => {
    if (filters.length === 0) {
      setFilters(listBlogs);
    }
  }, [filters, listBlogs]);
  return (
    <div>
      <HeroSection
        handleSearch={handleSearch}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
      <BlogCardsSection listBlogs={listBlogs} filters={filters} />
    </div>
  );
};

export default Home;
