import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import { getDeposits, reset } from "../features/deposits/depositSlice";
import Sidebar from "../components/dashboard/Sidebar";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const Dashboard = () => {
  const { t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage('en');
    }
  }, [])

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { deposits, isLoading, isError, message } = useSelector((state) => state.deposits);
  console.log(deposits);

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
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='settings-container'>
      <Sidebar/>
      <div className='head' style={{color: 'white'}}>
        <section>
          <h1 style={{color: 'orange'}}>{t('Welcome')}, {user && user.fullName}</h1>
          <p>This is your dashboard</p>
        </section>
        

        <section>
          <div className='userContainer'>
            <div className='userSection' style={{backgroundColor: 'grey', padding: '25px', fontSize: '15px', margin: '30px 5px', borderRadius: '15px'}}>
              {/* <h1 style={{textAlign: 'center', marginTop: '10px', marginBottom: '25px', color: 'orange'}}>Your Account</h1> */}
              <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start"}}><p>Username:</p><p>{user.username}</p></div>
              <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start"}}><p>Registration Date:</p><p>Apr-18-2023</p></div>
              <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start"}}><p>Last Access:</p><p>Apr-18-2023 04:26:20 PM </p></div>
              <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start"}}><p>Account Balance:</p><p>$0.00</p></div>
              <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start"}}><p>Earned Total:</p><p>$0.00</p></div>
              <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start"}}><p>Pending Withdrawal:</p><p>$0.00</p></div>
              <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start"}}><p>Withdrew Total:</p><p>$0.00</p></div>
              <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Active Deposite:</p><p>$0.00</p></div>
          </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard;