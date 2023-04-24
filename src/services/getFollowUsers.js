import axios from 'axios';

axios.defaults.baseURL = 'https://6442a8ce33997d3ef9165f47.mockapi.io';

export const fetchFollowUsers = async (page, status) => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`, {
      params: {
        status: `${status}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};
