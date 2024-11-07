import axios from 'axios';

const API_URL = 'http://localhost:3001/users';



export const saveUserData = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error saving data", error);
    throw error;
  }
};

export const fetchUserData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

