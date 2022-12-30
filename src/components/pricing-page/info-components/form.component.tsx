import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
const Form = () => {
  return (
    <div className="pricing__info-form">
        <div className="pricing__info-form-header">
            <FontAwesomeIcon icon={faMessage} />
            <h2>Just <b>write me!</b></h2>
        </div>

            <form action="">
                <div className="pricing__info-form-field">
                    <label htmlFor="">Name:</label>
                    <input type="text" />
                </div>
                <div className="pricing__info-form-field">
                    <label htmlFor="">E-mail:</label>
                    <input type="text" />
                </div>
                <div className="pricing__info-form-field">
                    <label htmlFor="">Your Message:</label>
                    <textarea name="" id="" cols={35} rows={10}></textarea>
                </div>
                <button>Send</button>
            </form>
    </div>
  )
}

export default Form