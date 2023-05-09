// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { FaTools } from 'react-icons/fa';
import Sidebar from './Sidebar';
// import { register, reset } from '../../features/auth/authSlice';
// import Spinner from '../../components/Spinner';

const Settings = () => {
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
                    <FaTools /> Settings
                </h1>
                <p>Edit your account</p>
            </section>
            

            <section className='form' style={{marginTop: '30px'}}>
                <form onSubmit={''}>
                    <div className="form-group">
                        <input type="text" className="form-control" id='fullName' name='fullName' placeholder='Enter your full name' onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='username' name='username' placeholder='Enter username' onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id='email' name='email' placeholder='Enter your email' onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='phone' name='phone' placeholder='Enter your phone number' onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='usdt' name='usdt' placeholder='USDT(TRC20) Account ID' onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='bnb' name='bnb' placeholder='BNB(Binance coin) BNB Account ID' onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id='bsc' name='bsc' placeholder='BNB(Binance coin) BSC Account ID' onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password' name='password' placeholder='Enter password' onChange={''} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password2' name='password2' placeholder='Comfirm password' onChange={''} />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    </div>
  )
}

export default Settings;