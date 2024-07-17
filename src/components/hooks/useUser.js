import { useEffect, useState } from 'react';
import axios from 'axios';

const useUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const phone = localStorage.getItem('phone');
        if (phone) {
          const response = await axios.get("http://localhost:5000/getUser", {
            params: { phone },  // Pass phone as query parameter using `params`
            withCredentials: true,
          });
          setUser(response.data);
        //   console.log(response.data);  
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []); 

  return user;
};

export default useUser;
