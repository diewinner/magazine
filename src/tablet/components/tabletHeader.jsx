import logo from "../../global/assets/img/logo.png";
import {HeartFavoriteSvg} from "../../global/assets/img/svg/heartFavorite_icon";
import {CartSvg} from "../../global/assets/img/svg/cart_icon";
import {navigation} from "../../global/const/titles";

export const TabletHeader = () => {

  return (
      <header className={'t_header_container'}>
          <div className={'t_header_logo'}>
              <img src={logo} alt={'logo'}/>
          </div>
          <nav className={'t_nav_container'}>
              <ul className={'t_nav_container__navigation'}>
                  {navigation.map((item) => (
                      <li className={'t_nav_container__navigation__item'}>{item.name.toUpperCase()}</li>
                  ))}
              </ul>
          </nav>
          <div className={'t_nav_container__btns'}>
              <div className={'t_nav_container__btns__item__favorite'} ><HeartFavoriteSvg/></div>
              <div className={'t_nav_container__btns__item'} ><CartSvg/></div>
          </div>
      </header>
  )
}