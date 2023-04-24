import axios from 'axios';

export const fetchUsers = async page => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`);

    return response.data;
  } catch (error) {
    return error.message;
  }
};
