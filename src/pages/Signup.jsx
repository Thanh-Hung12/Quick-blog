import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { register } from "@/services/api/user";
import { useState, useEffect, use } from "react";

export default function Signup() {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const loadPosts = async () => {
    try {
      const data = await register(signupData);
      const dataBlog = data.data.items;
      console.log("data:", dataBlog);
      // luu token vao localStorage
      localStorage.setItem("token", JSON.stringify(data.data));
      // chuyển trang về trang home
      window.location.href = "/";
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
            onChange={(e) =>
              setSignupData({ ...signupData, username: e.target.value })
            }
            type="text"
            placeholder="Enter your username"
            className="border rounded-md"
          />

          <Input
            onChange={(e) =>
              setSignupData({ ...signupData, email: e.target.value })
            }
            type="text"
            placeholder="Enter your email"
            className="border rounded-md"
          />

          <Input
            type="password"
            onChange={(e) =>
              setSignupData({ ...signupData, password: e.target.value })
            }
            placeholder="******"
            className="border rounded-md"
          />

          <Button
            onClick={loadPosts}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Sign Up
          </Button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
