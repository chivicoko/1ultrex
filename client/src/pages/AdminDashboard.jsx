import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [display, setDisplay] = useState('');

    const getUsers = async () => {
        const {data} = await axios.get("http://localhost:5000/api/users/allUsers");
        setUsers(data.users);
    }

    const displayDetails = () => {
        setDisplay('block' || 'flex' ? 'none' : 'block');
    }

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
                                <div style={{display: 'flex', justifyContent: 'space-between', margin: '5px 10px', color: 'orange', textDecoration: 'underline'}} onClick={() => findUserDeposits(user._id)}>
                                    <p>{user.fullName}</p>
                                    <p>{user.userType}</p>
                                </div>
                                {/* <hr /> */}
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
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <Link to={'/users-deposits'} style={{color: 'orange', marginTop: '20px', textDecoration: 'underline'}}>View All Deposits</Link>
        </div>
    </div>
  )
}

export default AdminDashboard;