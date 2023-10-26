import logo from "../../global/assets/img/logo.png";
import {HeartFavoriteSvg} from "../../global/assets/img/svg/heartFavorite_icon";
import {CartSvg} from "../../global/assets/img/svg/cart_icon";
import {navigation} from "../../global/const/titles";
import {useDispatch, useSelector} from "react-redux";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {SignInModal} from "./modal/signIn/signInModal";
import {useState} from "react";
export const DesktopHeader = () => {
    const dispatch = useDispatch()
    const authUser = useSelector(state => state.auth.auth)
    const [modal, setModal] = useState(false)


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
              {authUser ?
                  <div>
                      <div className={'d_nav_container__btns__item__favorite'}><HeartFavoriteSvg/></div>
                      <div className={'d_nav_container__btns__item'} ><CartSvg/></div>
                  </div>
                        :
                  <div className="d-flex gap-4">
                      <Button variant="outline-dark" size={'sm'} onClick={() => setModal(true)}>Sign In</Button>
                      <Button variant="outline-dark" size={'sm'}>Log In</Button>
                  </div>
              }
          </div>
          <SignInModal
              show={modal}
              onHide={() => setModal(false)}
          />
      </header>
  )
}