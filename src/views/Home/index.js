import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {data} from "../../data"

const Home = () => {
    let dispatch = useDispatch()
    const catalog = useSelector(store => store.catalog)
    useEffect(() => {
        dispatch({type: "GET_CATALOG", payload: data})
    }, [dispatch])
    return (
        <div className="row">
            {
                catalog.map(item =>
                    <div className="col-md-3" key={item.id}>
                        <img src={item.images} alt="image" className="w-100 h-50 py-4"/>
                        <h5>{item.title}</h5>
                        <p>{item.price}$</p>
                        <p>{item.description}</p>
                        <button type="button" className="btn btn-primary"
                        onClick={() => dispatch({type: "ADD_TO_CART", payload: item})}
                        >Add to basket</button>
                    </div>
                )
            }
        </div>
    );
};

export default Home;