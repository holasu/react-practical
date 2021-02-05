import React from 'react'

function Product(props){
    console.log(props);
    return(
        <div>
            <h2>{props.products.name}</h2>
             <p>${props.products.price} - {props.products.description}</p>
             <br/>
        </div>
    );
}
export default Product;