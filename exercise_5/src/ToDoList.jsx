
import { useState } from "react";

const ToDoList =()=>{

    
    const [products ,setProducts]=useState([]);
    const [name,setName]=useState("");
     const [price,setPrice]=useState();

    //  Increase Quantity
     const handleIncreaseQuantity =(id)=>{
            const updatedProducts=products.map(product=>(
                product.id ===id? {...product ,quantity:product.quantity +1}:product
            ))
             setProducts(updatedProducts);

        }
        // Decrease Quantity
        const handleDecreaseQuantity=(id)=>{
            const updatedProducts=products.map(product=>(
                product.id ===id && product.quantity > 0 ? {...product ,quantity:product.quantity - 1}:product
            ))
             setProducts(updatedProducts);

         }

     
     const handleAddCart=()=>{
        const newProduct={
            id:Date.now,
            name:name,
            price:price,
            quantity:1
        }
        setProducts([...products ,newProduct]);
        setName("");
        setPrice("");
        
     }


    //  calculation of total price
    const Totalprice=products.reduce((total, product) => total + product.price * product.quantity,0);
   

    return(
        <div>
            <h2>Add a Product</h2>
            <input type="text" placeholder="enter product" onChange={(e)=>setName(e.target.value)}/>
            <input type="number" placeholder="enter price"onChange={(e)=>setPrice(e.target.value)} />
            <button onClick={handleAddCart}>Add to Cart</button>

            <h2>Products in the Cart</h2>
            <ul>
                {products.map(product =>(
                    <li key={product.id}> <strong>{product.name}</strong>
                        :{product.price}<br></br>

                        <strong>Quantity:</strong>  <div>
                           {product.quantity}
                            <button onClick={()=>handleIncreaseQuantity(product.id)}>+</button>
                            <button onClick={()=>handleDecreaseQuantity(product.id)}>-</button>
                        </div>
                        </li>
                ))}
            </ul>

            <h2>the total price is{Totalprice} {}</h2>


        </div>
    )
}

export default ToDoList;