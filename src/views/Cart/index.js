import React from 'react';
import {useSelector, useDispatch} from "react-redux";

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
                                cart.map(el =>
                                    <tr>
                                        <td>{el.title}</td>
                                        <td>{el.price}</td>
                                        <td>
                                            <button className="btn-sm btn btn-danger me-1"
                                                    onClick={() => dispatch({type: "DECREASE_AMOUNT_IN_CART", payload: el})}>-</button>
                                            {el.quantity}
                                            <button className="btn-sm btn btn-success ms-1"
                                                    onClick={() => dispatch({type: "ADD_TO_CART", payload: el})}>+</button>
                                        </td>
                                        <td>{(el.price * el.quantity).toFixed(2)}</td>
                                        <td>
                                            <button className="btn btn-danger"
                                                    onClick={() => dispatch({type: "REMOVE_FROM_CART", payload : el.id})}
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