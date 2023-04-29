import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/HomeStyle';
import { MobileSidebarStyle, SidebarStyle } from '../styles/SidebarStyle';
import { LogOut , Settings, User, Edit, Edit3, DollarSign, Database, Award, Tool } from "react-feather";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
        setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 640;

  return (
    <Wrapper>
        {isMobile ?
            (
                <MobileSidebarStyle>
                    <div className='container'>
                        
                        <div className='container1'><Link style={{textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/user'}>Account</Link></div>
                        <div className='container1'><Link style={{textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/deposit'}>Invest Now</Link></div>
                        <div className='container1'><Link style={{textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/my-investment'}>My Investments</Link></div>
                        <div className='container1'><Link style={{textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/promo'}>Promo Tools</Link></div>
                        <div className='container1'><Link style={{textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/my-earning'}>Withdraw Earnings</Link></div>
                        <div className='container1'><Link style={{textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/referrals'}>My Referrals</Link></div>
                        <div className='container1'><Link style={{textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} to={'/settings'}>Settings</Link></div>
                        <div className='container1'><Link style={{textDecoration: 'none', color: 'black', display: 'table-cell', verticalAlign: 'middle'}} onClick={''}>Logout</Link></div>
                    </div>
                </MobileSidebarStyle>
            )
            :
            (
                <SidebarStyle>
                    <div className='container'>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/user'}>
                                <span className='icon'>
                                    <User size={16} />
                                </span>
                                &nbsp;&nbsp; ACCOUNT
                            </Link>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/deposit'}>
                                <span className='icon'>
                                    <DollarSign size={16} />
                                </span>
                                &nbsp;&nbsp; INVEST NOW
                            </Link>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/my-investment'}>
                                <span className='icon'>
                                    <Database size={16} />
                                </span>
                                &nbsp;&nbsp; MY INVESTMENTS
                            </Link>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/promo'}>
                                <span className='icon'>
                                    <Tool size={16} />
                                </span>
                                &nbsp;&nbsp; PROMO TOOLS
                            </Link>
                        </div>
                        <div className='container1'>
                            <p className='pa'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/my-earning'}>
                                <span className='icon'>
                                    <Award size={16} />
                                </span>
                                &nbsp;&nbsp; WITHDRAW EARNINGS
                            </Link>
                            </p>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/referrals'}>
                                <span className='icon'>
                                    <Edit3 size={16} />
                                </span>
                                &nbsp;&nbsp; MY REFERRALS
                            </Link>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/edit-profile'}>
                                <span className='icon'>
                                    <Edit size={16} />
                                </span>
                                &nbsp;&nbsp; EDIT PROFILE
                            </Link>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/settings'}>
                                <span className='icon'>
                                    <Settings size={16} />
                                </span>
                                &nbsp;&nbsp; SETTINGS
                            </Link>
                        </div>
                        <div className='container1'>
                            <Link style={{textDecoration: 'none', color: 'black'}} to={'/ultrexgoldintl'}>
                                <span className='icon'>
                                    <LogOut size={16} />
                                </span>
                                &nbsp;&nbsp; LOGOUT
                            </Link>
                        </div>
                    </div>
                </SidebarStyle>
            )}
    </Wrapper>
  )
}

export default Sidebar;