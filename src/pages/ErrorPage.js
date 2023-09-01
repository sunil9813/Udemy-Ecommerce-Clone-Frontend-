import React from 'react';

function ErrorPage({ triedLoggedIn }) {
  let errorMessage = "You have not yet logged in, try login using your DePauw Account.";

  if (triedLoggedIn) {
    errorMessage = "Incorrect credentials. Please try again.";
  }

  return (
    <div className="error-container">
      <p className="error-message">{errorMessage}</p>
    </div>
  );
}

export default ErrorPage;
