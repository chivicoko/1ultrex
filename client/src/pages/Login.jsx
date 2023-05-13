import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const Login = () => {
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

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
        
        const userData = { email, password }

        dispatch(login(userData));
    }
    
    if (isLoading) {
        return <Spinner />
    }

  return (
    <>
        <section className='heading'>
            <h1>
                <FaSignInAlt /> {t('Sign in')}
            </h1>
            <p>{t('Login and start setting deposits')}</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control" id='email' name='email' placeholder={t('Enter your email')} onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id='password' name='password' placeholder={t('Enter password')} onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>{t('Submit')}</button>
                </div>
            </form>
            <small>{t('Not registered?')} <Link to={'/register'}><span style={{color: 'orange'}}><em>{t('Sign Up')}</em></span></Link></small>
        </section>
    </>
  )
}

export default Login;