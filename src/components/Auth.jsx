const API_URL = 'https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/users/register'
import { useState } from "react";



const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');

    const handleRegistration = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password
                    }
                })
            });

            const result = await response.json();
            console.log(result)
            if (result.success) {
                setRegistrationStatus('Registration successful');

            } else {
                setRegistrationStatus(`Registration failed: ${result.error.message}`);
            }
        } catch (error) {
            setRegistrationStatus('An error occurred');
        }
    };

    return (
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={handleRegistration}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Register</button>
            </form>
            <p>{registrationStatus}</p>
        </div>
    );
};

export default RegistrationForm;

   
