import axios from 'axios';
import { useState } from 'react';

function Login({ triggerLoggedStatus }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:2525/api/v1/users/signin',
        {
          email,
          password,
        },
      );

      const data = await res.data;
      const token = data.token;
      localStorage.setItem('token', token);
      console.log(token);
      triggerLoggedStatus(true);
    } catch (err) {
      console.log(err.message);
    } finally {
      setEmail('');
      setPassword('');
    }
    console.log('Signup form submitted');
  }

  return (
    <form
      className="max-w-md mx-auto p-8 space-y-6 bg-white rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="text-gray-500">Log in to access your account</p>
      </div>
      <div className="space-y-3">
        <input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
          required
        />

        <input
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 rounded-sm px-4 w-full text-white h-10 hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
        >
          Login
        </button>
      </div>
      <p className="text-center text-gray-500">
        Not a member?{' '}
        <a href="#" className="text-blue-500">
          Sign up
        </a>
      </p>
    </form>
  );
}

export default Login;
