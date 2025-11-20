import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Moon, Sun, User, LogIn, UserPlus, Clipboard } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//import Link
import { Link } from "react-router-dom";
export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  //đặt tên biến để lấy giá trị từ localStorage
  const me = localStorage.getItem("me");
  //từ giá trị trên => tìm role
  const role = me ? JSON.parse(me).user.role : null;
  console.log("role:", role);

  //xử lý light-dark mode
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    //localStorage lưu theme
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    //localStorage lưu theme
    localStorage.setItem("theme", "light");
  }

  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-sm bg-white dark:bg-gray-900 transition-colors">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img
            src="https://test-fe-blog-reactjs.vercel.app/assets/logo-lGLL0Zb0.png"
            alt="Logo"
            className="h-6"
          />
        </Link>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-3">
        {/* Create Blog button */}
        <Link to="/create-blog">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            + Create Blog
          </Button>
        </Link>

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>

        {/* User Dropdown: Login / Sign up */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {role ? (
              <>
                <DropdownMenuItem>
                  <Clipboard className="mr-2 h-4 w-4" />
                  <span>My Posts</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    localStorage.removeItem("me");
                    window.location.href = "/";
                  }}
                >
                  <Clipboard onClick={() => {}} className="mr-2 h-4 w-4" />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem className="cursor-pointer">
                  <LogIn className="mr-2 h-4 w-4" />
                  <a href="/login" className="text-indigo-600 hover:underline">
                    Login
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <UserPlus className="mr-2 h-4 w-4" />
                  <a href="/signup" className="text-indigo-600 hover:underline">
                    Signup
                  </a>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
