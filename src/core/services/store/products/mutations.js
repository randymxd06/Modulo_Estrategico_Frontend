// export const myAction = ( state ) => {

// }

export const setProducts = ( state, products ) => {

    state.products = [];
    
    products.forEach(element => {
        state.products.push(element);
    });

}

export const setProductsToCart = ( state, product ) => {

    if(state.cart.length != 0) {

        let productExists = false;
        
        state.cart.forEach(ele => {
            if(product.element.id == ele.element.id){
                productExists = true;
            }
        });
        
        if(!productExists) {
            state.cart.push(product);
        }
        
    } else {

        state.cart.push(product);

    }

    setLocalStorageCartProducts(product);

}

export const setSelectedCart = ( state, product ) => {

    state.selectedCart = [];

    state.selectedCart.push(product);

    localStorage.setItem('selectedCart', JSON.stringify(product));

}

export const increment = ( state, product ) => {

    state.cart.forEach(ele => {
        if(product.element.id == ele.element.id){
            ele.quantity++;
        }
    });

    localStorage.removeItem('cart');

    localStorage.setItem('cart', JSON.stringify(state.cart));

}

export const decrement = ( state, product ) => {

    var noQuantity = false;

    state.cart.forEach(ele => {
        if(product.element.id == ele.element.id){
            ele.quantity--;
            if(ele.quantity <= 0){
                noQuantity = true;
            }
        }
    });

    if(noQuantity){

        state.cart.forEach((ele, index) => {
            if(product.element.id == ele.element.id){
                state.cart.splice(index, 1);
            }
        });
        
        localStorage.removeItem('cart');
    
        if(state.cart.length != 0){
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
        
    } else {
        
        localStorage.removeItem('cart');
    
        localStorage.setItem('cart', JSON.stringify(state.cart));

    }

}

export const deleteCartProduct = ( state, product ) => {

    state.cart.forEach((ele, index) => {
        if(product.element.id == ele.element.id){
            state.cart.splice(index, 1);
        }
    });
    
    localStorage.removeItem('cart');

    if(state.cart.length != 0){
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }

}

export const setLocalStorageCartProducts = ( product ) => {

    let localCart = [];

    const items = JSON.parse(localStorage.getItem('cart'));

    if(items){

        let productExists = false;

        items.forEach(ele => {

            if(product.element.id == ele.element.id){

                productExists = true;

            } else {

                productExists = false;

                localCart.push(ele);

            }
            
        });
        
        if(!productExists) {

            localCart.push(product);
        
            localStorage.setItem('cart', JSON.stringify(localCart));

        }

    } else {

        localCart.push(product);
        
        localStorage.setItem('cart', JSON.stringify(localCart));

    }

}

export const getLocalStorageCartProducts = ( state, products ) => {

    products.forEach(ele => {

        state.cart.push(ele);
        
    })

}