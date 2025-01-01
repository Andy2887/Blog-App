import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header className="header">
            <div className="logo">
                <h1>Blog</h1>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    )
}