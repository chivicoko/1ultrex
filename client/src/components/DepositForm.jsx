import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDeposit } from '../features/deposits/depositSlice';

const DepositForm = () => {
    const [depositeAmount, setDepositeAmount] = useState('');
    const [cryptoCurrency, setCryptoCurrency] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createDeposit({depositeAmount}));
        setDepositeAmount('');
        
        dispatch(createDeposit({cryptoCurrency}));
        setCryptoCurrency('');
    }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <h2 style={{color: 'orange'}}>Invest</h2>
            <div className="form-group">
                <label htmlFor="text">Deposit Package</label>
                <input type="number" name="depositeAmount" id="depositeAmount" value={depositeAmount} onChange={(e) => setDepositeAmount(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="cryptoCurrency">Crypto Currency</label>
                <input type="text" name="cryptoCurrency" id="cryptoCurrency" value={cryptoCurrency} onChange={(e) => setCryptoCurrency(e.target.value)} />
            </div>

            <div className="form-group">
                <button className="btn btn-block" type="submit">Add Deposit</button>
            </div>
        </form>
    </section>
  )
}

export default DepositForm;
