import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import Sidebar from './Sidebar';
import { UserEarningStyle, MobileUserEarningStyle } from '../styles/UserEarningStyle';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const UserEarning = () => {
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
            <MobileUserEarningStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                            <h1>{t('Request for Withdrawal')}</h1>
                            <div className='depo'>
                                <div className='depositeContainer-item2-'>
                                    <p>{t('Account Balance $')}</p>
                                    <p>$0.00</p>
                                </div>
                                <div className='depositeContainer-item2-'>
                                    <p>{t('Pending Withdrawals')}</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <div className='depositeContainer-item1'>
                                    <p>{t('Processing')}</p>
                                    <p>{t('Available')}</p>
                                    <p>{t('Pending')}</p>
                                    <p>{t('Account')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Bitcoin</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Ethereum</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>TRON (TRX)</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>USDT (TRC20)</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>BNB (Binance coin) BNB</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>BNB (Binance coin) BSC</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                            </div>
                            <p>{t('You have no funds to withdraw.')}</p>
                            
                        </div>
                    </section>
                </div>
            </MobileUserEarningStyle>
        )
        :
        (
            <UserEarningStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                            <h1>{t('Request for Withdrawal')}</h1>
                            <div className='depo'>
                                <div className='depositeContainer-item2-'>
                                    <p>{t('Balance $')}</p>
                                    <p>$0.00</p>
                                </div>
                                <div className='depositeContainer-item2-'>
                                    <p>{t('Pending Withdrawals')}</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <div className='depositeContainer-item1'>
                                    <p>{t('Processing')}</p>
                                    <p>{t('Available')}</p>
                                    <p>{t('Pending')}</p>
                                    <p>{t('Account')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Bitcoin</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Ethereum</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>TRON (TRX)</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>USDT (TRC20)</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>BNB (Binance coin) BNB</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>BNB (Binance coin) BSC</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>{t('Not set')}</p>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                </div>
            </UserEarningStyle>
        )}

    </Wrapper>
  )
}

export default UserEarning;