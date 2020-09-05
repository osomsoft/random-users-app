import React from 'react'
import PropTypes from 'prop-types';

export default function User({
  name,
  location,
  email,
  picture,
}) {
  return (
    <div>
      <div>
        <img src={picture.medium} alt={name.first} />
      </div>
      <div><strong>Name: </strong> {name.first} {name.last}</div>
      <div><strong>Country: </strong> {location.country}</div>
      <div><strong>Email: </strong> {email}</div>
    </div>
  )
}

User.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  }),
  location: PropTypes.shape({
    country: PropTypes.string,
  }),
  email: PropTypes.string,
  picture: PropTypes.shape({
    medium: PropTypes.string,
  }),
};
