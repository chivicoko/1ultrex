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
        e.preventDefault();
        
        if (password !== password2) {
            toast.error('Passwords do not match');
        } else {
            const userData = { fullName, username, email, phone, usdt, bnb, bsc, password, password2 }

            dispatch(register(userData));
        }
    }

    if (isLoading) {
        return <Spinner />
    }

  return (
    <>
        <section className='heading'>
            <h1>
                <FaUser /> {t('Register')}
            </h1>
            <p>{t('Please create an account')}</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
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