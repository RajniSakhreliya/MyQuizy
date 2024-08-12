import './contactus.scss';
import React from "react";
import BackBar from "../Views/BackBar";
import contactUs from '../../assets/contactus.png'
import Margin from '../Views/Margin';

const ContactUs = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <div style={{ minHeight: height }} className='ContactUs'>

            <BackBar headingValue={"Contact US"} />

            <div style={{ padding: "15px" }}>
                <div style={{ margin: '10px' }}>
                    <img src={contactUs} alt="Contact Us" />
                </div>

                <div className='heading-left'>
                    <h2>Get in Touch with us</h2>
                </div>

                <div className='description'>Have a question? We’d love to hear from you! 🤗 Drop us a line and we’ll get back to you as soon as possible</div>

                <Margin />
                <div className='heading-left'>
                    <h2>Email Us : contact@example.com</h2>
                </div>
            </div>

        </div>
    )
}

export default ContactUs