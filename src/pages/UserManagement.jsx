import React from "react";
import { useState } from "react";
import UserManagementComponent from "@/components/UserManagement";
import { useEffect } from "react";
import { fetchUsers } from "@/services/api/user";
import { deleteUser } from "@/services/api/user";
import ChangeRoleDialog from "@/components/ChangeRoleDialog";
import { updateUserRole } from "@/services/api/user";
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetchUsers();
      setUsers(res.data.items);
    };
    getUsers();
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Failed to delete the user:", error);
    }
  };

  const handleOpenDialog = (id) => {
    setOpenDialog(true);
    setSelectedUserId(id);
  };

  const handleChangeRole = async (newRole) => {
    try {
      await updateUserRole(selectedUserId, newRole);
      setUsers(
        users.map((user) =>
          user._id === selectedUserId ? { ...user, role: newRole } : user
        )
      );
      setOpenDialog(false);
    } catch (error) {
      console.error("Failed to update the user role:", error);
    }
  };
  return (
    <div>
      <UserManagementComponent
        setOpenDialog={setOpenDialog}
        users={users}
        handleDelete={handleDelete}
        handleOpenDialog={handleOpenDialog}
      />
      <ChangeRoleDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        handleChangeRole={handleChangeRole}
      />
    </div>
  );
};

export default UserManagement;
