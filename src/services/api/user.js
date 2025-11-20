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