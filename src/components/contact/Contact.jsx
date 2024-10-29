import React,{useEffect} from 'react'
import './contact.css'
import img1 from '../../images/11668340_20945203.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const handleOnChange = (value) => {
        console.log(value);
    };
    return (
        <div className='contact'>
           <div className="contact-banner">
            <h2>Contact Us</h2>
           </div>
           <Container>
           <div className='contact-forms'>
                <div className="contact-form">
                    <h2>Get in touch</h2>
                    <form action="">
                        <div className='form-inpt'>
                        <input type="text" />
                        <label htmlFor="">Name</label>
                        </div>
                        <div className='form-inpt'>
                        <input type="email" />
                        <label htmlFor="">Email</label>
                        </div>
                        <select name="" id="">
                            <option value="">services</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <label htmlFor="">message</label>
                        <textarea name="" id="" rows={5}></textarea>
                        <div>
                        <input type="checkbox" name="" id=""  style={{color:'transparent'}}/>
                        <label>I would like to receive the newsletter.</label>
                        </div>
                       <div className='form-button'>
                       <button>submit</button>
                       </div>
                        
                    </form>
                </div>
                <div className='contact-details'>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolores neque distinctio harum tenetur, quaerat praesentium cum dolorem consequatur similique est inventore. Laborum magni perspiciatis reiciendis labore vel provident eum!</p>
                    </div>
                    <div className='map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15756.025523648923!2d77.8528246!3d9.1538954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafc0deb432f728e7%3A0xab9157c9b333e21a!2sGetin%20Technologies%20Kovilpatti!5e0!3m2!1sen!2sin!4v1730114973527!5m2!1sen!2sin" width="400" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    </div>
                    <div className='address'>
                        <ul>
                            <li><LocationOnIcon></LocationOnIcon>NYC, United States</li>
                            <li><PhoneInTalkOutlinedIcon></PhoneInTalkOutlinedIcon>000111222333</li>
                            <li><EmailOutlinedIcon></EmailOutlinedIcon>somebody@gmail.com</li>
                        </ul>
                    </div>
                    <div className='social'>
                        <FacebookIcon></FacebookIcon>
                        <InstagramIcon></InstagramIcon>
                        <YouTubeIcon></YouTubeIcon>
                    </div>
                </div>
            </div>
           </Container>
  
        </div>

    )
}

export default Contact