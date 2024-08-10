import React from 'react'
import './common.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function ContactBanner() {
  return (
    <div className='contactBanner'>

        <div className='contactBannerbox1'>
        <p>For inquiries, feedback, or assistance,</p>
            <h1>reach out to Getin Technologies Support.</h1>
            <p>Unlock the best support experience with us - drop us a message like this!</p>
            <div className='contactBanner-line'></div>
        </div>
        <div className='contactBannerbox2'>
        <div className='contactBannerbox2-box'>
            <p>For Voice Call</p>
            <a href="tel:+" ><LocalPhoneIcon></LocalPhoneIcon> 00000012882</a>
          </div>
          <div className='contactBannerbox2-box'>
            <p >For Whatsapp Call & Chat</p>
            <a href="" ><WhatsAppIcon  className='whats'></WhatsAppIcon>00928735532</a>
          </div>

        </div>
  
    </div>
  )
}

export default ContactBanner