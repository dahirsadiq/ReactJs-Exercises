import react ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartContext from './CartContext'
import ProductItem from './ProductItem'
import CartSummary from './CartSummary'


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log(item);
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = { cartItems, addToCart, removeFromCart };
  

  return (
    
      <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="Widget" price={100.05} />
      <ProductItem itemId={2} itemName="Gadget" price={134.90} />
      <CartSummary />
    </CartContext.Provider>
  
  )
}

export default App
