import React from 'react';

const LogoutButton = () => {

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();

    // Redirect to the login page or home page
    window.location.href = '/';
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
