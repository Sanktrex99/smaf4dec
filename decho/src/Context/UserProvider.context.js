import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const context = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/user');
      setUser(response).catch((err) => {
        console.log(err, 'maybe just data and no errors', user);
      });
    };
    fetchData();
  }, []);

  return <context.Provider value={user}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
