import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CartActions from '../../APIController/action-creators/cart.action-creators'
import * as ServerActions from '../../APIController/action-creators/server.action-creators'
import { State } from '../../APIController/reducers/root.reducer'
import { CartItem } from '../../APIController/interfaces'


const Summary = () => {

  const dispatch = useDispatch()
  const cartActions = bindActionCreators(CartActions,dispatch)
  const serverActions = bindActionCreators(ServerActions,dispatch)
  const { cart } = useSelector((state:State) => state.cart)

  const [result,setResult] = useState<number>(0)

  const handleResult = () =>{
    if(cart?.length > 0){
        const result = cart.reduce((a:CartItem,b:CartItem) => (a.quantity * a.price) + (b.quantity * b.price));
        setResult(result)
    }
  }

  useEffect(()=>{
    handleResult()
  },[cart])

  return (
    <div className='cart__summary'>
        <div className="cart__summary-content">
            <div className="cart__summary-result">
                <h3>Your Summary</h3>
                <h3>${result}</h3>
            </div>
            <button onClick={()=>serverActions.handleCheckout(cart)}>Proceed To Checkout</button>
        </div>
    </div>
  )
}

export default Summary
