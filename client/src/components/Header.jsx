import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import Nav from './Nav';

const Header = () => {
    const [sideBarVisible, setSideBarVisible] = useState(false);
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
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Nav visible={sideBarVisible} show={setSideBarVisible} />
            <div className='logo'>
                <Link to='/' className='uG' style={{color: 'white'}}><h5><span>U</span><span style={{color: 'orange'}}>G</span></h5></Link>
                <Link to='/' className='ultrexGold'><span style={{color: 'white'}}>Ultrex</span><span style={{color: 'orange'}}>Gold</span></Link>
            </div>
        </div>
        <ul style={{color: 'white'}}>
            <li className="desk-nav"><Link style={{color: 'white'}} to="/"> <span>{t('Home')}</span></Link></li>
            <li className="desk-nav"><Link style={{color: 'white'}} to="/about-us"> <span>{t('About')}</span></Link></li>
            <li className="desk-nav"><Link style={{color: 'white'}} to="/faqs"> <span>{t('FAQ')}</span></Link></li>
            <li className="desk-nav"><Link style={{color: 'white'}} to="/contact-us"> <span>{t('Contact')}</span></Link></li>

            {user
            ? (
                <>
                    <select className='select-lng' name="" id="" onChange={handleLanguageChange} value={localStorage.getItem("i18nextLng")} style={{height: '30px', width: '110px', background: '#222', border: '1px orange solid', color: 'white', padding: '0 5px'}}>
                        <option value="en">English</option>
                        <option value="fr">Francais</option>
                        <option value="es">Espanol</option>
                    </select>
                    <li>
                        <button className='btn' onClick={onLogout} style={{color: 'white', borderBottom: '1px orange solid', borderTop: '1px orange solid'}}>
                            {t('Logout')}
                        </button>
                    </li>
                </>
            ) : (
                <>
                    <select className='select-lng' name="" id="" onChange={handleLanguageChange} value={localStorage.getItem("i18nextLng")} style={{height: '30px', width: '100px', background: '#222', border: '1px orange solid', color: 'white', padding: '0 5px', marginLeft: '35px'}}>
                        <option value="en">English</option>
                        <option value="fr">Francais</option>
                        <option value="es">Espanol</option>
                    </select>
                    <li>
                        <Link to='/login' style={{color: 'white', borderBottom: '1px orange solid', borderTop: '1px orange solid'}}>
                            {t('Login')}
                        </Link>
                    </li>
                    <li>
                        <Link to='/register' style={{color: 'white', borderBottom: '1px orange solid', borderTop: '1px orange solid'}}>
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