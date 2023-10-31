const initialState = {
    productos: [
        { id: 1, nombre: "Producto A" },
        { id: 2, nombre: "Producto B" },
        { id: 3, nombre: "Producto C" },
        { id: 4, nombre: "Producto D" },
        { id: 5, nombre: "Producto E" },
        { id: 6, nombre: "Producto F" },
    ],
    globalCart: []
}

//reducer is a function that will change our global state through an action
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_Item_To_Cart': {
            const { nombre, idProduct } = action;

            if (state.globalCart.length === 0) {    //If Cart is empty, add 1 element
                return {
                    ...state,
                    globalCart: [{ id: idProduct, nombre: nombre, cantidad: 1 }]
                }
            } else {
                const newCart = [...state.globalCart];

                const alreadyOnCart = newCart.filter((element) => {
                    return element.id === idProduct
                }).length > 0;

                // if the element is already on Cart, update it
                if (alreadyOnCart) {
                    newCart.forEach((cartItem, index) => {
                        if(cartItem.id === idProduct) {
                            const amount = newCart[index].cantidad;
                            newCart[index] = {
                                id: idProduct,
                                nombre: nombre,
                                cantidad: amount + 1
                            }
                        }
                    });
                } else {
                    newCart.push(
                        {
                            id: idProduct,
                            nombre: nombre,
                            cantidad: 1
                        }
                    )
                }

                return {
                    ...state,
                    globalCart: newCart
                }
            }

        }
        default:
            return state;
    }
}

export default reducer;