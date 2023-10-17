import {useEffect, useState} from "react";
import API from '../../../../http';

export const MainPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        API.getAllProducts()
            .then(r => setProducts(r.data))
    }, [setProducts])
    console.log(products)
    return (
        <div className={'d_main_page_container'}>
            <div className={'d_main_page_wrapper'}>
                <section className={'d_main_page_text'}>
                    <div className={'d_main_page_text__item'}>NEW TREND</div>
                    <div className={'d_main_page_text__item_other'}>COLLUSION</div>
                    <div className={'d_main_page_text__item'}>An exclusive selection of this season's trends.</div>
                </section>
                <div className={'d_main_page_btns'}>
                    <a className={'d_main_page_btns__item'}>DISCOVER</a>
                    <a className={'d_main_page_btns__item'}>SHOP NOW</a>
                </div>
            </div>
        </div>
    )
}