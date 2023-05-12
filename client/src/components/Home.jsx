import React, { useEffect, useState } from 'react'
import Button from './styles/Button';
import { MobileHomeStyle, HomeStyle, Wrapper } from './styles/HomeStyle';
import group10 from '../assets/Group-10.png';
import group11 from '../assets/Group-11.png';
import ReactPlayer from 'react-player';
import ultrexVid from '../assets/UltrexGoldVid.mp4';
import EthImg from '../assets/Ethereum-removebg.png';
import LiteImg from '../assets/litecoin.png';
import TetherImg from '../assets/Tether.png';
import USDCoinImg from '../assets/USD-coin.png';
import BitcoinImg from '../assets/Bitcoin-removebg.png';
import { Link } from 'react-router-dom';

const Home = () => {

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
                <MobileHomeStyle>
                    {/* container of the home page */}
                    <div className='container'>
                        {/* welcome section */}
                        <h1 className='welcome-h1'>Welcome to ultrex<span style={{color: 'orange'}}>gold</span></h1>
                        <h2 className='welcome-h2'>Invest your way towards Success</h2>
                        <p className='welcome-p'>ultrex<span style={{color: 'orange'}}>gold</span> Intl. deals on stock, bonds, shares, assets management and foreign exchange. They also sell out preferred shares to public, companies and individuals which allows them earn dividends according to the proposal you choose.</p>

                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '15px'}}>
                            <Link to={'/login'}><Button className='btn' primary>Sign In</Button></Link>
                            <Link to={'/register'}><Button className='btn'>Sign Up</Button></Link>
                        </div>
                        
                        {/* 'We do ...' Ascertion Section */}
                        <div className='we-section'>
                            <div className='div-1'>
                                <div className='div-1-1'>
                                    <p className='div-1-p-1'>Registered</p>
                                </div>
                                <p className='div-1-p-2'>We are</p>
                                <h3 style={{color: 'orange'}} className='div-1-p-3'>Registered Company</h3>
                                <p className='pp'>ultrexgold is a canadian registered company located in Canada.</p>
                            </div>
                            <div className='div-1'>
                                <div className='div-1-1'>
                                    <p className='div-1-p-1'>Pay Online</p>
                                </div>
                                <p className='div-1-p-2'>We have</p>
                                <h3 style={{color: 'orange'}} className='div-1-p-3'>Instant Payments</h3>
                                <p className='pp'>ultrexgold offers swift and secure withdrawal system</p>
                            </div>
                            <div className='div-1'>
                                <div className='div-1-1'>
                                    <p className='div-1-p-1'>Deposits</p>
                                </div>
                                <p className='div-1-p-2'>Best Deal</p>
                                <h3 style={{color: 'orange'}} className='div-1-p-3'>Interest on Deposits</h3>
                                <p className='pp'>We offer exceptional, superb and satisfactory returns on investment in each proposal.</p>
                            </div>
                            <div className='div-1'>
                                <div className='div-1-1'>
                                    <p className='div-1-p-1'>Secured</p>
                                </div>
                                <p className='div-1-p-2'>Advanced</p>
                                <h3 style={{color: 'orange'}} className='div-1-p-3'>DDOS Protection</h3>
                                <p className='pp'>We have best security tools like SSL and DDOS Protection in place to keep the funds of users secure</p>
                            </div>
                        </div>
                        
                        {/* Gold Images */}
                        <div className='imgSpancontainer'>
                            <img className='img1' src={group10} alt="Gold 1" />
                            <img className='img2' src={group11} alt="Gold 2" />
                        </div>
                        
                        <Link to={'/deposit'}><Button className='btn' style={{marginLeft: '105px'}}>Buy Now</Button></Link>
                        
                        <div className='ourAct'>
                            <h2>Our Activity</h2>
                            <p>
                                ultrex<span style={{color: 'orange'}}>gold</span> offers investors opportunity to become our preferred share holder and earn daily dividends through our first and second proposal,we also allow investors buy gold from us and can also invest in our gold package as this will allow the investors own a physical gold too by giving them gold equivalent to how much they have earned specifically when they invest in our gold package, and have it delivered to them.We ensure the safety and secure transportation of gold by partnering with the trusted and the international logistics leaders in the industry.our long-term partnership with G4S,transguard and brinks to ensure the safest, and fastest delivery of gold as well as eliminating any challenges pertaining to logistics.
                            </p>
                        </div>
                        
                        <div className='about'>
                            <h2>About Us</h2>
                            <div className='video'>
                                <ReactPlayer width={'100%'} url={ultrexVid} controls={true} />
                            </div>
                            <p>
                                ultrex<span style={{color: 'orange'}}>gold</span> is a leading asset management and gold trading company based in Canada, we develop,operate, maintain and sell assets in a cost-effective manner,and also trade on gold.ultrex<span style={{color: 'orange'}}>gold</span> team has an average experience of over 13years in stock market and assets management and 5years in Gold trading.they are supported by a global team of asset, investment management and finance professionals. ultrex<span style={{color: 'orange'}}>gold</span> bring to the understanding of their investors that Stocks traded on the stock market are equities where stockholders own a small or large portion of the company whose stocks they trade. Gold are commodities. Investors either hold a physical gold product or make money from the difference in the buy and sell price of the gold when the demand for the gold increases and spot prices rise.The stock and gold markets exist and function independently of each other. Historically, Gold markets move in the opposite direction of the stock market. This correlation gives investors a viable option should the stock market crash. Gold may also produce impressive short-term investment returns as well during periods of ultra-low interest rates, as low rates make the opportunity cost of holding Gold less.
                            </p>
                        </div>
                        
                        <Button primary className='btn' style={{marginLeft: '105px'}}>Discover More</Button>
                        
                        <div className='plans'>
                            <h2 className='plansH2-1'>Our Plans</h2>                
                            <div className='planSection'>
                                <div className='col col1'>
                                    <h2>3%</h2>
                                    <h4>Daily for 5 days</h4>
                                    <p>
                                        <strong>
                                            Minimum $100
                                            <br/><br/>
                                                Maximum $999
                                        </strong>
                                    </p>
                                    <Link to={'/deposit'}><Button primary className='btn'  style={{backgroundColor: 'orange', marginLeft: '75px', border: '2px solid rgb(36, 35, 35)', color: 'rgb(36, 35, 35)'}}>Invest Now</Button></Link>
                                </div>
                                <div className='col col2'>
                                    <h2>5%</h2>
                                    <h4>Daily for 5 days</h4>
                                    <p>
                                        <strong>
                                            Minimum $1,000
                                            <br/><br/>
                                                Maximum $9,999
                                        </strong>
                                    </p>
                                    <Link to={'/deposit'}><Button primary className='btn'  style={{backgroundColor: 'orange', marginLeft: '75px', border: '2px solid rgb(36, 35, 35)', color: 'rgb(36, 35, 35)'}}>Invest Now</Button></Link>
                                </div>
                                <div className='col col3'>
                                    <h2>7%</h2>
                                    <h4>Daily for 5 days</h4>
                                    <p>
                                        <strong>
                                            Minimum $10,000
                                            <br/> <br/>
                                                Maximum $100,000
                                        </strong>
                                    </p>
                                    <Link to={'/deposit'}><Button primary className='btn'  style={{backgroundColor: 'orange', marginLeft: '75px', border: '2px solid rgb(36, 35, 35)', color: 'rgb(36, 35, 35)'}}>Invest Now</Button></Link>
                                </div>
                            </div>
                        </div>

                        <h3 className='planBtn'>Refer a friend and earn Affiliate Commission</h3>

                        <Link to={'/deposit'}><Button primary className='btn' style={{marginLeft: '105px'}}>Get Started</Button></Link>
                        
                        <div className='coin-section'>
                            <h2>Payment Methods</h2> <br/>
                            <div className='coin-div'>
                                <div className='coin'>
                                    <img src={BitcoinImg} alt="" style={{width: '40px'}} />
                                    <p>Bitcoin</p>
                                </div>
                                <div className='coin'>
                                    <img src={EthImg} alt="" style={{width: '80px'}} />
                                    <p>Ethereum</p>
                                </div>
                                <div className='coin'>
                                    <img src={LiteImg} alt="" />
                                    <p>Litecoin</p>
                                </div>
                                <div className='coin'>
                                    <img src={TetherImg} alt="" />
                                    <p>Tether</p>
                                </div>
                                <div className='coin'>
                                    <img src={USDCoinImg} alt="" />
                                    <p>USD Coin</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </MobileHomeStyle>
            ) : (
                <HomeStyle>
                    {/* container of the home page */}
                    <div className='container'>
                        {/* welcome section */}
                        <h1 className='welcome-h1'>Welcome to ultrex<span style={{color: 'orange'}}>gold</span></h1>
                        <h2 className='welcome-h2'>Invest your way towards Success</h2>
                        <p className='welcome-p'>ultrex<span style={{color: 'orange'}}>gold</span> Intl. deals on stock, bonds, shares, assets management and foreign exchange. They also sell out preferred shares to public, companies and individuals which allows them earn dividends according to the proposal you choose.</p>

                        <Link to={'/login'}><Button  style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '40px', fontSize: '25px'}} primary>Sign In</Button></Link>
                        <Link to={'/register'}><Button  style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '40px', paddingRight: '40px', borderRadius: '40px', fontSize: '25px'}}>Sign Up</Button></Link>

                        {/* 'We do ...' Ascertion Section */}
                        <div className='we-section'>
                            <div className='div-1'>
                                <div className='div-1-1'>
                                    <p className='div-1-p-1'>Registered</p>
                                </div>
                                <p className='div-1-p-2'>We are</p>
                                <h3 style={{color: 'orange'}} className='div-1-p-3'>Registered Company</h3>
                                <p className='pp'>ultrex<span style={{color: 'orange'}}>gold</span> is a canadian registered company</p>
                            </div>
                            <div className='div-1'>
                                <div className='div-1-1'>
                                    <p className='div-1-p-1'>Pay Online</p>
                                </div>
                                <p className='div-1-p-2'>We have</p>
                                <h3 style={{color: 'orange'}} className='div-1-p-3'>Instant Payments</h3>
                                <p className='pp'>ultrex<span style={{color: 'orange'}}>gold</span> offers swift and secure withdrawal system</p>
                            </div>
                            <div className='div-1'>
                                <div className='div-1-1'>
                                    <p className='div-1-p-1'>Deposits</p>
                                </div>
                                <p className='div-1-p-2'>Best Deal</p>
                                <h3 style={{color: 'orange'}} className='div-1-p-3'>Interest on Deposits</h3>
                                <p className='pp'>We offer exceptional, superb and satisfactory returns</p>
                            </div>
                            <div className='div-1'>
                                <div className='div-1-1'>
                                    <p className='div-1-p-1'>Secured</p>
                                </div>
                                <p className='div-1-p-2'>Advanced</p>
                                <h3 style={{color: 'orange'}} className='div-1-p-3'>DDOS Protection</h3>
                                <p className='pp'>We have best security tools like SSL and DDOS Protection in place</p>
                            </div>
                        </div>

                        {/* Gold Images */}
                        <div className='imgSpancontainer'>
                            <span className='imgSpan1'>
                                <img src={group10} alt="Gold 1" />
                            </span>
                            <span className='imgSpan2'>
                                <img src={group11} alt="Gold 2" />
                            </span>
                        </div>

                        <Link to={'/deposit'}><Button className='buyGoldBtn'  style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '90px', paddingRight: '90px', borderRadius: '40px', fontSize: '25px'}}>Buy Now</Button></Link>

                        <div className='ourAct'>
                            <h2>Our Activity</h2>
                            <p>
                            ultrex<span style={{color: 'orange'}}>gold</span> offers investors opportunity to become our preferred share holder and earn daily dividends through our first and second proposal,we also allow investors buy gold from us and can also invest in our gold package as this will allow the investors own a physical gold too by giving them gold equivalent to how much they have earned specifically when they invest in our gold package, and have it delivered to them. We ensure the safety and secure transportation of gold by partnering with the trusted and the international logistics leaders in the industry.our long-term partnership with G4S, transguard and brinks to ensure the safest, and fastest delivery of gold as well as eliminating any challenges pertaining to logistics.
                            </p>
                        </div>

                        <div className='about'>
                            <h2>About Us</h2>
                            <div className='video'>
                                <ReactPlayer width={'100%'} url={ultrexVid} controls={true} />
                            </div>
                            <p>
                                ultrex<span style={{color: 'orange'}}>gold</span>   
                                we develop, operate, maintain and sell assets in a cost-effective manner, and also trade on gold. UltrexGold team has an average 
                                experience of over 13years in stock market and assets management and 5years in Gold trading.they are supported by a global team of asset, 
                                investment management and finance professionals. ultrex<span style={{color: 'orange'}}>gold</span> bring to the understanding of their investors that Stocks traded on the stock 
                                market are equities where stockholders own a small or large portion of the company whose stocks they trade. Gold are commodities. 
                                Investors either hold a physical gold product or make money from the difference in the buy and sell price of the gold when the demand for 
                                the gold increases and spot prices rise.The stock and gold markets exist and function independently of each other. Historically, Gold 
                                markets move in the opposite direction of the stock market. This correlation gives investors a viable option should the stock market crash.
                                Gold may also produce impressive short-term investment returns as well during periods of ultra-low interest rates, as low rates make the
                                opportunity cost of holding Gold less.
                            </p>
                        </div>
                        
                        <Button primary className='buyGoldBtn'  style={{paddingTop: '20px', paddingBottom: '20px', marginBottom: '50px', paddingLeft: '90px', paddingRight: '90px', borderRadius: '40px', fontSize: '25px'}}>Discover More</Button>

                        <div className='plans'>
                            <h2 className='plansH2-1'>Our Plans</h2>                
                            <div className='planSection'>
                                <div className='col col1'>
                                    <h2>3%</h2>
                                    <h4>Daily for 5 days</h4>
                                    <p>
                                        <strong>
                                            Minimum $100
                                            <br/><br/>
                                                Maximum $999
                                        </strong>
                                    </p>
                                    <Link to={'/deposit'}><Button primary className='buyGoldBtn'  style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '45px', paddingRight: '45px', marginTop: '30px', borderRadius: '40px', fontSize: '20px', backgroundColor: 'orange', border: '2px solid rgb(36, 35, 35)', color: 'rgb(36, 35, 35)'}}>Invest Now</Button></Link>
                                </div>
                                <div className='col col2'>
                                    <h2>5%</h2>
                                    <h4>Daily for 5 days</h4>
                                    <p>
                                        <strong>
                                            Minimum $1,000
                                            <br/><br/>
                                                Maximum $9,999
                                        </strong>
                                    </p>
                                    <Link to={'/deposit'}><Button primary className='buyGoldBtn'  style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '45px', paddingRight: '45px', marginTop: '30px', borderRadius: '40px', fontSize: '20px',  backgroundColor: 'orange', border: '2px solid rgb(36, 35, 35)', color: 'rgb(36, 35, 35)'}}>Invest Now</Button></Link>
                                </div>
                                <div className='col col3'>
                                    <h2>7%</h2>
                                    <h4>Daily for 5 days</h4>
                                    <p>
                                        <strong>
                                            Minimum $10,000
                                            <br/> <br/>
                                                Maximum $100,000
                                        </strong>
                                    </p>
                                    <Link to={'/deposit'}><Button primary className='buyGoldBtn'  style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '45px', paddingRight: '45px', marginTop: '30px', borderRadius: '40px', fontSize: '20px',  backgroundColor: 'orange', border: '2px solid rgb(36, 35, 35)', color: 'rgb(36, 35, 35)'}}>Invest Now</Button></Link>
                                </div>
                            </div>
                        </div>

                        <h3 style={{wordSpacing: '10px', letterSpacing: '4px', fontWeight: '400', marginBottom: '0'}}>Refer a friend and earn Affiliate Commission</h3>

                        <Link to={'/deposit'}><Button primary className='buyGoldBtn'  style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '90px', paddingRight: '90px', marginBottom: '90px', borderRadius: '40px', fontSize: '25px'}}>Get Started</Button></Link>

                        <div className='coin-section'>
                            <h2>Payment Methods</h2> <br/>
                            <div className='coin-div'>
                                <div className='coin'>
                                    <img src={BitcoinImg} alt="" style={{width: '50px'}} />
                                    <p>Bitcoin</p>
                                </div>
                                <div className='coin'>
                                    <img src={EthImg} alt="" style={{width: '100px'}} />
                                    <p>Ethereum</p>
                                </div>
                                <div className='coin'>
                                    <img src={LiteImg} alt="" style={{width: '55px'}} />
                                    <p>Litecoin</p>
                                </div>
                                <div className='coin'>
                                    <img src={TetherImg} alt="" style={{width: '55px'}} />
                                    <p>Tether</p>
                                </div>
                                <div className='coin'>
                                    <img src={USDCoinImg} alt="" style={{width: '55px'}} />
                                    <p>USD Coin</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </HomeStyle>
            )}
    </Wrapper>
  );
}

export default Home;