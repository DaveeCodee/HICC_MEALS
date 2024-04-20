import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  

  return (
  

    <form className='place-order'>

      <div className="place-order-left">
        <p className='title'>Delivery/Payment Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' required id="name" />
          <input type="text" placeholder='Last name' required />
        </div>
        <input type="email" placeholder='Email address'required id="email"/>
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' required/>
          <input type="text" placeholder='State' required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Card expiry date' required/>
          <input type="text" placeholder='Card security code' required/>
        </div>
        <input type="text" placeholder='Card number' required/>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit" className='proceed-payment' onClick={toggleModal}  >ORDER NOW</button>

          {modal && (
             <div className="modal">
             <div onClick={toggleModal}
              className="overlay"></div>
               <div className="modal-content">
               <h4>Your order has been sent and will be <br /> delivered in few minutes!</h4>
               <button
               className='close-modal'
               onClick={toggleModal}
               >Close</button>
               </div>
           </div>
          )}

         
        </div>
      </div>
    </form>
    
  )
}

export default PlaceOrder
