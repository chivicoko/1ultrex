import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../styles/HomeStyle';
import Sidebar from './Sidebar';
import { DepositStyle, MobileDepositStyle } from '../styles/DepositeStyle';
import Button from '../styles/Button';
import { useDispatch } from 'react-redux';
import { createDeposit } from '../../features/deposits/depositSlice';

const Deposit = () => {
    
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

    const [amount, setAmount] = useState('');
    const [mainAmount, setMainAmount] = useState('');
    const [currency, setCurrency] = useState('');
    
    const navigate = useNavigate();

    const openprofile = (amount, currency) => {
        navigate('/confirm-deposit', {
            state: {
                mainAmount: mainAmount,
                currency: currency
            }
        })
    }

    // console.log(amount, currency);

    // const [depositeAmount, setDepositeAmount] = useState('');
    // const [cryptoCurrency, setCryptoCurrency] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createDeposit({amount, currency}));
        setAmount('');
        
        // dispatch(createDeposit({currency}));
        setCurrency('');
    }

  return (
    <Wrapper>
        {isMobile ?
        (
            <MobileDepositStyle>
                    <Sidebar/>
                <div className='container'>
                    <section>
                            {/* <small>{location.state.saveDeposit ? location.state.saveDeposit : location.state.cancelDeposit}</small> */}
                        <div className='depositeContainer'>
                            <div>
                                <h1>Make A Deposit</h1>
                                <small>Select A Package</small>
                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>First Proposal</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('100.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>Plan</p>
                                        <p>Spent Amount ($)</p>
                                        <p>Daily Profit (%)</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>Plan 1</p>
                                        <p>$100.00 - $999.00</p>
                                        <p>3.00</p>
                                    </div>
                                </div>
                                
                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>Second Proposal</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('1000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>Plan</p>
                                        <p>Spent Amount ($)</p>
                                        <p>Daily Profit (%)</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>Plan 1</p>
                                        <p>$1000.00 - $9999.00</p>
                                        <p>5.00</p>
                                    </div>
                                </div>

                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>Gold Package</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('10000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>Plan</p>
                                        <p>Spent Amount ($)</p>
                                        <p>Daily Profit (%)</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>Plan 1</p>
                                        <p>$10000.00 and more</p>
                                        <p>7.00</p>
                                    </div>
                                </div>

                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>Couple's Package</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('20000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>Plan</p>
                                        <p>Spent Amount ($)</p>
                                        <p>Daily Profit (%)</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>Plan 1</p>
                                        <p>$20000.00 and more</p>
                                        <p>10.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className='depo' style={{marginTop: '70px', marginBottom: '55px'}}>
                                <div className='depositeContainer-item2-'>
                                    <p>Your Account Balance ($)</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <div className='depositeContainer-item1-' >
                                    <p>Amount to Spend</p>
                                    <input type="number" name='amount' style={{height: '30px', width: '105px'}} defaultValue={amount} onChange={(e) => setMainAmount(e.target.value)}/>
                                </div>
                                
                                <h3 style={{texAlign: 'start', marginTop: '25px'}}>Spend Funds From:</h3>

                                <form className='currencies' onSubmit={onSubmit}>
                                    <p className='currency'>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setCurrency('bc1q3xa4cst9w27f0we4lqsgy957t254fz8tckcrxh'))} />
                                        <label htmlFor='Bitcoin'>Bitcoin</label><br/>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Ethereum" name="currency" value="Ethereum" onClick={(() => setCurrency('0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196'))} />
                                        <label htmlFor="Ethereum">Ethereum</label><br/>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Litecoin" name="currency" value="Litecoin" onClick={(() => setCurrency('ltc1qzgqdvdwsm5awfwtn8cu834fpa7as3d2wewper4'))} />
                                        <label htmlFor="Litecoin">Litecoin</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Usdttrc20" name="currency" value="Usdttrc20" onClick={(() => setCurrency('TPe3tpFqTnaxokV6d4p2brMjWrMdzj3q4E'))} />
                                        <label htmlFor="Usdttrc20">Usdt trc20</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Usdtbep20" name="currency" value="Usdtbep20" onClick={(() => setCurrency('0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196   -'))} />
                                        <label htmlFor="Usdtbep20">Usdt bep20</label>
                                    </p>
                                    <Link to={'/confirm-deposit'} state={{amount: amount, currency: currency}}><Button className='btn' onClick={openprofile}>Spend</Button></Link>
                                </form>
                            </div>
                            

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
                            <div className="head">
                                <h1>Make A Deposit</h1>
                                <small>Select A Package</small>
                            </div>
                            <div>
                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>First Proposal</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('100.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>Plan</p>
                                        <p>Spent Amount ($)</p>
                                        <p>Daily Profit (%)</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>Plan 1</p>
                                        <p>$100.00 - $999.00</p>
                                        <p>3.00</p>
                                    </div>
                                </div>
                                
                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>Second Proposal</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('1000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>Plan</p>
                                        <p>Spent Amount ($)</p>
                                        <p>Daily Profit (%)</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>Plan 1</p>
                                        <p>$1000.00 - $9999.00</p>
                                        <p>5.00</p>
                                    </div>
                                </div>

                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>Gold Package</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('10000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>Plan</p>
                                        <p>Spent Amount ($)</p>
                                        <p>Daily Profit (%)</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>Plan 1</p>
                                        <p>$10000.00 and more</p>
                                        <p>7.00</p>
                                    </div>
                                </div>

                                <div className='depo'>
                                    <div className='depo-proposal' style={{color: 'white'}}>
                                        <h4 className='p'>Couple's Package</h4>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setAmount('20000.00'))} />
                                    </div>
                                    <div className='depositeContainer-item1'>
                                        <p>Plan</p>
                                        <p>Spent Amount ($)</p>
                                        <p>Daily Profit (%)</p>
                                    </div>
                                    <div className='depositeContainer-item2'>
                                        <p>Plan 1</p>
                                        <p>$20000.00 and more</p>
                                        <p>10.00</p>
                                    </div>
                                </div>
                            </div>

                            <div className='depo' style={{marginTop: '70px', marginBottom: '55px'}}>
                                <div className='depositeContainer-item2-'>
                                    <p>Your Account Balance ($)</p>
                                    <p>$0.00</p>
                                </div>
                            </div>
                            
                            <div className='depo'>
                                <div className='depositeContainer-item1-' >
                                    <p>Amount to Spend</p>
                                    <input type="number" name='amount' style={{height: '30px', width: '180px'}} defaultValue={amount} onChange={(e) => setMainAmount(e.target.value)}/>
                                </div>
                                
                                <h3 style={{texAlign: 'start', marginTop: '25px'}}>Spend Funds From:</h3>

                                <form className='currencies' onSubmit={onSubmit}>
                                    <p className='currency'>
                                        <input type="radio" id="Bitcoin" name="currency" value="Bitcoin" onClick={(() => setCurrency('bc1q3xa4cst9w27f0we4lqsgy957t254fz8tckcrxh'))} />
                                        <label htmlFor='Bitcoin'>Bitcoin</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Ethereum" name="currency" value="Ethereum" onClick={(() => setCurrency('0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196'))} />
                                        <label htmlFor="Ethereum">Ethereum</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Litecoin" name="currency" value="Litecoin" onClick={(() => setCurrency('ltc1qzgqdvdwsm5awfwtn8cu834fpa7as3d2wewper4'))} />
                                        <label htmlFor="Litecoin">Litecoin</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Usdttrc20" name="currency" value="Usdttrc20" onClick={(() => setCurrency('TPe3tpFqTnaxokV6d4p2brMjWrMdzj3q4E'))} />
                                        <label htmlFor="Usdttrc20">Usdt trc20</label>
                                    </p>
                                    <p className='currency'>
                                        <input type="radio" id="Usdtbep20" name="currency" value="Usdtbep20" onClick={(() => setCurrency('0xDEd35CcC8226d4BcBdD25DDA0473E7C965365196   -'))} />
                                        <label htmlFor="Usdtbep20">Usdt bep20</label>
                                    </p>
                                    <Link to={'/confirm-deposit'} state={{amount: amount, currency: currency}}><Button className='btn' onClick={openprofile}>Spend</Button></Link>
                                </form>
                            </div>
                            

                        </div>
                    </section>
                </div>
            </DepositStyle>
        )}

    </Wrapper>
  )
}

export default Deposit;