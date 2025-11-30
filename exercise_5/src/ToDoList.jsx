
import { useState } from "react";

const ToDoList =()=>{

    
    const [products ,setProducts]=useState([]);
    const [name,setName]=useState("");
     const [price,setPrice]=useState();
     
     const handleAddCart=()=>{
        const newProduct={
            id:Date.now,
            name:name,
            price:price,
            quantity:1
        }

        setProducts(...products ,newProduct);
        setName("");
        setPrice("");
        
     }

    return(
        <div>
            <h2>Add a Product</h2>
            <input type="text" placeholder="enter product" onChange={(e)=>setName(e.target.value)}/>
            <input type="number" placeholder="enter price"onChange={(e)=>setPrice(e.target.value)} />
            <button onClick={handleAddCart}>Add to Cart</button>

            <h2>Products in the Cart</h2>
            <ul>
                {products.map(product =>(
                    <li> <strong>{product.name}</strong>
                        :{product.price}
                        <quantity:div>
                            <button>-</button>
                            {product.quantity}
                            <button>+</button>
                        </quantity:div>
                        </li>
                ))}
            </ul>


        </div>
    )
}

export default ToDoList;