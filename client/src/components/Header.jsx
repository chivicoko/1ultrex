import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/' className='uG' style={{color: 'white'}}><h5>U<span style={{color: 'orange'}}>G</span></h5></Link>
            <Link to='/' className='ultrexGold'>Ultrex<span style={{color: 'orange'}}>Gold</span> </Link>
        </div>
        <ul style={{color: 'white'}}>
            {user
            ? (
                <>
                    <li>
                        <Link to='/' style={{color: 'white'}}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-us' style={{color: 'white'}}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/faqs' style={{color: 'white'}}>
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact-us' style={{color: 'white'}}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to='/' style={{color: 'white'}}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-us' style={{color: 'white'}}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/faqs' style={{color: 'white'}}>
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact-us' style={{color: 'white'}}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' style={{color: 'white'}}>
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/register' style={{color: 'white'}}>
                            <FaUser /> Register
                        </Link>
                    </li>
                </>
            )}
        </ul>
    </header>
  )
}

export default Header;