// import api from './api';
import { baseurl } from "../utils/url";
const authService =async ({username,password})=> {
  console.log(username)
    try {
      const response = await fetch(`${baseurl}/api/login/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if required
          },
          // Add body data if required
          body: JSON.stringify({
            UserName: username,
            Password: password,
          }),
      });

      if (!response.ok) {
          throw new Error('Failed to add video');
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error adding video:', error);
      throw error;
  }
};


export default authService;
