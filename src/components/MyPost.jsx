import { Button } from "@/components/ui/button";
import { Eye, Trash2, Edit } from "lucide-react";
import { Link } from "react-router-dom";

export default function MyPost({ posts, handleDelete }) {
  return (
    <div className="max-w-6xl mx-auto pt-16">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold text-indigo-600 flex items-center justify-center gap-2">
        ✍️ My Post
      </h1>

      {/* Table */}
      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left font-semibold">
              <th className="p-3">TITLE</th>
              <th className="p-3">CONTENT</th>
              <th className="p-3">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="p-3">{post.title}</td>
                <td className="p-3 max-w-xs truncate">{post.content}</td>
                <td className="p-3 flex gap-2">
                  {/* VIEW */}
                  <Button
                    size="icon"
                    className="bg-blue-500 hover:bg-blue-600"
                    // onClick={() => handleView(post.id)}
                  >
                    <Link to={`/blog-details/${post._id}`}>
                      <Eye className="w-4 h-4 text-white" />
                    </Link>
                  </Button>

                  {/* EDIT */}

                  {/* DELETE */}
                  <Button
                    size="icon"
                    className="bg-red-500 hover:bg-red-600"
                    onClick={() => handleDelete(post._id)}
                  >
                    <Trash2 className="w-4 h-4 text-white" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
