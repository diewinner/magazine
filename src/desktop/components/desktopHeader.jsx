import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from 'react-bootstrap'
import {navigation} from "../../global/const/titles";
import {SignInModal} from "./modal/signIn/signInModal";
import {CartSvg} from "../../global/assets/img/svg/cart_icon";
import {HeartFavoriteSvg} from "../../global/assets/img/svg/heartFavorite_icon";
import logo from "../../global/assets/img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {OnModalAction} from "../../global/store/authReducer";
export const DesktopHeader = ({mainRef, shopRef}) => {

    const dispatch = useDispatch()
    const authUser = useSelector(state => state.auth.auth)
    const [modal, setModal] = useState(false)
    const authenticationUser = () => {
        dispatch(OnModalAction(true))
        setModal(false)
    }

    return (
      <header className={'d_header_container'} >
          <div className={'d_header_logo'} onClick={()=> window.scroll(0,mainRef.current.scrollTop)}>
              <img src={logo} alt={'logo'}/>
          </div>
          <nav className={'d_nav_container'}>
                  <ul className={'d_nav_container__navigation'}>
                  {navigation.map((item) => (
                      <li className={'d_nav_container__navigation__item'} onClick={()=> window.scroll(0,shopRef.current.offsetTop)}>{item.name.toUpperCase()}</li>
                  ))}
                    </ul>
          </nav>
          <div className={'d_nav_container__btns'}>
              {authUser ?
                  <div className={'d_nav_container__btns__auth'}>
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
              onHide={authenticationUser}
          />
      </header>
  )
}