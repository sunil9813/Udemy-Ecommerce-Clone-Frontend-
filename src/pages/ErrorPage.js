import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

const ErrorMessage = styled.p`
  color: #333;
  font-size: 18px;
`;

function ErrorPage({ triedLoggedIn }) {
  let errorMessage = "You have not yet logged in. Please try logging in using your DePauw Account.";

  if (triedLoggedIn) {
    errorMessage = "Incorrect credentials. Please try again.";
  }

  return (
    <ErrorContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ErrorContainer>
  );
}

export default ErrorPage;
