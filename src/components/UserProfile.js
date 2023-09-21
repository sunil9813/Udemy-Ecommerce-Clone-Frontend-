import React from 'react';

const UserProfile = ({ name, image, gradYear, numCourses, major }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <img src={image} alt={name} />
      <p>Graduation Year: {gradYear}</p>
      <p>Number of Courses: {numCourses}</p>
      <p>Major: {major}</p>
    </div>
  );
}

export default UserProfile;