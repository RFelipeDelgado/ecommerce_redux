import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Tienda from './components/Tienda';
import Blog from './components/Blog';
import Error404 from './components/Error404';
import Cart from './components/CartComponent';

const App = () => {

  const productos = [                 //Este array simula los productos recibidos desde alguna API
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
    { id: 3, nombre: "Producto 3" },
    { id: 4, nombre: "Producto 4" },
  ]

  const [cart, setCart] = useState([])


  const addProductHandler = (idProduct, name) => {
    console.log(idProduct, name);
    //if Cart has no items, add one
    if (cart.length === 0) {
      setCart([{ id: idProduct, nombre: name, cantidad: 1 }])
    } else {
      //cart has items and we need to make sure if the item is already in the cart so the handler can update its value
      //or, just add it to the cart if the item is not there
      const newCart = [...cart];
      //here we check if the cart already has the item's ID, on this boolean variable
      const alreadyOnCart = newCart.filter((element) => {
        return element.id === idProduct
      }).length > 0

      if (alreadyOnCart) {
        //if the product is there, we update it
        //we need the products ID on the Cart array, so we can update it
        newCart.forEach((cartProduct, index) => {
          if (cartProduct.id === idProduct) {
            const amount = newCart[index].cantidad;
            newCart[index] = { id: idProduct, nombre: name, cantidad: amount + 1 }
          }
        })

      }else{
        newCart.push(
          {id: idProduct, nombre: name, cantidad: 1}
        )
      }
      //finally, we update the cart
      setCart(newCart)
    }
  }


  return (
    <Contenedor>
      <Menu>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/tienda'>Tienda</NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/tienda' element={<Tienda productos={productos} addProductHandler={addProductHandler} />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </main>
      <aside>
        <Cart cart={cart} />
      </aside>
    </Contenedor>
  );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
        transition: 0.3s;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;