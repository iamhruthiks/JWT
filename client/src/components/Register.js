import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:5000/api/register', { email, password });

            alert('Registration successful! Please log in.');
            navigate('/login');
        } catch (error) {

            console.error("Registration error:", error.response?.data);
            alert('Registration failed: ' + (error.response?.data?.message || 'Unknown error'));
        }
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div style={{ marginTop: "200px" }}>
            <center>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <br /><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    /><br /><br />
                    <button type="submit">Register</button>
                </form><br /><br />
                Already have an account? <button type="button" onClick={handleLogin}>Login</button>
            </center>
        </div>
    );
};

export default Register;
