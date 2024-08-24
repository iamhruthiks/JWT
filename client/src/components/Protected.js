import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Protected = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');


    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('You have been logged out.');
        navigate('/login');
    };


    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h2>Protected Content</h2>
            <p>You have access to this content because you are logged in!</p>
            <button onClick={handleLogout}>Logout</button> {/* Logout button */}
        </div>
    );
};

export default Protected;
