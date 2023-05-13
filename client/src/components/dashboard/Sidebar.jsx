import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import { MobileSidebarStyle, SidebarStyle } from '../styles/SidebarStyle';
import { Settings, User, Edit3, DollarSign, Database, Award, Tool } from "react-feather";
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const Sidebar = () => {
    const { i18n, t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])
    
    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
        setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 640;

  return (
    <Wrapper>
        {isMobile ?
            (
                <MobileSidebarStyle>
                        <select name="" id="" onChange={handleLanguageChange} value={localStorage.getItem("i18nextLng")} style={{height: '30px', width: '330px', padding: '0 5px'}}>
                            <option value="en">English</option>
                            <option value="fr">Francais</option>
                            <option value="es">Espanol</option>
                        </select>
                    <div className='container'>
                        <div className='container1'><Link style={{height: '50px', textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/user'}>{t('Account')}</Link></div>
                        <div className='container1'><Link style={{height: '50px', textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/deposit'}>{t('Invest Now')}</Link></div>
                        <div className='container1'><Link style={{height: '50px', textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={''}>{t('My Investments')}</Link></div>
                        {/* <div className='container1'><Link style={{height: '40px', textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/my-investment'}>My Investments</Link></div> */}
                        <div className='container1'><Link style={{height: '50px', textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/promo'}>{t('Promo Tools')}</Link></div>
                        <div className='container1'><Link style={{height: '50px', textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/my-earning'}>{t('Withdraw Earnings')}</Link></div>
                        <div className='container1'><Link style={{height: '50px', textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/referrals'}>{t('My Referrals')}</Link></div>
                        <div className='container1'><Link style={{height: '50px', textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/settings'}>{t('Settings')}</Link></div>
                        <div className='container1'><Link style={{height: '50px', textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={''}>{t('Logout')}</Link></div>
                    </div>
                </MobileSidebarStyle>
            )
            :
            (
                <SidebarStyle>
                    <div className='container'>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/user'}>
                                <span className='icon'>
                                    <User size={16} />
                                </span>
                                &nbsp;&nbsp; {t('ACCOUNT')}
                            </Link>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/deposit'}>
                                <span className='icon'>
                                    <DollarSign size={16} />
                                </span>
                                &nbsp;&nbsp; {t('INVEST NOW')}
                            </Link>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={''}>
                                <span className='icon'>
                                    <Database size={16} />
                                </span>
                                &nbsp;&nbsp; {t('MY INVESTMENTS')}
                            </Link>
                        </div>
                        {/* <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/my-investment'}>
                                <span className='icon'>
                                    <Database size={16} />
                                </span>
                                &nbsp;&nbsp; MY INVESTMENTS
                            </Link>
                        </div> */}
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/promo'}>
                                <span className='icon'>
                                    <Tool size={16} />
                                </span>
                                &nbsp;&nbsp; {t('PROMO TOOLS')}
                            </Link>
                        </div>
                        <div className='container1'>
                            <p className='pa'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/my-earning'}>
                                <span className='icon'>
                                    <Award size={16} />
                                </span>
                                &nbsp;&nbsp; {t('WITHDRAW EARNINGS')}
                            </Link>
                            </p>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/referrals'}>
                                <span className='icon'>
                                    <Edit3 size={16} />
                                </span>
                                &nbsp;&nbsp; {t('MY REFERRALS')}
                            </Link>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/settings'}>
                                <span className='icon'>
                                    <Settings size={16} />
                                </span>
                                &nbsp;&nbsp; {t('SETTINGS')}
                            </Link>
                        </div>
                    </div>
                </SidebarStyle>
            )}
    </Wrapper>
  )
}

export default Sidebar;