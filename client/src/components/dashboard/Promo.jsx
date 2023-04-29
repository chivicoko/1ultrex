import React, { useEffect, useState } from 'react'
import { Wrapper } from '../styles/HomeStyle';
import Sidebar from './Sidebar';
import { PromoStyle, MobilePromoStyle } from '../styles/PromoStyle';

const Promo = () => {
    
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
                            <h1>Referral Links</h1>
                            <p className='p'>The best internet investment</p>
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
                <div className='container'>
                    <section>
                        <Sidebar/>
                        <div className='depositeContainer'>
                            <h1>Make A Deposit</h1>
                            Promo page
                        </div>
                    </section>
                </div>
            </PromoStyle>
        )}

    </Wrapper>
  )
}

export default Promo;