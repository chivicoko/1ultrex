
const Footer = () => {
  
  return (
    <footer className='footer'>
        <div className='foot'>            
            <div className='h'>
                <h1><span style={{color: 'white'}}>U</span><span style={{color: 'orange'}}>G</span></h1>
                <h2><span style={{color: 'white'}}>Ultrex</span><span style={{color: 'orange'}}>Gold</span></h2>
                <p className='footer-p'>
                    Choose Us, choose your future. Please read carefully and understand who we are and what we provide. It could be your chance; it could be time to change something in your financial life.
                </p>
            </div>
            <h1 className='cta'>Contact Us</h1>
            <div className='footTabs'>
                <div className='footItem'>
                    <h2>Address</h2>
                    <p>British Columbia</p>
                    <p>Vancouver</p>
                    <p>Canada</p>
                </div>
                <div className='footItem'>
                    <h2>Support E-mail</h2>
                    <p>ultrexgoldinternational878@gmail.com</p>
                </div>
                <div className='footItem'>
                    <h2>Call Us</h2>
                    <p>VIP Only</p>
                </div>
            </div>
            <p className='copyright'>Copyright &copy; <span style={{color: 'orange'}}>ultrexgold.com</span> 2023 <br />All Rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;