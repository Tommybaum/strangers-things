import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const API_URL = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/users/login';

const LoginPage = ({onLogin}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.data.token;
        onLogin(token); // Pass token
        console.log('Logged in successfully');
        console.log('Token:', token);
        // Redirect to the posts page
        navigate('/posts');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;