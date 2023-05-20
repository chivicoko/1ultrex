import { Link, useLocation } from 'react-router-dom';

const SingleUserDeposits = () => {
    const location = useLocation();

  return (
    <div style={{color: 'white'}}>
        <h2 style={{marginBottom: '5px'}}>Admin Dashboard</h2>
        <div>
            <div style={{textAlign: 'center', marginBottom: '30px'}}>
                <h3 style={{color: 'orange'}}>{location.state.userInfo.user.username}'s Deposits</h3>
            </div>
            {location.state.userInfo.deposits !== null ?
                <div>
                    {
                        location.state.userInfo.deposits.map((userDeposit) => {
                            return (
                                <div key={userDeposit._id} style={{border: '1px solid orange', borderRadius: '10px', marginBottom: '10px'}}>
                                    <div style={{marginBottom: '15px'}}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px', fontSize: '15px'}}>
                                            <small style={{color: 'orange'}}>Crypto Currency</small>
                                            <small>{userDeposit.cryptoCurrency}</small>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '15px'}}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px', fontSize: '15px'}}>
                                            <small style={{color: 'orange'}}>Amount Deposited</small>
                                            <small>${userDeposit.depositeAmount}</small>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '15px'}}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px', fontSize: '15px'}}>
                                            <small style={{color: 'orange'}}>Date Deposited</small>
                                            <small>{new Date(userDeposit.createdAt).toLocaleString('en-US')}</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                :
                <div>
                    <h1>There are no deposits yet</h1>
                </div>
            }
            
        </div>
        <Link to={'/dashboard'} style={{color: 'orange', textDecoration: 'underline'}}><p style={{marginTop: '50px'}}>Back</p></Link>
    </div>
  )
}

export default SingleUserDeposits;