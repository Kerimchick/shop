import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addToCart, getCatalog} from "../../redux/action";

const Home = () => {
    let dispatch = useDispatch()
    const catalog = useSelector(store => store.catalog)
    const isLoading = useSelector(store => store.isLoading)
    useEffect(() => {
        dispatch(getCatalog())
    }, [dispatch])

    if(isLoading){
        return <div className="lds-ellipsis">
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
        </div>
    }
    return (
        <div className="row">
            {
                catalog.map(item =>
                    <div className="col-md-3" key={item.id}>
                        <img src={item.images} alt="foto-product" className="w-100 h-50 py-4"/>
                        <h5>{item.title}</h5>
                        <p>{item.price}$</p>
                        <p>{item.description}</p>
                        <button type="button" className="btn btn-primary"
                        onClick={() => dispatch(addToCart(item))}
                        >Add to basket</button>
                    </div>
                )
            }
        </div>
    );
};

export default Home;