import logo from "../assets/img/logo.png";
import {HeartFavoriteSvg} from "../assets/img/svg/heartFavorite_icon";
import {CartSvg} from "../assets/img/svg/cart_icon";

export const Header = () => {


    const navigation = ['home', 'shop']


  return (
      <header className={'d_header_container'}>
          <div className={'d_header_logo'}>
              <img src={logo} alt={'logo'}/>
          </div>
          <nav className={'d_nav_container'}>
              <ul className={'d_nav_container__navigation'}>
                  {navigation.map((item) => (
                      <li className={'d_nav_container__navigation__item'}>{item.toUpperCase()}</li>
                  ))}
              </ul>
          </nav>
          <div className={'d_nav_container__btns'}>
              <div className={'d_nav_container__btns__item__favorite'} ><HeartFavoriteSvg/></div>
              <div className={'d_nav_container__btns__item'} ><CartSvg/></div>
          </div>
      </header>
  )
}