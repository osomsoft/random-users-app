import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { UserContext } from './context';
import Header from './components/Header';
import UsersList from './components/UsersList';

import './css/styles.css';

function App () {  
  const { addUsers } = useContext(UserContext);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((response) => {
        addUsers(response.data.results)
      });
  }, []);


  return (
    <div>
      <Header />
      <UsersList />
    </div>
  );
}

export default App;