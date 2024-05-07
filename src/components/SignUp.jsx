import React, { useState } from 'react'
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle authentication here
    console.log('Logging in with:', { username, password });
    // You can make an API call here to authenticate the user
  };

  return (
    <div className='text-center container '>
      <h2 className='text-2xl font-bold'>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className=' my-5 '>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            placeholder='username'
            className='focus:outline-slate-500 text-slate-900 bg-gray-50 border border-gray-300 '
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className=''>
          <label htmlFor="password">Password </label>
          <input
            placeholder='***********'
            className='focus:outline-slate-500 text-slate-900'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='my-5 bg-slate-800 p-1 transition-colors duration-500 w-32 font-sans font-bold my-5 rounded hover:bg-slate-700 h ...'>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp