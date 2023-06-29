'use client'
import { useEffect, useState } from "react";
const ImageSearch=()=>{
    const [img, setImg] = useState([]);
    const [product, setProduct ] = useState([]);

    const doSomething = async() =>{
        let data = await fetch("https://dummyjson.com/products");
        data =await data.json();
        console.log(data)
        setProduct(data.products)
        }

    useEffect( ()=>{
       doSomething ();
    },[])
    return(
        <div>
            <h1>Search your Image</h1>
            <br/>
            <input type="text" 
              placeholder="search img"
              onChange={(e)=>{setImg(e.target.value)}}
            />
            <p>{img}</p>
              <div>
       <h1>
        product List
       </h1>
       <ul>
        <li>
           {product.map((item, i)=>(
            <div key={i}>
            <h3>Name: {item.title}, Price:{item.price}</h3>
            <img src={item.thumbnail} alt="" width={100} height={100}/>
            </div>
           ))}
        </li>
       </ul>
    </div>
        </div>
    );
} 
export default  ImageSearch;