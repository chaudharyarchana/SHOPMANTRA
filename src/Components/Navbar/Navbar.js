import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className="left">
            <div className="item">
            <Link className="link" to="/products/1">WOMEN</Link>
            </div>
            <div className="item">
            <Link  className="link" to="/products/2">MEN</Link>
            </div>
            <div className="item">
            <Link className="link" to="/products/3">KID'S</Link>
            </div>
            </div>
            <div className="center">
              <Link  className="link" to="/">SHOPMANTRA</Link>
            </div>
            <div className="right">
            <SearchIcon/>
            <div className='item'>
            <AccountCircleIcon/>
            </div>
            <div className='item'>
            <FavoriteBorderIcon/>
            </div>
            <div className='item'>
            <ShoppingCartIcon/>
            <span className='count'>0</span>
            </div>
            </div>
        </div>
    </div>
    );
}



export default Navbar;
