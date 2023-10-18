import React from 'react';
import Productos from './ProductosSubElement';

// eslint-disable-next-line react/prop-types
const Tienda = ({ productos, addProductHandler }) => {
    return ( 
        <div>
            <h1>Tienda</h1>
            <Productos  productos={productos} addProductHandler={addProductHandler}/>
        </div>
     );
}
 
export default Tienda;