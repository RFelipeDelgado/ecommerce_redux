import React from 'react';
import styled from 'styled-components';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Carrito de compras</h3>
            <ul>
                {
                    cart.length > 0 ?
                        cart.map((element) => {
                            return (
                                <Producto key={element.id}>
                                    <NombreProducto>{element.nombre}</NombreProducto>
                                    Cantidad: {element.cantidad}
                                </Producto>

                            )
                        })
                        :
                        <p>No hay elementos en el carrito</p>
                }
            </ul>
        </div>
    );
}

const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid black;
    font-size: 14px;
`

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: black;
`

export default Cart;