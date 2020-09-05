import React from 'react';
import ReactDOM from 'react-dom';

import UsersApp from './UsersApp';
import { UserProvider } from './context';

ReactDOM.render(
  <UserProvider>
    <UsersApp />
  </UserProvider>,
  document.getElementById('root')
);
