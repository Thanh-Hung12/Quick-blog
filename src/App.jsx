import { useState } from "react";
//import react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateBlog from "./pages/CreateBlog";
import MyPosts from "./pages/MyPosts";
import UserManagement from "./pages/UserManagement";
import BlogDetail from "./pages/BlogDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="my-posts" element={<MyPosts />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="blog-details/:id" element={<BlogDetail />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
