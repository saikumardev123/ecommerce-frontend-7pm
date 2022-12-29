import './Cart.css';
import { useState } from 'react';

function Cart() {

    const [update, updateState] = useState(true);

    const getCartItems = () => {
        var cartItems = JSON.parse(localStorage.getItem("cart"));
        console.log("cartItems", cartItems);
        let cartItemsList = cartItems.map((cartItem) => {
            return <div className="cart-item d-md-flex justify-content-between"><span className="remove-item" onClick={() => removeItemFromCart(cartItem._id)}><i className="fa fa-times"></i></span>
                <div className="px-3 my-3">
                    <a className="cart-item-product" href="#" >
                        <div className="cart-item-product-thumb"><img src={cartItem.image} alt="Product" /></div>
                        <div className="cart-item-product-info">
                            <h4 className="cart-item-product-title">{cartItem.name}</h4>
                        </div>
                    </a>
                </div>
                <div className="px-3 my-3 text-center">
                    <div className="cart-item-label">Quantity</div>
                    <div className="count-input">
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>
                </div>
                <div className="px-3 my-3 text-center">
                    <div className="cart-item-label">Subtotal</div><span className="text-xl font-weight-medium">{cartItem.price}</span>
                </div>

            </div>
        })
        return cartItemsList;
    }
    const removeItemFromCart = (_id) => {

        var cartItems = JSON.parse(localStorage.getItem("cart"));

        cartItems.forEach((item, i) => {
            if (_id == item._id) {
                cartItems.splice(i, 1);
            }
        })
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateState(Math.floor((Math.random() * 100) + 1));
    }

    return (
        <div>
            <div className="container pb-5 mb-2">

                <div className="alert alert-info alert-dismissible fade show text-center mb-30"><span className="alert-close" data-dismiss="alert"></span><i className="fe-icon-award"></i>&nbsp;&nbsp;With this purchase you will earn <strong>2,549</strong> Reward Points.</div>

                {getCartItems()}

                <div className="row pt-3 pb-5 mb-2">
                    <div className="col-sm-6 mb-3"><a className="btn btn-style-1 btn-secondary btn-block" href="#"><i className="fe-icon-refresh-ccw"></i>&nbsp;Update Cart</a></div>
                    <div className="col-sm-6 mb-3"><a className="btn btn-style-1 btn-primary btn-block" href="checkout-address.html"><i className="fe-icon-credit-card"></i>&nbsp;Checkout</a></div>
                </div>


            </div>
        </div>


    )

}
export default Cart;