import {useState} from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return <h3>Cart</h3>
}

export const Navbar = () => {
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    return (
        <div className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact us</Link>

            <button className="login" onClick={() => {
               setIsLoginClicked(!isLoginClicked)
            }}>{isLoginClicked ? 'Logout' : 'Login'}</button>
        </div>
    )
}