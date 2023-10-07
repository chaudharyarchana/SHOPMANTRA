import { useState } from 'react';
import productimg from '../../img/whitetshirt.jpg';
import './Product.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Product = () => {

    const[items,setItems]=useState(0);
    

    const handleminus=()=>{
        if(items>0){
            setItems(items=>items-1)
        }
        else{
            setItems(0)
        }
    }
    

    return <div className="product">
       <div className='productleft'>
        <img src={productimg} alt=''/>
       </div>
       <div className='productright'>

        <h1 className='producttitile'>Women T-Shirt </h1>
        <p className='productprice'>$ 19</p>
        <p className='productdetails'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quo repellendus molestiae suscipit sint dolores consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quo repellendus molestiae suscipit sint dolores consectetur.</p>
        <div className='multiplebtns'>
            <button onClick={handleminus}>-</button>
            <span>{items}</span>
            <button onClick={()=>setItems(items=>items+1)}>+</button>
        </div>
        <button className='addcard' >Add To cart</button>
        <div className='addwish'>
            <FavoriteBorderIcon className='dil'/>
            <h4> WISHLIST</h4>
        </div>
        <hr/>

       </div>
    </div>;
}



export default Product;