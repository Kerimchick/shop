import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addToCart, decreaseProduct, removeFromCart} from "../../redux/action";

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((s) => s.cart)
    return (
        <div className="mt-3">
            {
                cart.length ?
                    <>
                        <table className="table table-primary">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Sum</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map(item =>
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className="btn-sm btn btn-danger me-1"
                                                    onClick={() => dispatch(decreaseProduct(item))}>-</button>
                                            {item.quantity}
                                            <button className="btn-sm btn btn-success ms-1"
                                                    onClick={() => dispatch(addToCart(item))}>+</button>
                                        </td>
                                        <td>{(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <button className="btn btn-danger"
                                                    onClick={() => dispatch(removeFromCart(item))}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        <h4 className="text-end">Total: {cart.reduce((acc, item) => {
                            return  (item.price * item.quantity) + acc
                        }, 0).toFixed(2)}</h4>
                    </>
                : "Cart is empty"
            }
        </div>
    );
};

export default Cart;