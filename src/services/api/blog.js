// src/services/api/endpoints.js
import apiInstance from './index';

// GET: Tự động thêm header nếu có token
export const fetchPosts = async () => {
  const response = await apiInstance.get('/posts');
  return response;
};

//goi API chi tiet bai viet
export const fetchPostById = async (id) => {
  const response = await apiInstance.get(`/posts/${id}`);
  return response;
};
// gọi api tạo blog
export const createPost = async (formData) => {
  const response = await apiInstance.post('/posts', formData);
  return response;
};
//chức năng delete
export const deletePost = async (id) => {
  const response = await apiInstance.delete(`/posts/${id}`);
  return response;
};