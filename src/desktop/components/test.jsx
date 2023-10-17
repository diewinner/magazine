import {useEffect, useState} from "react";
import API from '../../http/index';

export const Test = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])
    console.log(products)
    return (
        <div>hu</div>
    )
}