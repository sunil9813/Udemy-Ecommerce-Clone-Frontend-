import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import ErrorPage from './pages/ErrorPage';
import styled from 'styled-components';
import db from './firebase/init.js';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';


const root = ReactDOM.createRoot(document.getElementById('root'));

const StyledContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
`;

const StyledTitle = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [triedLoggedIn, setTriedLoggedIn] = useState(false);

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);

    const db = getFirestore();
    const studentsCollection = collection(db, 'students');

    const q = query(studentsCollection, where('email', '==', decoded.email));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLoginEffort = () => {
    setTriedLoggedIn(true);
  };

  const handleGoogleLoginError = () => {
    console.log('Login Failed');
    handleLoginEffort();
  };

  return (
    <SidebarProvider>
      <CoursesProvider>
        <CartProvider>
          <StyledContainer>
            <StyledTitle>
              {isLoggedIn ? 'Welcome to the App!' : 'Login Using DePauw Email'}
            </StyledTitle>
            <GoogleOAuthProvider clientId="903446081352-ncjsa9bjrejql52i949ukkbhr1q44bpb.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
              />
            </GoogleOAuthProvider>
          </StyledContainer>
          {isLoggedIn ? <App /> : <ErrorPage triedLoggedIn={triedLoggedIn} />}
        </CartProvider>
      </CoursesProvider>
    </SidebarProvider>
  );
}

root.render(<Main />);