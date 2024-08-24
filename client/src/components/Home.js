import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register');
    };
    const handleLogin = () => {
        navigate('/login');
    };
    return (
        <div style={{ marginTop: "200px" }} >
            <center>
                <button type="button" onClick={handleRegister}>Register</button><br /><br />
                <button type="button" onClick={handleLogin}>login</button>
            </center>

        </div>
    )
}

export default Home
