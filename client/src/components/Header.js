import { useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';


export default function Header(){
    const { loggedIn, setLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch('http://localhost:4000/profile', {
                method: 'GET',
                credentials: 'include'
            });
            if (response.status === 200){
                setLoggedIn(true);
            }
            
        };
        fetchProfile();
    }, []);

    const logout = async () => {
        const response = await fetch('http://localhost:4000/logout', {
            method: 'POST',
            credentials: 'include'
        });
        if (response.status === 200){
            setLoggedIn(false);
        }
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>Blog</h1>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                {loggedIn ? (
                    <>
                        <Link to="/create">Create</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                    ):(
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>)
                }
            </nav>
        </header>
    )
}