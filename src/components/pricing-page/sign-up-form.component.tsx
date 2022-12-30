import React from 'react'

const SignUpForm = () => {
  return (
    <div className="pricing__sing-up-form">
        <button>Login via Facebook</button>
        <p>or fill the form</p>
        <form action="">
         <div className="pricing__sing-up-form-field">
           <label htmlFor="">Name:</label>
           <input type="text" />
         </div>
         <div className="pricing__sing-up-form-field">
           <label htmlFor="">E-mail:</label>
           <input type="text" />
         </div>
         <div className="pricing__sing-up-form-field">
           <label htmlFor="">Password:</label>
           <input type="text" />
         </div>
         <div className="pricing__sing-up-form-field">
           <label htmlFor="">Password again:</label>
           <input type="text" />
         </div>
         <div className="pricing__sing-up-form-field">
           <label htmlFor="">Coupon:</label>
           <input type="text" />
         </div>
         <div className="pricing__sing-up-form-field-checkbox">
           <input type="checkbox" name="" id="" />
           <label htmlFor="">I agree with Privacy Policy</label>
         </div>
         <div className="pricing__sing-up-form-field-checkbox">
           <input type="checkbox" name="" id="" />
           <label htmlFor="">I want to receive special offers by email (max. one per month)</label>
         </div>
         <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm
