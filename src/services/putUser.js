import axios from 'axios';

export default async function putUsers(id, newData, status) {
  try {
    await axios.put(`/users/${id}`, {
      followers: newData,
      status: status,
    });
  } catch (error) {
    return error.message;
  }
}
