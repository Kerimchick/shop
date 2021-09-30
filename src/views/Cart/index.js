import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((s) => s.cart)
    return (
        <div className="mt-3">
            {
                cart.length ? <table className="table table-primary">
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
                                <td>{el.quantity}</td>
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
                    <h4>Total</h4>
                </table> : "Cart is empty"
            }
        </div>
    );
};

export default Cart;