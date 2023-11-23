import {useEffect, useRef, useState} from "react";
import API from "../../../http";
import {DesktopHeader} from "../desktopHeader";
import {DesktopMainPage} from "./mainPage/DesktopMainPage";
import {CategoryPage} from "./categoryPage/categoryPage";
import {ClothesPage} from "./clothesPage/clothesPage";
import {AvoneStylePage} from "./avoneStylePage/avoneStylePage";
import {DesktopFooter} from "../desktopFooter";
import clothesFilter from "../../../global/ui/filterClothes";
import {titlesClothes as titles} from "../../../global/const/titles";

export const DesktopMain = () => {

    const [clothes,setClothes] = useState([])

    const mainRef = useRef()
    const shopRef = useRef()

    const clothesMenArr = []
    const clothesWomenArr = []

    clothesFilter(clothes,`women's clothing`,clothesWomenArr)
    clothesFilter(clothes,`men's clothing`,clothesMenArr)

    useEffect(() => {
        API.getAllProducts()
            .then((r) => setClothes(r.data))
    }, [setClothes])

    return (
        <div className={'d_main_spa'}>
            <DesktopHeader mainRef={mainRef} shopRef={shopRef}/>
            <div className={'d_main_spa__container'} ref={mainRef}>
                <DesktopMainPage />
                <div className={'d_main_spa__wrapper'} >
                    <CategoryPage/>
                    <div ref={shopRef}>
                        <ClothesPage
                            clothes={clothesWomenArr.slice(0,4)}
                            title={titles.women}
                            description={titles.description}/>
                    </div>
                    <ClothesPage clothes={clothesMenArr}
                                 title={titles.men}
                                 description={titles.description}/>
                    <AvoneStylePage/>
                </div>
            </div>
            <DesktopFooter/>
        </div>

    )
}