import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const Header = () => {
    const { i18n, t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

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
            <Link to='/' className='uG' style={{color: 'white'}}><h5> <span>U</span><span style={{color: 'orange'}}>G</span></h5></Link>
            <Link to='/' className='ultrexGold'> <span style={{color: 'white'}}>Ultrex</span> <span style={{color: 'orange'}}>Gold</span> </Link>
        </div>
        <ul style={{color: 'white'}}>
            {user
            ? (
                <>
                    <li>
                        <Link to='/' style={{color: 'white'}}>
                            {t('Home')}
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-us' style={{color: 'white'}}>
                            {t('About')}
                        </Link>
                    </li>
                    <li>
                        <Link to='/faqs' style={{color: 'white'}}>
                            {t('FAQ')}
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact-us' style={{color: 'white'}}>
                            {t('Contact')}
                        </Link>
                    </li>
                    <select className='select-lng' name="" id="" onChange={handleLanguageChange} value={localStorage.getItem("i18nextLng")} style={{height: '30px', width: '130px', background: '#222', border: '1px orange solid', color: 'white', padding: '0 5px', marginLeft: '35px'}}>
                        <option value="en">English</option>
                        <option value="fr">Francais</option>
                        <option value="es">Espanol</option>
                    </select>
                    <li>
                        <button className='btn' onClick={onLogout}>
                            {t('Logout')}
                        </button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to='/' style={{color: 'white'}}>
                            {t('Home')}
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-us' style={{color: 'white'}}>
                            {t('About')}
                        </Link>
                    </li>
                    <li>
                        <Link to='/faqs' style={{color: 'white'}}>
                            {t('FAQ')}
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact-us' style={{color: 'white'}}>
                            {t('Contact')}
                        </Link>
                    </li>
                    <li>
                        <Link to='/login' style={{color: 'white'}}>
                            {t('Login')}
                        </Link>
                    </li>
                    <select className='select-lng' name="" id="" onChange={handleLanguageChange} value={localStorage.getItem("i18nextLng")} style={{height: '30px', width: '130px', background: '#222', border: '1px orange solid', color: 'white', padding: '0 5px', marginLeft: '35px'}}>
                        <option value="en">English</option>
                        <option value="fr">Francais</option>
                        <option value="es">Espanol</option>
                    </select>
                    <li>
                        <Link to='/register' style={{color: 'white'}}>
                            {t('Register')}
                        </Link>
                    </li>
                </>
            )}
        </ul>
    </header>
  )
}

export default Header;