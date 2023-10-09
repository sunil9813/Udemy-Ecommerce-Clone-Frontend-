import React from 'react';
import { other_images } from '../utils/images';

const UserProfile = ({ name, gradYear, numCourses, major }) => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    backgroundColor: 'lightgrey',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '50px auto',
  };

  const userDetailsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '30px',
    textAlign: 'center',
  };

  const userImageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginRight: '20px',
  };

  const userInfoStyle = {
    textAlign: 'center',
    fontWeight: '600',
  };

  const headingStyle = {
    fontSize: '24px',
    color: '#333',
    margin: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    margin: '25px 0',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>User Profile</h1>
      <div style={userDetailsStyle}>
        {/* Interpolate the image path correctly */}
        <img src={other_images.mate_smiling} alt={name} style={userImageStyle} />
        <div style={userInfoStyle}>
          <p style={paragraphStyle}>Name: Moeez Khan{name}</p>
          <p style={paragraphStyle}>Graduation Year: 2024{gradYear}</p>
          <p style={paragraphStyle}>Number of Courses: 4{numCourses}</p>
          <p style={paragraphStyle}>Major: Computer Science{major}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;