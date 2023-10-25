import {useEffect, useState} from "react";
import API from "../../http";
import {DesktopHeader} from "../components/DesktopHeader";
import {DesktopMainPage} from "../components/pages/mainPage/DesktopMainPage";
import {CategoryPage} from "../components/pages/categoryPage/categoryPage";
import {ClothesPage} from "../components/pages/clothesPage/clothesPage";
import {AvoneStylePage} from "../components/pages/avoneStylePage/avoneStylePage";
import {DesktopFooter} from "../components/DesktopFooter";
import clothesFilter from "../../global/ui/filterClothes";
import {titlesClothes as titles} from "../../global/const/titles";

export const MainSpaDesktop = () => {

    const [clothes,setClothes] = useState([])

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
            <DesktopHeader/>
          <div className={'d_main_spa__container'}>
              <DesktopMainPage/>
              <div className={'d_main_spa__wrapper'}>
                  <CategoryPage/>
                  <ClothesPage clothes={clothesWomenArr.slice(0,4)} title={titles.women} description={titles.description}/>
                  <ClothesPage clothes={clothesMenArr} title={titles.men} description={titles.description}/>
                  <AvoneStylePage/>
              </div>
          </div>
          <DesktopFooter/>
      </div>
  )
}