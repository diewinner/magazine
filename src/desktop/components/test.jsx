import {useEffect, useState} from "react";
import API from '../../http/index';

export const Test = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        API.getAllProducts()
            .then(r => setProducts(r.data))
    }, [setProducts])
    console.log(products)
    return (
        <div>hu</div>
    )
}