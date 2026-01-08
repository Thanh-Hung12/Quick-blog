import apiInstance from './index';

//login
export const login = async (credentials) => {
    const response = await apiInstance.post('/auth/login', credentials);
    return response;
}

//register
export const register = async (userInfo) => {
    const response = await apiInstance.post('/auth/register', userInfo);
    return response;
}
//getme
export const getMe = async () => {
    const response = await apiInstance.get('/auth/me');
    return response;
}

//get all users
export const fetchUsers = async () => {
    const response = await apiInstance.get('/users');
    return response;
}

//delete user
export const deleteUser = async (id) => {
    const response = await apiInstance.delete(`/users/${id}`);
    return response;
}
//update user role
export const updateUserRole = async (id, role) => {
    const response = await apiInstance.put(`/users/${id}/role`, { role });
    return response;
}