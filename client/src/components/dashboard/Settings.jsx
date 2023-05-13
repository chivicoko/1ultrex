// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { FaTools } from 'react-icons/fa';
import Sidebar from './Sidebar';
// import { register, reset } from '../../features/auth/authSlice';
// import Spinner from '../../components/Spinner';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import { useEffect } from 'react';

const Settings = () => {
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])

    // const [formData, setFormData] = useState({
    //     fullName: '',
    //     username: '',
    //     email: '',
    //     phone: '',
    //     usdt: '',
    //     bnb: '',
    //     bsc: '',
    //     password: '',
    //     password2: '',
    // });

    // const { fullName, username, email, phone, usdt, bnb, bsc, password, password2 } = formData;

    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    // useEffect(() => {
    //     if (isError) {
    //         toast.error(message);
    //     }

    //     if (isSuccess || user) {
    //         navigate('/dashboard');
    //     }

    //     dispatch(reset());

    // }, [user, isError, isSuccess, message, navigate, dispatch]);

    // const onChange = (e) => {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }))
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
        
    //     if (password !== password2) {
    //         toast.error('Passwords do not match');
    //     } else {
    //         const userData = { fullName, username, email, phone, usdt, bnb, bsc, password, password2 }

    //         dispatch(register(userData));
    //     }
    // }

    // if (isLoading) {
    //     return <Spinner />
    // }

  return (
    <div className='settings-container'>
        <Sidebar />
        <div className='head'>
            <section className='heading' style={{marginTop: '25px'}}>
                <h1 style={{color: 'orange', fontSize: '40px'}}>
                    <FaTools /> {t('Settings')}
                </h1>
                <p>{t('Edit your account')}</p>
            </section>
            

            <section className='form' style={{marginTop: '30px'}}>
                <form onSubmit={''}>
                    <div className="form-group">
                        <input type="text" className="form-control" id='fullName' name='fullName' placeholder={t('Enter your full name')} onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='username' name='username' placeholder={t('Enter username')} onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id='email' name='email' placeholder={t('Enter your email')} onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='phone' name='phone' placeholder={t('Enter your phone number')} onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='usdt' name='usdt' placeholder={t('USDT(TRC20) Account ID')} onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='bnb' name='bnb' placeholder={t('BNB(Binance coin) BNB Account ID')} onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='bsc' name='bsc' placeholder={t('BNB(Binance coin) BSC Account ID')} onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password' name='password' placeholder={t('Enter password')} onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password2' name='password2' placeholder={t('Comfirm password')} onChange={''} />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>{t('Submit')}</button>
                    </div>
                </form>
            </section>
        </div>
    </div>
  )
}

export default Settings;