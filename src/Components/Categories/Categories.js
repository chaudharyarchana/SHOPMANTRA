import React from 'react';
import './categories.css';
import { Link } from 'react-router-dom';

import imgr1 from '../../img/pexels-tim-douglas-6567737.jpg';
import imgr2 from '../../img/pexels-pixabay-458766.jpg';
import imgr3 from '../../img/pexels-philip-boakye-1813947.jpg';
import imgr4 from '../../img/pexels-nappy-935985.jpg';
import imgr6 from '../../img/pexels-bess-hamiti-35188.jpg';


const Categories = () => {
    return <div className='categoriess'>
        <div className='col '>
            <div className='row'>
                <img src={imgr1} alt="" />
                <Link className="link" to="/products/1"><button className='gridbtn'>SALE</button></Link>
                
            </div>
            <div className='row'>
            <img src={imgr2} alt=""  />
            <Link className="link" to="/products/1"><button className='gridbtn'>WOMEN</button></Link>
            </div>
        </div>
        <div className='col '>
            <div className='row'>
            <img src={imgr3} alt="" style={{height:"80.9vh"}}/>
            <Link className="link" to="/products/1"><button className='gridbtn'>MEN</button></Link>
            </div>
        </div>
        <div className='col'>
            
                 <div className='row'>
                      <img src={imgr4} alt=""/>
                      <Link className="link" to="/products/1"><button className='gridbtn'>ACCESSORIES</button></Link>
                      
                 </div>
            
                 
                 <div className='row'>
               <img src={imgr6} alt="" />
               <Link className="link" to="/products/1"><button className='gridbtn'>KIDS</button></Link>
            </div>
                
           
            
            
        </div>
    </div>;
}



export default Categories;