import React, { useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const Nav = ({visible, show}) => {
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])

  return (
    <div>
        <div className="mobile-nav">
            <button type='button' className='mobile-nav-btn' onClick={() => show(!visible)}><FaBars size={24}/></button>
        </div>
        <nav className={visible ? "" : "navbar"} style={{marginTop: '25px'}}>
            <div>
                <NavLink to={'/'} className="logo" style={{marginLeft: '35px'}}><span>Ultrex</span><span style={{color: 'orange'}}>Gold</span></NavLink>
                <div className="nav-top">
                    <NavLink className="nav-link" to="/"> <span>{t('Home')}</span></NavLink>
                    <NavLink className="nav-link" to="/about-us"> <span>{t('About')}</span></NavLink>
                    <NavLink className="nav-link" to="/faqs"> <span>{t('FAQ')}</span></NavLink>
                    <NavLink className="nav-link" to="/contact-us"> <span>{t('Contact')}</span></NavLink>
                </div>
                {/* <hr />
                <NavLink className="nav-link" to="/user"> <span>{t('Account')}</span></NavLink>
                <NavLink className="nav-link" to="/deposit"> <span>{t('Invest Now')}</span></NavLink>
                <NavLink className="nav-link" to="/promo"> <span>{t('Promo Tools')}</span></NavLink>
                <NavLink className="nav-link" to="/my-earning"> <span>{t('Withdraw Earnings')}</span></NavLink>
                <NavLink className="nav-link" to="/referrals"> <span>{t('My Referrals')}</span></NavLink> */}
                <hr />
                <NavLink className="nav-link" to=""><span>&copy; UltrexGoldIntl</span></NavLink>
                {/* <NavLink className="nav-link" to="/settings"><span>Settings</span></NavLink> */}
            </div>
        </nav>
    </div>
  )
}

export default Nav;