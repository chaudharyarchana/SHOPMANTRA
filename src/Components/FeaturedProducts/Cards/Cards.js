import React from 'react';
import './cards.css';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    return <div className='cards'>
        <Link className="link" to="/product"><img src={props.item.img} alt='' /></Link>
       <p>{props.item.title}</p>
        <div className='price'>
            <p className='oldprice'>${props.item.oldprice}</p>
            <p className='newprice'>${props.item.newprice}</p>
            
        </div>
    </div>;
}



export default Cards;