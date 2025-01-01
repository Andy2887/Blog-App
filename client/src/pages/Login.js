import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="auth-container">
            <form className="auth-form">
                <h2>Welcome Back</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type = "text" id = "username" placeholder = "Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type = "password" id = "password" placeholder = "Password" />
                </div>
                <button type="submit" className="auth-button">Login</button>
                <div className="auth-links">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}