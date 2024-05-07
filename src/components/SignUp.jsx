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
      <h2 className='text-2xl font-bold' >Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className=' my-5 '>
          <label htmlFor="username" className='font-bold text-xl mx-3'>Username </label>
          <input
            type="text"
            id="username"
            placeholder='username'
            className=' focus:outline-slate-500 text-slate-900 rounded-lg w-60 p-1'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className=''>
          <label htmlFor="password" className=' font-bold text-xl mx-3' >Password </label>
          <input
            placeholder='***********'
            className=' focus:outline-slate-500 text-slate-900 rounded-lg w-60 p-1 my-2'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input id='termsCheckBox' type="checkbox" className='mx-4 my-4
          ' />
          <label htmlFor="termsCheckBox">I accept terms and conditions</label>

        </div>
        <button type="submit" className='my-7 bg-slate-800 p-1 transition-colors duration-500 w-44 font-sans font-bold  rounded-xl hover:bg-slate-700 h ...'>Sign up</button>

      </form>
    </div>
  )
}

export default SignUp