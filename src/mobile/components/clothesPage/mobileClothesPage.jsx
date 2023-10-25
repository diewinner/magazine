import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HeartFavoriteSvg} from "../../../global/assets/img/svg/heartFavorite_icon";
import {CartSvg} from "../../../global/assets/img/svg/cart_icon";
import {addCustomerAction, deleteCustomerAction} from "../../../global/store/favoriteReducer";


export const MobileClothesPage = ({title, description, clothes}) => {

    const [clickedItems, setClickedItems] = useState({});

    const dispatch = useDispatch()

    const favorite = useSelector(state => state.favorite.favorite)
    function favoriteBtn(cloth) {
        if(favorite.includes(cloth)) {
            dispatch(deleteCustomerAction(cloth.id))
            setClickedItems({ ...clickedItems, [cloth.id]: false });
        } else {
            dispatch(addCustomerAction(cloth))
            setClickedItems({ ...clickedItems, [cloth.id]: true });
        }
    }

    console.log(favorite, clickedItems)
  return (
      <div className={'m_clothes_container'}>
          <div className={'m_clothes_title_container'}>
              <div className={'m_clothes_title_container__title'}>{title}</div>
              <div className={'m_clothes_title_container__description'}>{description}</div>
          </div>
          <div className={'m_clothes_info_container'}>
              {clothes.map((item) => {
                  return (
                      <div key={item.id} id={'item'} className={'m_clothes_info_item'}>
                          <div className={'m_clothes_info_item__svg'}>
                              <div className={clickedItems[item.id]
                                             ? 'm_clothes_info_item__svg__favorite__active'
                                             : 'm_clothes_info_item__svg__favorite'
                                             }
                                   onClick={() => favoriteBtn(item)}
                              >
                                  <HeartFavoriteSvg width={25} height={25}/>
                              </div>
                              <div className={'m_clothes_info_item__svg__cart'}>
                                  <CartSvg width={25} height={25}/>
                              </div>
                          </div>
                              <div className={'m_clothes_info_item__img'}>
                                  <img src={item.image} alt={'image'}/>
                              </div>
                              <div className={'m_clothes_info_item__text'}>
                                <div className={'m_clothes_info_item__text__title'}>
                                    {item.title.substr(0,10)}
                                </div>
                                <div className={'m_clothes_info_item__text__desc'}>
                                    {item.description.substr(0,27).toUpperCase()}
                                </div>
                                <div className={'m_clothes_info_item__text__price'}>
                                    {item.price + ' $'}
                                </div>
                              </div>
                      </div>
                      )

              })}
          </div>
      </div>
  )
}