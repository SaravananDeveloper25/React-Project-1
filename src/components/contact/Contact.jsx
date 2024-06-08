import React from 'react'
import './contact.css'
import img1 from '../../images/11668340_20945203.jpg';
function Contact() {
  return (
    <div style={{marginTop:'5rem'}}>
        <section className='contact-banner'>
            <h1>contact</h1>
            <div className="contactbox1">
                <img src={img1} alt="" />
                <div>
                    <h3>Contact</h3>
                    <p>phone</p>
                    <p>Whatsapp</p>
                </div>
            </div>
        </section>
        <section></section>
        <div className='getin-touch'>
            <h1>Getin with You</h1>
        </div>
    </div>

  )
}

export default Contact