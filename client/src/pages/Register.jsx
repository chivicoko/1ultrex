import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const Register = () => {
    const [userType, setUserType] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])

    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        usdt: '',
        bnb: '',
        bsc: '',
        password: '',
        password2: '',
    });

    const { fullName, username, email, phone, usdt, bnb, bsc, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/dashboard');
        }

        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (userType === 'Admin' && secretKey !== "0a2b58f8be0fe32b369fb39f74e31fd58c70e79de4a") {
        // if (userType === 'Admin' && secretKey !== process.env.REACT_APP_ULTREXGOLDINTL_ADMIN_SECRET_KEY) {
            alert('Invalid Admin');
        } else {
    
            if (password !== password2) {
                toast.error('Passwords do not match');
            } else {
                const userData = { fullName, username, email, phone, usdt, bnb, bsc, password, password2, userType }
    
                dispatch(register(userData));
            }

        }
    }

    if (isLoading) {
        return <Spinner />
    }

  return (
    <>
        <section className='heading'>
            <h1 style={{color: 'orange'}}>
                <FaUser /> {t('Register')}
            </h1>
            <p style={{marginBottom: '0'}}>{t('Please create an account')}</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 0', color: 'orange', border: '1px solid orange', borderRadius: '7px', padding: '5px 15px'}}>
                    <span style={{color: 'white'}}>Register as </span>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span><input type="radio" name="userType"value="User" onChange={(e) => setUserType(e.target.value)} /> User</span> &nbsp;&nbsp;&nbsp;
                        <span><input type="radio" name="userType"value="Admin" onChange={(e) => setUserType(e.target.value)} /> Admin</span>
                    </div>
                </div>
                {userType === 'Admin' ? 
                    <div className="form-group">
                        {/* <label htmlFor="secretKey">Secret Key</label> */}
                        <input type="text" className="form-control" id='secretKey' name='secretKey' placeholder={t('Enter admin secret key')} onChange={(e) => setSecretKey(e.target.value)} required/>
                    </div>
                : null}
                <div className="form-group">
                    <input type="text" className="form-control" id='fullName' name='fullName' placeholder={t('Enter your full name')} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id='username' name='username' placeholder={t('Enter username')} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id='email' name='email' placeholder={t('Enter your email')} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id='phone' name='phone' placeholder='Enter your phone number' onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id='usdt' name='usdt' placeholder={t('USDT(TRC20) Account ID')} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id='bnb' name='bnb' placeholder={t('BNB(Binance coin) BNB Account ID')} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id='bsc' name='bsc' placeholder={t('BNB(Binance coin) BSC Account ID')} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id='password' name='password' placeholder={t('Enter password')} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id='password2' name='password2' placeholder={t('Comfirm password')} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>{t('Submit')}</button>
                </div>
            </form>
            <small>{t('Signed Up?')} <Link to={'/login'}><span style={{color: 'orange'}}><em>{t('Log in')}</em></span></Link></small>
        </section>
    </>
  )
}

export default Register;