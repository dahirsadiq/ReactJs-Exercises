
import { useState } from "react";

const ToDoList =()=>{

    
    const [products ,setProducts]=useState([]);
    const [name,setName]=useState("");
     const [price,setPrice]=useState();
     const handleIncreaseQuantity =(id)=>{
            const updatedProducts=products.map(product=>(
                product.id ===id? {...product ,quantity:product.quantity +1}:product
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

        // const handleDecreaseQuantity=(id)=>{

        // }

        

        setProducts([...products ,newProduct]);
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
                    <li key={product.id}> <strong>{product.name}</strong>
                        :{product.price}<br></br>

                        Quantity:<div>
                            <button>-</button>
                            {product.quantity}
                            <button onClick={()=>handleIncreaseQuantity(product.id)}>+</button>
                        </div>
                        </li>
                ))}
            </ul>


        </div>
    )
}

export default ToDoList;