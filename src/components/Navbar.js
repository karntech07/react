import {useState} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Cart = () => {
    return <h3>Cart</h3>
}

export const Navbar = () => {
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const onlineStatus = useOnlineStatus();
    return (
        <div className="navbar">
            <h3>Status: {onlineStatus ? '✅' : '🔴'} </h3>
            <Link to='/grocery'>Grocery</Link>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact us</Link>
            <button className="login" onClick={() => {
               setIsLoginClicked(!isLoginClicked)
            }}>{isLoginClicked ? 'Logout' : 'Login'}</button>
        </div>
    )
}