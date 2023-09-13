import React from 'react';
import './featuredproducts.css';
import Cards from './Cards/Cards';

import cardimg1 from '../../img/dom-hill-nimElTcTNyY-unsplash.jpg';
import cardimg2 from '../../img/luobulinka-FO4mQZi1c0M-unsplash.jpg';
// import cardimg3 from '../../img/pexels-viktorya-sergeeva-🫂-10956680.jpg';
import cardimg4 from '../../img/pexels-godisable-jacob-914668.jpg';

const FeaturedProducts = (props) => {
 
    const carddata=[
        {
            id:0,
            img:cardimg1,
            
            title:"Long Sleve T-shirt",
            oldprice:19,
            newprice:12,
        },
        {
            id:1,
            img:cardimg2,
            
            title:"Zara One Piece Dress",
            oldprice:70,
            newprice:60.9,
        },
        // {
        //     id:2,
        //     img:cardimg3,
            
        //     title:"Levis Womens T-Shirt",
        //     oldprice:40,
        //     newprice:36.4,
        // },
        {
            id:3,
            img:cardimg4,
            
            title:"Mango Two-Piece Dress",
            oldprice:65,
            newprice:50.6,
        },
        {
            id:4,
            img:cardimg1,
            
            title:"Long Sleve T-shirt",
            oldprice:19,
            newprice:12,
        },
    ];


    return (<div className='featured'>
        <div className='fptop'>
            <h3>{props.type} Products</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quo repellendus molestiae suscipit sint dolores consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
        </div>
        <div className='fpbottom'>
            {carddata.map(item=><Cards item={item} key={item.id}  /> )}
            
        </div>
    </div>);
}


export default FeaturedProducts;