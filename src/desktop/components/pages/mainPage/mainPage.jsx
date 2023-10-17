import {useEffect, useState} from "react";
import API from '../../../../http';
import {Header} from "./header";

export const MainPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        API.getAllProducts()
            .then(r => setProducts(r.data))
    }, [setProducts])
    console.log(products)
    return (
        <>
            <Header/>
        </>
    )
}