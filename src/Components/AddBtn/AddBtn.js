import { useState } from "react";
import './addbtn.css';


const AddBtn = () => {
 const[items,addItems]=useState(0);

 const addItemToCard=()=>{
      if(items<2){
        addItems(items=>items+1)
      }
       else{
        addItems(items=>items-1)
       } 

 }
    return <div className='addbtn'>
        <button className='addbutton' onClick={addItemToCard}>{items>0?`Qwt`:'Add To Bag'}</button>
        <span>{items}</span>

    </div>;
}


export default AddBtn;