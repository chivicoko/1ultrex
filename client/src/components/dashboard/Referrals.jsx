import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import { ReferralStyle, MobileReferralStyle } from '../styles/ReferralStyle';
import Sidebar from './Sidebar';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const Referrals = () => {
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])
    
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
            <MobileReferralStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                            <h1>{t('Your Referrals')}</h1>
                            <p className='p'>{t('Your upline is')} <span style={{color: 'orange'}}>Larson</span></p>
                            <div className='userSection'>
                                <div style={{fontSize: '13px'}}>
                                    <p style={{marginLeft: '20px', marginRight: '125px'}}>{t('Referrals')}: </p>
                                    <p style={{marginLeft: '20px'}}>$0.00</p>
                                </div> <hr />
                                <div style={{fontSize: '13px'}}>
                                    <p style={{marginLeft: '20px', marginRight: '90px'}}>{t('Active referrals:')}</p>
                                    <p style={{marginLeft: '20px'}}>$0.00</p>
                                </div> <hr />
                                <div style={{fontSize: '13px'}}>
                                    <p style={{marginLeft: '20px', marginRight: '30px'}}>{t('Total referral commission:')}</p>
                                    <p style={{marginLeft: '20px'}}>$0.00</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </MobileReferralStyle>
        )
        :
        (
            <ReferralStyle>
                <Sidebar/>
                <div className='container'>
                    <h1>{t('Your Referrals')}</h1>
                    <section>
                        <div className='depositeContainer'>
                            <p className='p'>{t('Your upline is')} <span style={{color: 'orange'}}>Larson</span></p>
                            <div className='userSection'>
                                <div>
                                    <p style={{marginLeft: '20px', marginRight: '125px'}}>{t('Referrals')} : </p>
                                    <p style={{marginLeft: '20px'}}>$0.00</p>
                                </div> <hr />
                                <div>
                                    <p style={{marginLeft: '20px', marginRight: '90px'}}>{t('Active referrals:')}</p>
                                    <p style={{marginLeft: '20px'}}>$0.00</p>
                                </div> <hr />
                                <div>
                                    <p style={{marginLeft: '20px', marginRight: '30px'}}>{t('Total referral commission:')}</p>
                                    <p style={{marginLeft: '20px'}}>$0.00</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </ReferralStyle>
        )}

    </Wrapper>
  )
}

export default Referrals;