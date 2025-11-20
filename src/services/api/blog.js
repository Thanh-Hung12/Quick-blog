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