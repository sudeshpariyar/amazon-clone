import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket}]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://m.media-amazon.com/images/S/abs-image-upload-na/c/AmazonStores/ATVPDKIKX0DER/46ce39b478a48bc311d9ebcceaab26f2.w1500.h400._CR0%2C0%2C1500%2C400_SX1500_.jpg" 
                    alt=""
                />
                {basket?.length === 0 ?(
                    <div>
                        <h2>Your Shopping Basket is empty.</h2>
                    <p>You have no items in your basket. To buy one or more item go to product page and click on "Add to basket" next to the item.</p>   
                    </div>
                    
                ):(
                    <div>
                        <h2 className="checkout__title">Your Shoppping Basket.</h2>
                        {basket.map(item=>(
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                        
                    </div>
                )}
            </div>  
            {basket.length> 0 &&(
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}  
        </div>
    )
}

export default Checkout
