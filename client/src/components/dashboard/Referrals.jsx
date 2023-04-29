import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import { ReferralStyle, MobileReferralStyle } from '../styles/ReferralStyle';
import Sidebar from './Sidebar';


const Referrals = () => {
    
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
                            <h1>Your Referrals</h1>
                            <p className='p'>Your upline is <span style={{color: 'orange'}}>Larson</span></p>
                            <div className='userSection'>
                                <div>
                                    <p style={{marginLeft: '20px', marginRight: '125px'}}>Referrals:</p>
                                    <p style={{marginLeft: '20px'}}>$0.00</p>
                                </div> <hr />
                                <div>
                                    <p style={{marginLeft: '20px', marginRight: '90px'}}>Active referrals:</p>
                                    <p style={{marginLeft: '20px'}}>$0.00</p>
                                </div> <hr />
                                <div>
                                    <p style={{marginLeft: '20px', marginRight: '30px'}}>Total referral commission:</p>
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
                <div className='container'>
                    <section>
                        <Sidebar/>
                        <div className='depositeContainer'>
                            <h1>Make A Deposit</h1>
                            Referral page
                        </div>
                    </section>
                </div>
            </ReferralStyle>
        )}

    </Wrapper>
  )
}

export default Referrals;