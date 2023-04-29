import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import Sidebar from './Sidebar';
import { UserInvestmentStyle, MobileUserInvestmentStyle } from '../styles/UserInvestmentStyle';

const UserInvestment = () => {
    
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
            <MobileUserInvestmentStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                            <h1>Your Deposits</h1>
                            <div className='depo'>
                                <div className='depositeContainer-item2-'>
                                    <p>Total</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <h4 className='p'>First Proposal</h4>
                                <div className='depositeContainer-item1'>
                                    <p>Plan</p>
                                    <p>Deposit Amount ($)</p>
                                    <p>Daily Profit (%)</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Plan 1</p>
                                    <p>$100.00 - $999.00</p>
                                    <p>3.00</p>
                                </div>
                                <p className='no-depo'>No deposit for this plan</p>
                            </div>
                            
                            <div className='depo'>
                                <h4 className='p'>Second Proposal</h4>
                                <div className='depositeContainer-item1'>
                                    <p>Plan</p>
                                    <p>Deposit Amount ($)</p>
                                    <p>Daily Profit (%)</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Plan 1</p>
                                    <p>$1000.00 - $9999.00</p>
                                    <p>5.00</p>
                                </div>
                                <p className='no-depo'>No deposit for this plan</p>
                            </div>

                            <div className='depo'>
                                <h4 className='p'>Gold Package</h4>
                                <div className='depositeContainer-item1'>
                                    <p>Plan</p>
                                    <p>Deposit Amount ($)</p>
                                    <p>Daily Profit (%)</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Plan 1</p>
                                    <p>$10000.00 and more</p>
                                    <p>7%</p>
                                </div>
                                <p className='no-depo'>No deposit for this plan</p>
                            </div>

                            <div className='depo'>
                                <h4 className='p'>Couple's Account</h4>
                                <div className='depositeContainer-item1'>
                                    <p>Plan</p>
                                    <p>Deposit Amount ($)</p>
                                    <p>Daily Profit (%)</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Plan 1</p>
                                    <p>$20000.00 and more</p>
                                    <p>10%</p>
                                </div>
                                <p className='no-depo'>No deposit for this plan</p>
                            </div>
                            
                        </div>
                    </section>
                </div>
            </MobileUserInvestmentStyle>
        )
        :
        (
            <UserInvestmentStyle>
                <div className='container'>
                    <section>
                        <Sidebar/>
                        <div className='depositeContainer'>
                            <h1>Your Deposit</h1>
                            <div className='depo'>
                                <div className='depositeContainer-item2-'>
                                    <p>Balance $</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <h2 className='p'>First Proposal</h2>
                                <div className='depositeContainer-item1'>
                                    <p>Plan</p>
                                    <p>Spend Amount $</p>
                                    <p>Daily Profile %</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Plan 1</p>
                                    <p>$100 - $999</p>
                                    <p>3%</p>
                                </div>
                                <p className='no-depo'>No deposit for this plan</p>
                            </div>
                            
                            <div className='depo'>
                                <h2 className='p'>Second Proposal</h2>
                                <div className='depositeContainer-item1'>
                                    <p>Plan</p>
                                    <p>Spend Amount $</p>
                                    <p>Daily Profile %</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Plan 1</p>
                                    <p>$1,000 - $9,999</p>
                                    <p>5%</p>
                                </div>
                                <p className='no-depo'>No deposit for this plan</p>
                            </div>

                            <div className='depo'>
                                <h2 className='p'>Gold Package</h2>
                                <div className='depositeContainer-item1'>
                                    <p>Plan</p>
                                    <p>Spend Amount $</p>
                                    <p>Daily Profile %</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Plan 1</p>
                                    <p>$10,000 - $99,999</p>
                                    <p>7%</p>
                                </div>
                                <p className='no-depo'>No deposit for this plan</p>
                            </div>
                            
                        </div>
                    </section>
                </div>
            </UserInvestmentStyle>
        )}

    </Wrapper>
  )
}

export default UserInvestment;