import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import PaymentImg from '../../img/payment.png';

const Footer = () => {
    return (
        <div className='footer'>
            <hr style={{width:"82vw", margin:"auto"}}/>
            <div className='top'>
            <div className='categories'>
                <h5>Categories</h5>
                <div className='items'>
                <Link className="link" to="/">Women</Link>
                </div>
                <div className='items'>
                <Link className="link" to="/">Men</Link>
                </div>
                <div className='items'>
                <Link className="link" to="/">Shoes</Link>
                </div>
                <div className='items'>
                <Link className="link" to="/">Accesories</Link>
                </div>
                <div className='items'>
                <Link className="link" to="/">New Arrivals</Link>
                </div>
            </div>
            <div className='links'>
                <h5>Links</h5>
                <div className='items'>
                    <Link className='link' to='/'>FAQ</Link>
                </div>
                <div className='items'>
                    <Link className='link' to='/'>Pages</Link>
                </div>
                <div className='items'>
                    <Link className='link' to='/'>Stores</Link>
                </div>
                <div className='items'>
                    <Link className='link' to='/'>Compare</Link>
                </div>
                <div className='items'>
                    <Link className='link' to='/'>Cookies</Link>
                </div>
            </div>
            <div className='about'>
                <h5>About</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quo repellendus molestiae suscipit sint dolores consectetur! .</p>
            </div>
            <div className='contact'>
                <h5>Contact</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quo repellendus molestiae suscipit sint dolores consectetur! .</p>
            </div>
            </div>
            <div className='bottom'>
                <h4>SHOPMANTRA</h4>
                <span className='copyright'>&copy; All rights reserved</span>
                <img src={PaymentImg} alt='payment' className='payment'></img>
            </div>
        </div>
    )
}



export default Footer;