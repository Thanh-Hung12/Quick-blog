import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { login, register, getMe } from "@/services/api/user";
import { useState, useEffect } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      const data = await login(user);
      console.log("data:", data);
      // Lưu token vào localStorage
      localStorage.setItem("token", JSON.stringify(data.data));

      const me = await getMe();
      console.log("me:", me);
      // Sau khi đăng nhập thành công, tải lại danh sách bài viết
      // await loadPosts();
      // const dataBlog = data.data.items;
      localStorage.setItem("me", JSON.stringify(me.data));
      // chuyển trang về trang home
      window.location.href = "/";
      //
      setListBlogs(dataBlog);
    } catch (err) {}
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center 
      bg-gradient-to-r from-[#0c0435] via-[#4636ff] to-[#00d5ff]"
    >
      <Card className="w-[380px] p-6 shadow-xl rounded-xl ">
        <CardHeader className="flex items-center justify-center">
          <a href="/">
            <img
              className="w-15 h-15"
              alt="logo"
              src="https://test-fe-blog-reactjs.vercel.app/assets/logo-lGLL0Zb0.png"
            />
          </a>
        </CardHeader>

        <CardContent className="space-y-3">
          <Input
            placeholder="Enter your email"
            className="border rounded-md"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <Input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="******"
            className="border rounded-md"
          />

          <Button
            onClick={handleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Login
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Signup
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
