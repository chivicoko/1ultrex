import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import Sidebar from './Sidebar';
import { UserEarningStyle, MobileUserEarningStyle } from '../styles/UserEarningStyle';

const UserEarning = () => {
    
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
                            <h1>Request for Withdrawal</h1>
                            <div className='depo'>
                                <div className='depositeContainer-item2-'>
                                    <p>Account Balance $</p>
                                    <p>$0.00</p>
                                </div>
                                <div className='depositeContainer-item2-'>
                                    <p>Pending Withdrawals</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <div className='depositeContainer-item1'>
                                    <p>Processing</p>
                                    <p>Available</p>
                                    <p>Pending</p>
                                    <p>Account</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Bitcoin</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Ethereum</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>TRON (TRX)</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>USDT (TRC20)</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>BNB (Binance coin) BNB</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>BNB (Binance coin) BSC</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                            </div>
                            <p>You have no funds to withdraw.</p>
                            
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
                            <h1>Request for Withdrawal</h1>
                            <div className='depo'>
                                <div className='depositeContainer-item2-'>
                                    <p>Balance $</p>
                                    <p>$0.00</p>
                                </div>
                                <div className='depositeContainer-item2-'>
                                    <p>Pending Withdrawals</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <div className='depositeContainer-item1'>
                                    <p>Processing</p>
                                    <p>Available</p>
                                    <p>Pending</p>
                                    <p>Account</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Bitcoin</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>Ethereum</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>TRON (TRX)</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>USDT (TRC20)</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>BNB (Binance coin) BNB</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
                                </div>
                                <div className='depositeContainer-item2'>
                                    <p>BNB (Binance coin) BSC</p>
                                    <p>$0.00</p>
                                    <p>$0.00</p>
                                    <p>Not set</p>
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