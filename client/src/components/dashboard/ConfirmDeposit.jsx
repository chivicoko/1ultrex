import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import { ConfirmDepositStyle, MobileConfirmDepositStyle } from '../styles/ConfirmDepositStyle';
import Sidebar from './Sidebar';
import Button from '../styles/Button';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createDeposit } from '../../features/deposits/depositSlice';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const ConfirmDeposit = () => {
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

// for retrieving data sent from the deposit page
    const [depositAmount, setDepositAmount] = useState('');
    const [depositCurrency, setDepositCurrency] = useState('');
    const [depositCryptoCurrency, setDepositCryptoCurrency] = useState('');
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const location = useLocation();

    useEffect(() => {
        setDepositAmount(location.state.amount);
        setDepositCurrency(location.state.currency);
        
        switch (depositCurrency) {
            case 'bc1q3xa4cst9w27f0we4lqsgy957t254fz8tckcrxh':
            setDepositCryptoCurrency('Bitcoin');
            break;
        case '0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196':
            setDepositCryptoCurrency('Ethereum');
            break;
        case 'ltc1qzgqdvdwsm5awfwtn8cu834fpa7as3d2wewper4':
            setDepositCryptoCurrency('Litecoin');
            break;
        case 'TPe3tpFqTnaxokV6d4p2brMjWrMdzj3q4E':
            setDepositCryptoCurrency('Usdt trc20');
            break;
        case '0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196   -':
            setDepositCryptoCurrency('Usdt bep20');
            break;
        default:
            setDepositCryptoCurrency("The cryptocurrency is unknown");
            break;
        }
    }, [depositAmount, depositCurrency, depositCryptoCurrency, location.state.amount, location.state.currency, navigate]);

    const proposal = location.state.amount >= 100.00 && location.state.amount <= 999.00 ? 'First Proposal'
        : location.state.amount >= 1000.00 && location.state.amount <= 9999.00 ? 'Second Proposal'
        : location.state.amount >= 10000.00 && location.state.amount < 20000.00 ? 'Gold Package'
        : location.state.amount >= 20000.00 ? "Couple's Account" : '';

    const onClick = async (e) => {
        e.preventDefault();
// -------------
        const depositData = { depositAmount, depositCryptoCurrency };
        fetch('http://localhost:5000/api/deposits/', {
            method: "POST",
            headers: {"Content-Type": "application/JSON"},
            body: JSON.stringify(depositData)
        })
// ---------
        dispatch(createDeposit({depositAmount, depositCryptoCurrency}));
        setDepositAmount('');
        setDepositCryptoCurrency('');
        
        navigate('/deposit');
    }

  return (
    <Wrapper>
        {isMobile ?
        (
            <MobileConfirmDepositStyle>
                <Sidebar/>
                <div className='container'>
                    <section>
                        <div className='depositeContainer'>
                            <h1>{t('Please Confirm your deposit')}</h1>
                            <p className='p'>{t('Kindly copy the address below to make a deposit')}</p>
                            <div className='userSection'>
                                <div>
                                    <p>{t('Plan')}:</p>
                                    <p>{proposal}</p>
                                </div> <hr />
                                <div>
                                    <p>Profit:</p>
                                    <p>3.00% {t('daily for 5 days')}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Principal Return')}:</p>
                                    <p>{t('Yes')}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Principal Withdraw')}:</p>
                                    <p>{t('Not available')}</p>
                                </div> <hr />
                                <div>
                                    <p>{t("Credit Amount")}:</p>
                                    <p>${location.state.amount}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Deposit Fee')}:</p>
                                    <p>0.00% + $0.00 (min. $0.00 max. $0.00)</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Debit Amount')}:</p>
                                    <p>${location.state.amount}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Debit Amount')}:</p>
                                    <p>{location.state.amount}</p>
                                </div>
                            </div>
                            <p style={{marginTop: '20px', marginBottom: '20px' , color: 'orange'}}>
                                <span style={{color: 'white'}}>{t('Address')}:</span> <br />
                                <small style={{fontSize: '12px'}}>{location.state.currency}</small>
                            </p>
                            <small>{t("Click 'save' to save deposit. You'll receive an email of confirmation soon.")}</small>
                            <div className='saveCancel'>
                                <Link><Button className='btn' onClick={onClick}>{t('Save')}</Button></Link>
                                <Link to={'/deposit'}><Button primary className='btn'>{t('Cancel')}</Button></Link>
                            </div>
                        </div>
                    </section>
                </div>
            </MobileConfirmDepositStyle>
        )
        :
        (
            <ConfirmDepositStyle>
                <Sidebar/>
                <div className='container'>
                <section>
                        <div className='depositeContainer'>
                            <h1>{t('Please Confirm your deposit')}</h1>
                            <p className='p'>{t('Kindly copy the address below to make a deposit')}</p>
                            <div className='userSection'>
                                <div>
                                    <p>{t('Plan')}:</p>
                                    <p>{proposal}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Profit')}:</p>
                                    <p>3.00% {t('daily for 5 days')}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Principal Return')}:</p>
                                    <p>{t('Yes')}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Principal Withdraw')}:</p>
                                    <p>{t('Not available')}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Credit Amount')}:</p>
                                    <p>${location.state.amount}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Deposit Fee')}:</p>
                                    <p>0.00% + $0.00 (min. $0.00 max. $0.00)</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Debit Amount')}:</p>
                                    <p>${location.state.amount}</p>
                                </div> <hr />
                                <div>
                                    <p>{t('Debit Amount')}:</p>
                                    <p>{location.state.amount}</p>
                                </div>
                            </div>
                            <p style={{marginTop: '20px', marginBottom: '20px' , color: 'orange'}}>
                                <span style={{color: 'white'}}>{t('Address')}:</span> <br />
                                <small style={{fontSize: '12px'}}>{location.state.currency}</small>
                            </p>
                            <small>{t("Click 'save' to save deposit. You'll receive an email of confirmation soon.")}</small>
                            <div className='saveCancel'>
                                <Link><Button className='btn' onClick={onClick}>{t('Save')}</Button></Link>
                                <Link to={'/deposit'}><Button primary className='btn'>{t('Cancel')}</Button></Link>
                            </div>
                        </div>
                    </section>
                </div>
            </ConfirmDepositStyle>
        )}

    </Wrapper>
  )
}

export default ConfirmDeposit;