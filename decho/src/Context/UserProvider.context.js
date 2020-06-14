import React, { createContext, useState, useEffect } from 'react';
const context = createContext(null);
import axios from 'axios';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const response = await axios.get('/user');
    setUser(response).catch((err) => {
      console.log(err, 'maybe just data and no errors', user);
    });
  }, []);

  return <context.Provider value={user}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
