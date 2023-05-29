import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import Sidebar from './Sidebar';
import { UserStyle, MobileUserStyle } from '../styles/UserStyle';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner';
import { useNavigate } from 'react-router-dom';
import { deleteDeposit, getDeposits } from '../../features/deposits/depositSlice';
import { reset } from '../../features/auth/authSlice';
import Button from '../styles/Button';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const Deposit = () => {
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])

    // checking for phone size
     
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

    // ------------

    // Bringing in the user and user's deposits
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { user } = useSelector((state) => state.auth);
//    console.log(user);
   const {deposits, isLoading, isError, message} = useSelector((state) => state.deposits);
//    console.log(deposits);
//    console.log(deposits[0].user);

   useEffect(() => {
        if (isError) {
            console.log(message);
        }

       if (!user) {
           navigate('/login');
        }

        dispatch(getDeposits());

        return () => {
            dispatch(reset);
        }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

  return (
    <Wrapper>
        {isMobile ?
        (
            <MobileUserStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='userContainer'>
                            <section>
                                {deposits.length > 0 ? (
                                    <>
                                        <div className='userSection' >
                                            <h1 style={{textAlign: 'center', marginTop: '20px'}}>Your Account</h1>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Username:</p><p>{user.username}</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Registration Date:</p><p>{new Date(user.createdAt).toLocaleString('en-US')}</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Last Access:</p><p>Apr-18-2023 04:26:20 PM </p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Account Balance:</p><p>$0.00</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Earned Total:</p><p>$0.00</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Pending Withdrawal:</p><p>$0.00</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Withdrew Total:</p><p>$0.00</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Active Deposite:</p><p>$0.00</p></div>
                                        </div>

                                        <h1 style={{textAlign: 'center', marginTop: '70px'}}>Your Deposits</h1>
                                        <div className="userDepositSection" style={{ backgroundColor: 'grey', borderRadius: '10px', marginTop: '20px', padding: '.25px 15px'}}>
                                            {deposits.map((deposit) => (
                                                <div key={deposit._id} >
                                                    <hr />
                                                    <div className="deposit" style={{margin: '30px 0'}} >
                                                        <div style={{marginBottom: '15px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}>
                                                            <p style={{fontWeight: 'bold', color: 'black'}}>Transaction time : </p> <p style={{color: '#111'}}>{new Date(deposit.createdAt).toLocaleString('en-US')}</p>
                                                        </div>
                                                        <div style={{marginBottom: '15px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}>
                                                            <p style={{fontWeight: 'bold', color: 'black'}}>Transaction Currency : </p><p style={{color: '#111'}}>{deposit.cryptoCurrency}</p>
                                                        </div>
                                                        <div style={{marginBottom: '15px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}>
                                                            <p style={{fontWeight: 'bold', color: 'black'}}>Transaction Amount : </p><p style={{color: '#111'}}>{deposit.depositeAmount}</p>
                                                        </div>
                                                        <div style={{marginBottom: '15px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}>
                                                            <p style={{fontWeight: 'bold', color: 'black'}}>Transaction Status : </p><p style={{color: '#111'}}>{deposit.pending === 'pending' ? 'Pending' : 'Invested'}</p>
                                                        </div>
                                                        <Button style={{padding: '10px 20px', fontSize: '12px', margin: '0', color: 'red', letterSpacing: '4px', backgroundColor: '#444', border: '1px solid #444', marginTop: '10px', marginBottom: '0'}} onClick={() => dispatch(deleteDeposit(deposit._id))}>Delete</Button>
                                                    </div>
                                                    <hr />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (<h3>You have not made any deposits</h3>)}
                            </section>

                        </div>
                    </section>
                </div>
            </MobileUserStyle>
        )
        :
        (
            <UserStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='userContainer'>
                            <section>
                                {deposits.length > 0 ? (
                                    <>
                                        <h1 style={{textAlign: 'center', marginTop: '20px'}}>{t('Your Account')}</h1>
                                        <div className='userSection' >
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>{t('Username')}:</p><p>{user.username}</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>{t('Registration Date')}:</p><p>{new Date(user.createdAt).toLocaleString('en-US')}</p></div>
                                            {/* <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>{t('Last Access')}:</p><p>Apr-18-2023 04:26:20 PM </p></div> */}
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>{t('Account Balance')}:</p><p>$0.00</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>{t('Earned Total')}:</p><p>$0.00</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>{t('Pending Withdrawal')}:</p><p>$0.00</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>{t('Withdrew Total')}:</p><p>$0.00</p></div>
                                            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>{t('Active Deposite')}:</p><p>$0.00</p></div>
                                        </div>

                                        <h1 style={{textAlign: 'center', marginTop: '70px'}}>{t('Your Deposits')}</h1>
                                        <div className="userDepositSection" style={{ backgroundColor: 'grey', borderRadius: '10px', marginTop: '20px', padding: '.25px 15px'}}>
                                            {deposits.map((deposit) => (
                                                <div key={deposit._id} >
                                                    <hr />
                                                    <div className="deposit" style={{margin: '30px 0'}} >
                                                        <div style={{margin: '0 35px 15px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}>
                                                            <p style={{fontWeight: 'bold', color: 'black'}}>{t('Transaction time')} : </p> <p style={{color: 'white'}}>{new Date(deposit.createdAt).toLocaleString('en-US')}</p>
                                                        </div>
                                                        <div style={{margin: '0 35px 15px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}>
                                                            <p style={{fontWeight: 'bold', color: 'black'}}>{t('Transaction Currency')} : </p><p style={{color: 'white'}}>{deposit.cryptoCurrency}</p>
                                                        </div>
                                                        <div style={{margin: '0 35px 15px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}>
                                                            <p style={{fontWeight: 'bold', color: 'black'}}>{t('Transaction Amount')} : </p><p style={{color: 'white'}}>{deposit.depositeAmount}</p>
                                                        </div>
                                                        <div style={{margin: '0 35px 15px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}>
                                                            <p style={{fontWeight: 'bold', color: 'black'}}>{t('Transaction Status')} : </p><p style={{color: 'white'}}>{deposit.pending === 'pending' ? 'Pending' : 'Invested'}</p>
                                                        </div>
                                                        <Button style={{padding: '10px 20px', fontSize: '12px', margin: '0', color: 'red', letterSpacing: '4px', backgroundColor: 'orange', border: '1px solid orange', marginTop: '10px', marginBottom: '0'}} onClick={() => dispatch(deleteDeposit(deposit._id))}>{t('Delete')}</Button>
                                                    </div>
                                                    <hr />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (<h3 style={{marginTop: '250px', marginLeft: '150px', fontSize: '30px'}}>{t('You have not made any deposits')}</h3>)}
                            </section>

                        </div>
                    </section>
                </div>
            </UserStyle>
        )}

    </Wrapper>
  )
}

export default Deposit;