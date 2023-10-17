import logo from "../assets/img/logo.png";
import searchImage from "../assets/img/search.png";
import favoriteImage from "../assets/img/heart.png";
import cartImage from "../assets/img/cart.png";

export const Header = () => {
  return (
      <header className={'d_header_container'}>
          <div className={'d_header_logo'}>
              <img src={logo} alt={'logo'}/>
          </div>
          <nav className={'d_nav_container'}>
              <ul className={'d_nav_container__navigation'}>
                  <li className={'d_nav_container__navigation__item'}>HOME</li>
                  <li className={'d_nav_container__navigation__item'}>SHOP</li>
              </ul>
          </nav>
          <div className={'d_nav_container__btns'}>
              <div className={'d_nav_container__btns__item'}><img src={searchImage} alt={'searchImg'}/></div>
              <div className={'d_nav_container__btns__item'}><img src={favoriteImage} alt={'favoriteImg'}/></div>
              <div className={'d_nav_container__btns__item'}><img src={cartImage} alt={'cartImg'}/></div>
          </div>
      </header>
  )
}