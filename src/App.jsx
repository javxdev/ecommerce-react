import { useState, useEffect } from 'react';

import Footer from "./Components/Footer/Footer"
import  Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Ourproducts from "./Components/OurProducts/Ourproducts"


function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([])

  function addToCart(item){
    const itemExists = cart.findIndex(product => product.id == item.id)
    if (itemExists < 0){
        item.quantity = 1
        setCart([...cart, item])
    }
    else {
        const updatedCart = [...cart]
        updatedCart[itemExists].quantity++
        setCart(updatedCart)
    }
  }

  function removeFromCart (id) {
    setCart(prevCart => prevCart.filter(product => product.id !== id))
  }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

  return (
    <>
    <Header
    cart={cart}
    removeFromCart={removeFromCart}
    />
    <div className="min-h-screen bg-[url('./assets/bg-main.png')] bg-cover object-center">
      <Hero/>
    </div>
    <Ourproducts
    data={data}
    cart={cart}
    addToCart={addToCart}
    />
    <Footer/>
    </>
  )
}

export default App
