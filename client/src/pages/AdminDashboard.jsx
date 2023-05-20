import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
// import Button from '../components/styles/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteDeposit, getDeposits } from '../../features/deposits/depositSlice';
// import { deleteUser } from '../../../server/controllers/userController';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

const AdminDashboard = ({userData}) => {
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])

    const [users, setUsers] = useState([]);
    const [display, setDisplay] = useState('');

    const getUsers = async () => {
        const {data} = await axios.get("http://localhost:5000/api/users/allUsers");
        // console.log(data.users);
        setUsers(data.users);

    }

    const displayDetails = () => {
        setDisplay('block' || 'flex' ? 'none' : 'block');
    }

    // console.log(users[1]);
    useEffect(() => {

        getUsers();
    }, []);

    const navigate = useNavigate();
    const findUserDeposits = async (id, info) => {
        const {data} = await axios.get(`http://localhost:5000/api/users/findUserDeposits/${id}`);

        navigate('/single-user-deposits', {
            state: {
                userInfo: data
            }
        })
    }

    const deleteUser = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name} ?`)) {
            fetch(`http://localhost:5000/api/users/deleteUser`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    userId: id,
                })
            })
            .then((res) => res.json())
            .then((data) => {
                // alert(data.data);
                getUsers();
            });
        }
    }

  return (
    <div style={{color: 'white'}}>
        <h2 style={{marginBottom: '10px'}}>Admin Dashboard</h2>
        <div style={{}}>
            <div style={{textAlign: 'center', marginBottom: '30px'}}>
                <h3 style={{color: 'orange'}}>Users</h3>
            </div>
            <div>
                {
                    users.map(user => {
                        return (
                            <div key={user._id}>
                                <Link>
                                    <div style={{display: 'flex', justifyContent: 'space-between', margin: '5px 10px', color: 'orange'}} onClick={() => findUserDeposits(user._id)}>
                                        <p>{user.fullName}</p>
                                        <p>{user.userType}</p>
                                    </div>
                                </Link>
                                <hr />
                                <div style={{display: display, marginBottom: '25px', borderBottom: '1px solid orange', paddingBottom: '10px'}}>
                                    <div style={{display: 'flex' || display, justifyContent: 'space-between', margin: '10px', fontSize: '15px'}} onClick={displayDetails}>
                                        <small>Date Registered</small>
                                        <small>{new Date(user.createdAt).toLocaleString('en-US')}</small>
                                    </div>
                                    <div style={{display: 'flex' || display, justifyContent: 'space-between', margin: '10px', fontSize: '15px'}} onClick={displayDetails}>
                                        <small>Phone Number</small>
                                        <small>{user.phone}</small>
                                    </div>
                                    <div style={{display: 'flex' || display, justifyContent: 'space-between', margin: '10px', fontSize: '15px'}} onClick={displayDetails}>
                                        <small>Email</small>
                                        <small>{user.email}</small>
                                    </div>
                                    <div style={{display: 'flex' || display, justifyContent: 'space-between', margin: '10px', fontSize: '15px'}} onClick={displayDetails}>
                                        <small>Username</small>
                                        <small>{user.username}</small>
                                    </div>
                                    <button style={{backgroundColor: 'red'}} className='btn' onClick={() => deleteUser(user._id, user.username)}><FaTrashAlt/>Delete User</button>
                                    {/* <Button style={{padding: '10px 20px', fontSize: '12px', margin: '0', color: 'red', letterSpacing: '4px', backgroundColor: 'orange', border: '1px solid orange', marginTop: '10px', marginBottom: '0'}} onClick={() => dispatch(deleteDeposit(deposit._id))}>{t('Delete')}</Button> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <Link to={'/user-deposits'} style={{color: 'orange', marginTop: '20px', textDecoration: 'underline'}}>View All Deposits</Link>
        </div>
    </div>
  )
}

export default AdminDashboard;