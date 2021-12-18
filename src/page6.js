import React from 'react'
import Image1 from './img1.png'
import Image2 from './facebook.png'
import Image3 from './instagram.png'
import Image4 from './twitter.png'

export default function page6() {
    return (
        <div className="page6">
            <div className="page6-img">
                <img src={Image1} alt="" />
            </div>
            <div className="page6-content">
                <div className="page6-content-title">Contact Us</div>
                <div className="page6-content-sub">
                    <div className="page6-content-sub-sub">
                    <div className="page6-content-sub1">
                        <form action="">
                            <input type="text" className='form-control' placeholder='Full Name' required/><br /><br />
                            <input type="email" className='form-control' name="email" placeholder='E-mail' required/><br /><br />
                            <textarea name="message" className='form-control' placeholder='Message' rows="3"></textarea><br />
                            <div className="submit-button">
                            <input type="submit" className='submit' /></div>
                        </form>
                    </div>
                    <div className="page6-content-sub2">
                        <div className="page6-content-sub2-1">
                            <h1>Contact</h1>
                            <h2>hi@domain.com</h2>
                        </div>
                        <div className="page6-content-sub2-2">
                            <h1>Based in</h1>
                            <h2>Delhi,</h2>
                            <h3>India</h3>
                        </div>
                        <div className="page6-content-sub2-3">
                            <div className="logo1"><img src={Image2} alt="" /></div>
                            <div className="logo2"><img src={Image3} alt="" /></div>
                            <div className="logo3"><img src={Image4} alt="" /></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
