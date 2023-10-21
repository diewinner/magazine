import {useEffect, useState} from "react";
import API from "../../http";
import {Header} from "./header";
import {MainPage} from "./pages/mainPage/mainPage";
import {CategoryPage} from "./pages/categoryPage/categoryPage";
import {ClothesPage} from "./pages/clothesPage/clothesPage";
import {AvoneStylePage} from "./pages/avoneStylePage/avoneStylePage";
import {Footer} from "./footer";

export const MainSPA = () => {

    const titles = {
        men: `MEN’S FASHION`,
        women: `WOMEN’S FASHION`,
        description:'Shop our new arrivals from established brands'
    }

    const [clothes,setClothes] = useState([])

    const clothesMenArr = []

    const clothesWomenArr = []


    function clothesMen() {
        clothes.map((item) => {
            if(item.category === `men's clothing`) {
                clothesMenArr.push(item)
            }
        })
    }

    function clothesWomen() {
        clothes.map((item) => {
            if(item.category === `women's clothing`) {
                clothesWomenArr.push(item)
            }
        })

    }

    clothesMen()
    clothesWomen()

    useEffect(() => {
        API.getAllProducts()
            .then((r) => setClothes(r.data))
    }, [setClothes])

    return (
      <div>
            <Header/>
          <div className={'d_main_spa_container'}>
              <MainPage/>
              <div className={'d_main_spa_wrapper'}>
                  <CategoryPage/>
                  <ClothesPage clothes={clothesWomenArr.slice(0,4)} title={titles.women} description={titles.description}/>
                  <ClothesPage clothes={clothesMenArr} title={titles.men} description={titles.description}/>
                  <AvoneStylePage/>
              </div>
          </div>
          <Footer/>
      </div>
  )
}