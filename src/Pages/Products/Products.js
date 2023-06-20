import React, { useState } from 'react';
import './products.css';
import FeaturedProduct from '../../Components/FeaturedProducts/FeaturedProducts';

import pimg from '../../img/pexels-alax-matias-17042219.jpg';


const Products = () => {
    const[pricevalue,setValue]=useState(100);
    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);

      };
    return <div className='products'>
         <div className='pleft'>
                <div className='product-category'>
                    <h3>Product Categories</h3>
                <input type="radio" id="option1" name="pcate" value="option1"/>
                   <label for="option1">Hat</label><br/>
                <input type="radio" id="option2" name="pcate" value="option2"/>
                   <label for="option2">T-shirt</label>
                </div>


                <div className='filterby'>
                     <h3>Filter by price</h3>
                     <input type="range"   min="0" max="1000" value={pricevalue} onChange={handleChange} />
                      <span >${pricevalue}</span>
                </div>


                <div className='sortby'>
                         <h3>Sort by</h3>
                         <input type="radio" id="option1" name="psort" value="option1"/>
                         <label for="option1">Price(Lowest First)</label><br/>
                         <input type="radio" id="option2" name="psort" value="option2"/>
                         <label for="option2">Price(Hightest first)</label>
                </div>

               
                <div className='sortby'>
                         <h3>Colors</h3>
                         <input type="checkbox" id="option1" name="psort" value="option1"/>
                         <label for="option1">White</label><br/>
                         <input type="checkbox" id="option2" name="psort" value="option2"/>
                         <label for="option2">Black</label><br/>
                         <input type="checkbox" id="option2" name="psort" value="option2"/>
                         <label for="option2">Red</label>
                </div>
         </div>
         <div className='pright'>
             <img src={pimg} alt='' ></img>
             <FeaturedProduct/>
         </div>
    </div>;
}



export default Products;