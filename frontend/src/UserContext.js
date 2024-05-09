import React, { createContext, useContext, useState } from 'react';

// createContext function allows data to be shared to components without passing props constantly
const UserContext = createContext();

// custom react hook that provides easy access to 'user' state stored in the context
export const useUser = () => useContext(UserContext);

// we are initializing the state for user and setuser. the 'user' state represents the current user and setUser is a function that is used
// to update the user state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
