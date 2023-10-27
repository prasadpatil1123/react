// Import necessary dependencies

import React, { useState } from 'react';

// Create the Login component
const Login = () => {
  // State to hold user credentials
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., API call, validation)
    // For simplicity, let's just log the credentials for now
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div class="flex flex-col items-center justify-center mt-10">
  <h2 class="text-3xl font-semibold mb-10">Login</h2>
  <form onSubmit={handleLogin} class="w-full max-w-sm">
    <label class="block text-gray-700 font-medium mb-2">Username:</label>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-gray-700 font-medium mb-2">Password:</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-10">Login</button>
  </form>

</div>
  );
};

export default Login;
