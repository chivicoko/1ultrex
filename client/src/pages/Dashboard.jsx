import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import { getDeposits, reset } from "../features/deposits/depositSlice";
import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {
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
    <>
      <section>
        <h1>Welcome, {user && user.fullName}</h1>
        <p style={{color: 'orange'}}>This is your dashboard</p>
      </section>
      
      <Sidebar/>

      <section>
        <div className='userContainer'>
          <div className='userSection' style={{backgroundColor: 'grey', padding: '20px 15px', margin: '30px 5px', borderRadius: '15px'}}>
            <h1 style={{textAlign: 'center', marginTop: '10px', marginBottom: '25px', color: 'orange'}}>Your Account</h1>
            <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Username:</p><p>{user.username}</p></div>
            <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Registration Date:</p><p>Apr-18-2023</p></div>
            <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Last Access:</p><p>Apr-18-2023 04:26:20 PM </p></div>
            <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Account Balance:</p><p>$0.00</p></div>
            <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Earned Total:</p><p>$0.00</p></div>
            <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Pending Withdrawal:</p><p>$0.00</p></div>
            <div style={{marginBottom: '20px', display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Withdrew Total:</p><p>$0.00</p></div>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "start", fontSize: '12px'}}><p>Active Deposite:</p><p>$0.00</p></div>
        </div>

        </div>
      </section>
    </>
  )
}

export default Dashboard;