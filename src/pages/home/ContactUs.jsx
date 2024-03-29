import React from 'react'
import '../../assets/styles/home/ContactUs.css'

export default function ContactUs() {
  return (
    <>
    <div className="contactForm">
        <form action="https://formspree.io/f/xjvdgrlj" method="POST" id="contactForm">
            <div>
                <input type="text" id="name" name="name" minlength="2 required" placeholder="Name" required />
            </div>
            <div>
                <input type="email" id="email" name="email" minlength="2 required" placeholder="E-mail" required />
            </div>
            <div>
                <input type="tel" id="phone" name="phone" minlength="9 required" placeholder="Phone" />
            </div>
            <div className="live">
                <div className="comments">
                    <textarea name="comments" id="comments" cols="30" rows="1" placeholder="Comments"></textarea>
                </div>
            </div>
            <input type="submit" id="submit-form" value="Submit" className="hidden"/>
        </form>
        <div className='contactInfo'>
            <a href="mailto:info@aliasmediadesign.com">info@aliasmediadesign.com</a> 
            <br /><br />
            <a href="tel:+1-859-806-0406">(859) 806-0406</a>
            <br /><br />
            <a href="tel:+1-859-317-1475">(859) 317-1475</a>
            <br /><br />
            <label for="submit-form" tabindex="0" className='submitText'>+ submit message</label>   
        </div>
    </div>
        
    
    </>
  )
}
