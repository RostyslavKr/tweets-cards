import axios from 'axios';

axios.defaults.baseURL = 'https://6442a8ce33997d3ef9165f47.mockapi.io';

export default async function fetchUsers(page) {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}
