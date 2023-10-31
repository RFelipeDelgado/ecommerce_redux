import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Productos = ({ productos, addProductDispatch }) => {
    return (
        <div>
            <h3>Productos</h3>
            <ContenedorProductos>
                {productos.map((element) => {
                    return (
                        <Producto key={element.id}>
                            {element.nombre}
                            <Boton onClick={() => addProductDispatch(element.id, element.nombre)}>Agregar al carrito</Boton>
                        </Producto>)
                })}
            </ContenedorProductos>
        </div>
    );
}

const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;

const Producto = styled.div`
    padding: 20px;
    border: 2px solid #525760;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

const Boton = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;

const mapStateToProps = (state) => {
    return {
        productos: state.productos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductDispatch: (idProduct, nombre) => {
            dispatch(
                {
                    type: 'Add_Item_To_Cart',
                    idProduct: idProduct,
                    nombre: nombre
                }
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Productos);