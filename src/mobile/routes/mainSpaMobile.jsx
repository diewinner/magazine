import {useEffect, useState} from "react";
import clothesFilter from "../../global/ui/filterClothes";
import API from "../../http";
import {titlesClothes as titles} from "../../global/const/titles";
import {MobileHeader} from "../components/mobileHeader";
import {MobileMainPage} from "../components/mainPage/mobileMainPage";
import {MobileCategoryPage} from "../components/categoryPage/mobileCategoryPage";
import {MobileClothesPage} from "../components/clothesPage/mobileClothesPage";
import {MobileFooter} from "../components/mobileFooter";

export const MainSpaMobile = () => {
    const [clothes,setClothes] = useState([])

    const clothesMenArr = []
    const clothesWomenArr = []
clothesFilter(clothes,`men's clothing`,clothesMenArr)
clothesFilter(clothes,`women's clothing`,clothesWomenArr)

    useEffect(() => {
        API.getAllProducts()
            .then((r) => setClothes(r.data))
    }, [setClothes])

    return (
        <div className={'m_main_spa'}>
            <MobileHeader/>
            <div className={'m_main_spa__container'}>
                <MobileMainPage/>
                <div className={'m_main_spa__wrapper'}>
                    <MobileCategoryPage/>
                    <MobileClothesPage clothes={clothesWomenArr.slice(0,4)} title={titles.women} description={titles.description}/>
                    <MobileClothesPage clothes={clothesMenArr} title={titles.men} description={titles.description}/>
                </div>
            </div>
            <MobileFooter/>
        </div>
    )
}