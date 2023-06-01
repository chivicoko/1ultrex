import React, { useEffect, useState } from 'react'
import { Wrapper } from '../styles/HomeStyle';
import Sidebar from './Sidebar';
import { PromoStyle, MobilePromoStyle } from '../styles/PromoStyle';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Promo = () => {
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const { deposits, isLoading, isError, message } = useSelector((state) => state.deposits);

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
            <MobilePromoStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                            <h1>{t('Referral Links')}</h1>
                            <p className='p'>{t('The best internet investment')}</p>
                            <div className='userSection'>
                                <div><p style={{marginLeft: '20px'}}>https://ultrexgoldintl.com/?ref=Happiness</p></div>
                            </div>
                        </div>
                    </section>
                </div>
            </MobilePromoStyle>
        )
        :
        (
            <PromoStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                            <h1>{t('Referral Links')}</h1>
                            <p className='p'>{t('The best internet investment')}</p>
                            <div className='userSection'>
                                <div><p style={{marginLeft: '20px'}}>https://ultrexgoldintl.com/?ref=Happiness</p></div>
                            </div>
                        </div>
                    </section>
                </div>
            </PromoStyle>
        )}

    </Wrapper>
  )
}

export default Promo;