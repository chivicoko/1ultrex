import React, { useEffect, useState } from 'react'
import Nav from './Nav';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout, reset } from '../features/auth/authSlice';


// import { useTranslation } from 'react-i18next';
// import i18next from 'i18next'

const Bar = () => {
    const [sideBarVisible, setSideBarVisible] = useState(false);
    // const { i18n, t } = useTranslation(["common"]);

    // useEffect(() => {
    //   if (localStorage.getItem("i18nextLng")?.length > 2) {
    //     i18next.changeLanguage('en');
    //   }
    // }, [])

    // const handleLanguageChange = (e) => {
    //     i18n.changeLanguage(e.target.value);
    // };

    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { user } = useSelector((state) => state.auth);

    // const onLogout = () => {
    //     dispatch(logout())
    //     dispatch(reset())
    //     navigate('/')
    // }

  return (
    <div className="body">
        <div className="side">
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Dashboard</h1>
            </div>
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Analytics</h1>
            </div>
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Orders</h1>
            </div>
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Edit Profile</h1>
            </div>
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Settings</h1>
            </div>
        </div>
        <div className="side">
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Dashboard</h1>
            </div>
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Analytics</h1>
            </div>
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Orders</h1>
            </div>
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Edit Profile</h1>
            </div>
            <div className={!sideBarVisible ? "page" : "page page-with-navbar"}>
                <h1>Settings</h1>
            </div>
        </div>
    </div>
  )
}

export default Bar;