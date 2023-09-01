import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';
import { CoursesProvider } from './context/courses_context';
import { CartProvider } from './context/cart_context';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import ErrorPage from './pages/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [triedLoggedIn, setTriedLoggedIn] = useState(false);

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log(decoded.name);
    handleLoginEffort()

    const users = ["Muhammad Moeez Khan", "user2", "user3"]; // Replace with your actual user names

    if (users.includes(decoded.name)) {
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
    handleLoginEffort()
  };

  return (
    <SidebarProvider>
      <CoursesProvider>
        <CartProvider>
          <GoogleOAuthProvider clientId="903446081352-ncjsa9bjrejql52i949ukkbhr1q44bpb.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
            />
          </GoogleOAuthProvider>
          {isLoggedIn ? <App /> : <ErrorPage triedLoggedIn={triedLoggedIn} />} {/* Render App or Error component based on isLoggedIn */}
        </CartProvider>
      </CoursesProvider>
    </SidebarProvider>
  );
}

root.render(<Main />);

//Create Error Component
//"903446081352-ncjsa9bjrejql52i949ukkbhr1q44bpb.apps.googleusercontent.com"