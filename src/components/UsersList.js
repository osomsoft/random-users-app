import React, { useContext } from 'react';

import { UserContext } from '../context';
import User from './User';

export default function UsersList() {
  // eslint-disable-next-line
  const { state: [_, users] } = useContext(UserContext);
  console.log(users);

  if (!users) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {users.map((user) => (
        <User key={user.login.uuid} {...user} />
      ))}
    </div>
  );
}
