import {useEffect, useState} from "react";
import API from "../../http";
import clothesFilter from "../../global/ui/filterClothes";
import {TabletHeader} from "../components/tabletHeader";
import {TabletMainPage} from "../components/mainPage/tabletMainPage";
import {TabletCategoryPage} from "../components/categoryPage/tabletCategoryPage";
import {TabletClothesPage} from "../components/clothesPage/tabletClothesPage";
import {titlesClothes as titles} from "../../global/const/titles";
import {TabletFooter} from "../components/tabletFooter";

export const MainSpaTablet = () => {

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
      <div className={'t_main_spa'}>
        <TabletHeader/>
        <div className={'t_main_spa__container'}>
          <TabletMainPage/>
          <div className={'t_main_spa__wrapper'}>
            <TabletCategoryPage/>
            <TabletClothesPage clothes={clothesWomenArr.slice(0,4)} title={titles.women} description={titles.description}/>
            <TabletClothesPage clothes={clothesMenArr} title={titles.men} description={titles.description}/>
          </div>
        </div>
        <TabletFooter/>
      </div>
  )

}