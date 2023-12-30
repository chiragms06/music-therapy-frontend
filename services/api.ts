import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://20.235.245.115:8443', // Replace with your base URL
    // You can set headers or other configurations here if needed
});

export const fetchEcho = async (name : string) => {
    try{
        const response = await axiosInstance.get(`test/echo/${name}`);
        return response.data; 
    } catch(error){
        console.log(error);
    }
};

export const fetchVersion = async () => {
    try {
      const response = await axiosInstance.get('/test/version');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const fetchWithAuth = async () => {
    try {
      // Replace 'token' with your actual token
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
      const response = await axiosInstance.get('/test/auth', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

