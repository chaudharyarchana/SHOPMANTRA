import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';

import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    const [isAsideVisible, setIsAsideVisible] = useState(false);
    const handleAside = () => {
        setIsAsideVisible(!isAsideVisible);
      };
    return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='density'>
            <DensityMediumIcon onClick={handleAside} />
            {isAsideVisible && (
        <aside className='asides'>
          <Link className="link" to="/products/1">WOMEN</Link>
          <Link className="link" to="/products/1">MEN</Link>
          <Link className="link" to="/products/1">KID's</Link>
        </aside>
      )}
            </div>
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
              <Link  className="link shopmantra"  to="/">SHOPMANTRA</Link>
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
