import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/login', { email, password });
            localStorage.setItem('token', data.token);
            alert('Login successful!');
            navigate('/protected');
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div style={{ marginTop: "200px" }} >
            <center>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br /><br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /><br /><br />
                    <button type="submit">Login</button><br /><br />
                    <p>Don't have an account? <button type="button" onClick={handleRegister}>Register</button></p>
                </form>
            </center>
        </div>
    );
};

export default Login;
