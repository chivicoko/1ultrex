import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AdminDashboard = ({userData}) => {
    const [users, setUsers] = useState([])
    const [display, setDisplay] = useState('')

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
                                <div style={{display: 'flex', justifyContent: 'space-between', margin: '5px 10px', color: 'orange'}}>
                                    <p>{user.fullName}</p>
                                    <p>{user.userType}</p>
                                </div>
                                <hr />
                                <div style={{display: display, marginBottom: '25px'}}>
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
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <Link to={'/userDeposits'} style={{color: 'orange', marginTop: '20px', textDecoration: 'underline'}}>View All Deposits</Link>
        </div>
    </div>
  )
}

export default AdminDashboard;