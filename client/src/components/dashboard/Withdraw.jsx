import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import Sidebar from './Sidebar';
import { DepositStyle, MobileDepositStyle } from '../styles/DepositeStyle';
import Button from '../styles/Button';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';
import { reset } from '../../features/auth/authSlice';

const Withdraw = () => {
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

    
  // Bringing in the user and user's deposits
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.auth);
  const { deposits, isLoading, isError, message } = useSelector((state) => state.deposits);
//   console.log(user, deposits);
   
  const sum = deposits.reduce((total, current) => current.status === 'Confirmed' ? total + current.depositeAmount : total + 0.00, 0);
  const totalSum = deposits.reduce((total, current) => total + current.depositeAmount, 0);
//   console.log(sum, totalSum);


    const isMobile = windowDimension <= 640;

    const [display, setDisplay] = useState(false);
    const [amount, setAmount] = useState('');
    const [mainAmount, setMainAmount] = useState('');
    const [currency, setCurrency] = useState('');
    
    // const navigate = useNavigate();

    const msgDisplay = () => {
       setDisplay(true);
    }
    
    setTimeout(() => {
        setDisplay(false);
    }, 60000);

    const onSend = (e) => {
        e.preventDefault();
        console.log(amount, currency);
    }
    
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    // dispatch(getDeposits());

    return () => {
      dispatch(reset);
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <Wrapper>
        {isMobile ?
        (
            <MobileDepositStyle>
                    <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                                <h1>{t('Make A Withdrawal')}</h1>
                            {/* <div>
                                <small>{t('Select A Package')}</small>
                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>{t('First Proposal')}</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('100.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>{t('Plan')}</p>
                                        <p>{t('Spent Amount ($)')}</p>
                                        <p>{t('Daily Profit (%)')}</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>{t('Plan 1')}</p>
                                        <p>$100.00 - $999.00</p>
                                        <p>3.00</p>
                                    </div>
                                </div>
                                
                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>{t('Second Proposal')}</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('1000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>{t('Plan')}</p>
                                        <p>{t('Spent Amount ($)')}</p>
                                        <p>{t('Daily Profit (%)')}</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>{t('Plan 1')}</p>
                                        <p>$1000.00 - $9999.00</p>
                                        <p>5.00</p>
                                    </div>
                                </div>

                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>{t('Gold Package')}</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('10000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>{t('Plan')}</p>
                                        <p>{t('Spent Amount ($)')}</p>
                                        <p>{t('Daily Profit (%)')}</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>{t('Plan 1')}</p>
                                        <p>$10000.00 and more</p>
                                        <p>7.00</p>
                                    </div>
                                </div>

                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>{t("Couple's Package")}</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('20000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>{t('Plan')}</p>
                                        <p>{t('Spent Amount ($)')}</p>
                                        <p>{t('Daily Profit (%)')}</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>{t('Plan 1')}</p>
                                        <p>$20000.00 {t('and more')}</p>
                                        <p>10.00</p>
                                    </div>
                                </div>
                            </div> */}

                            <div className='depo' style={{marginTop: '30px', marginBottom: '15px'}}>
                                <div className='depositeContainer-item2-' style={{fontSize: '12px'}}>
                                    <p>{t('Your Account Balance ($)')}</p>
                                    <p>$ {sum || 0.00}</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <form className='currencies' style={{borderTop: "none"}} onSubmit={onSend}>
                                    <div className='depositeContainer-item1-' >
                                        <p style={{fontSize: '12px', paddingTop: '3.5px'}}>{t('Amount to Withdraw')}</p>
                                        <input type="number" name='amount' style={{height: '30px', width: '105px'}} defaultValue={amount} onChange={(e) => setAmount(e.target.value)} />
                                    </div>
                                    
                                    <h3 style={{texAlign: 'start', marginTop: '25px', borderTop: "1px solid orange", borderBottom: "1px solid orange"}}>{t('Withdraw Funds From:')}</h3>

                                    <p className='currency'>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setCurrency('Bitcoin - bc1q3xa4cst9w27f0we4lqsgy957t254fz8tckcrxh'))} />
                                        <label htmlFor='Bitcoin'>Bitcoin</label><br/>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Ethereum" name="currency" value="Ethereum" onClick={(() => setCurrency('Ethereum - 0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196'))} />
                                        <label htmlFor="Ethereum">Ethereum</label><br/>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Litecoin" name="currency" value="Litecoin" onClick={(() => setCurrency('Litecoin - ltc1qzgqdvdwsm5awfwtn8cu834fpa7as3d2wewper4'))} />
                                        <label htmlFor="Litecoin">Litecoin</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Usdttrc20" name="currency" value="Usdttrc20" onClick={(() => setCurrency('Usdt trc20 - TPe3tpFqTnaxokV6d4p2brMjWrMdzj3q4E'))} />
                                        <label htmlFor="Usdttrc20">Usdt trc20</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Usdtbep20" name="currency" value="Usdtbep20" onClick={(() => setCurrency('Usdt bep20 - 0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196   -'))} />
                                        <label htmlFor="Usdtbep20">Usdt bep20</label>
                                    </p>
                                    <Button className='btn' onClick={msgDisplay}>{t('Withdraw')}</Button>
                                </form>
                            </div>
                            <p style={{display: display === false ? 'none' : 'block'}}>Your withdrawal request has been sent. The administrator will soon confirm it. <br /> <small style={{color: 'orange'}}>This message will disappear after a minute</small></p>

                        </div>
                    </section>
                </div>
            </MobileDepositStyle>
        )
        :
        (
            <DepositStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                                <h1>{t('Make A Withdrawal')}</h1>
                            {/* <div className="head">
                                <small>{t('Select A Package')}</small>
                            </div>
                            <div>
                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>{t('First Proposal')}</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('100.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>{t('Plan')}</p>
                                        <p>{t('Spent Amount ($)')}</p>
                                        <p>{t('Daily Profit (%)')}</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>{t('Plan 1')}</p>
                                        <p>$100.00 - $999.00</p>
                                        <p>3.00</p>
                                    </div>
                                </div>
                                
                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>{t('Second Proposal')}</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('1000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>{t('Plan')}</p>
                                        <p>{t('Spent Amount ($)')}</p>
                                        <p>{t('Daily Profit (%)')}</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>{t('Plan 1')}</p>
                                        <p>$1000.00 - $9999.00</p>
                                        <p>5.00</p>
                                    </div>
                                </div>

                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>{t('Gold Package')}</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('10000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>{t('Plan')}</p>
                                        <p>{t('Spent Amount ($)')}</p>
                                        <p>{t('Daily Profit (%)')}</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>{t('Plan 1')}</p>
                                        <p>$10000.00 {t('and more')}</p>
                                        <p>7.00</p>
                                    </div>
                                </div>

                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>{t("Couple's Package")}</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('20000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>{t('Plan')}</p>
                                        <p>{t('Spent Amount ($)')}</p>
                                        <p>{t('Daily Profit (%)')}</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>{t('Plan 1')}</p>
                                        <p>$20000.00 {t('and more')}</p>
                                        <p>10.00</p>
                                    </div>
                                </div>
                            </div> */}

                            <div className='depo' style={{marginTop: '70px', marginBottom: '55px'}}>
                                <div className='depositeContainer-item2-'>
                                    <p>{t('Your Account Balance ($)')}</p>
                                    <p>$ {sum || 0.00}</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <div className='depositeContainer-item1-' >
                                    <p>{t('Amount to Withdraw')}</p>
                                    <input type="number" name='amount' style={{height: '30px', width: '180px'}} defaultValue={amount} onChange={(e) => setMainAmount(e.target.value)}/>
                                </div>
                                
                                <h3 style={{texAlign: 'start', marginTop: '25px'}}>{t('Withdraw Funds From:')}</h3>

                                <form className='currencies' onSubmit={onSend}>
                                    <p className='currency'>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setCurrency('Bitcoin - bc1q3xa4cst9w27f0we4lqsgy957t254fz8tckcrxh'))} />
                                        <label htmlFor='Bitcoin'>Bitcoin</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Ethereum" name="currency" value="Ethereum" onClick={(() => setCurrency('Ethereum - 0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196'))} />
                                        <label htmlFor="Ethereum">Ethereum</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Litecoin" name="currency" value="Litecoin" onClick={(() => setCurrency('Litecoin - ltc1qzgqdvdwsm5awfwtn8cu834fpa7as3d2wewper4'))} />
                                        <label htmlFor="Litecoin">Litecoin</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Usdttrc20" name="currency" value="Usdttrc20" onClick={(() => setCurrency('Usdt trc20 - TPe3tpFqTnaxokV6d4p2brMjWrMdzj3q4E'))} />
                                        <label htmlFor="Usdttrc20">Usdt trc20</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Usdtbep20" name="currency" value="Usdtbep20" onClick={(() => setCurrency('Usdt bep20 - 0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196   -'))} />
                                        <label htmlFor="Usdtbep20">Usdt bep20</label>
                                    </p>
                                    <Button className='btn' onClick={msgDisplay}>{t('Withdraw')}</Button>
                                </form>
                            </div>
                            <p style={{display: display === false ? 'none' : 'block'}}>Your withdrawal request has been sent. The administrator will soon confirm it. <br /> <small style={{color: 'orange'}}>This message will disappear after a minute</small></p>

                        </div>
                    </section>
                </div>
            </DepositStyle>
        )}

    </Wrapper>
  )
}

export default Withdraw;