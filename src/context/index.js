import React, { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { UserReducer } from './reducer';

const initialState = [];

export const UserContext = createContext();

export function UserProvider({children}) {
  const [ state, dispatch ] = useReducer(UserReducer, initialState);

  useEffect(() => {
    addUsers()
  }, []);
  
  const addUsers = (users) => {
    dispatch({ type: 'ADD_USERS', users });
  }

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        addUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element,
}
