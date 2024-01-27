import axios from 'axios';
import { useState } from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    if (!name || !email || !password || !passwordConfirm) return;
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        'http://localhost:2525/api/v1/users/signup',
        {
          name,
          email,
          password,
          passwordConfirm,
        },
      );

      const data = await res.data;
      const token = data.token;
      localStorage.setItem('token', token);
      navigate('/tasks');
    } catch (err) {
      console.log(err.message);
    } finally {
      setName('');
      setEmail('');
      setPassowrd('');
      setPasswordConfirm('');
      setLoading(false);
    }
    console.log('Signup form submitted');
  }

  return (
    <div>
      <Header />

      {loading && <Loading />}

      <>
        {' '}
        {!loading && (
          <div className="max-w-md mx-auto my-32 px-5 py-2 text-center bg-white rounded-md shadow-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <h1 className="text-2xl font-bold">Join us today!</h1>
                <p className="text-gray-500">Sign up now to become a member</p>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
                  required
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassowrd(e.target.value)}
                  className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
                  required
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-blue-500 rounded-sm px-4 w-full text-white h-10 hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Signup
                </button>
              </div>
              <p className="text-gray-500">
                Already a member?{' '}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </form>
          </div>
        )}
      </>
    </div>
  );
}

export default Signup;
