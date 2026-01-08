import { Button } from "@/components/ui/button";
import { Eye, Trash2, Edit } from "lucide-react";
import { Link } from "react-router-dom";

export default function MyPost({
  users,
  handleDelete,
  setOpenDialog,
  handleOpenDialog,
}) {
  return (
    <div className="max-w-6xl mx-auto pt-16">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold text-indigo-600 flex items-center justify-center gap-2">
        🧩 User Management
      </h1>

      {/* Table */}
      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left font-semibold">
              <th className="p-3">USERNAME</th>
              <th className="p-3">EMAIL</th>
              {/* role */}
              <th className="p-3">ROLE</th>
              <th className="p-3">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="p-3">{user.username}</td>
                <td className="p-3 max-w-xs truncate">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3 flex gap-2">
                  {/* VIEW */}
                  <Button onClick={() => handleOpenDialog(user._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-key w-5 h-5"
                    >
                      <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
                      <path d="M15 9h.01"></path>
                    </svg>
                  </Button>
                  {/* EDIT */}
                  {/* DELETE */}
                  <Button
                    size="icon"
                    className="bg-red-500 hover:bg-red-600"
                    onClick={() => handleDelete(user._id)}
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
