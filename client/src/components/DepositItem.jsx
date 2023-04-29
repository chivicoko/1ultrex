import { useDispatch } from "react-redux";
import { deleteDeposit } from '../features/deposits/depositSlice';

const DepositItem = ({deposit}) => {
    const dispatch = useDispatch();

  return (
    <div className="deposit">
        {/* <div>
            {new Date(deposit.createdAt).toLocaleString('en-US')}
        </div> */}
        <h2>{deposit.depositAmount}</h2>
        <h2>{deposit.cryptoCurrency}</h2>
        <h2>{deposit.pending}</h2>
        <button onClick={() => dispatch(deleteDeposit(deposit._id))} className="close">X</button>
    </div>
  )
}

export default DepositItem;