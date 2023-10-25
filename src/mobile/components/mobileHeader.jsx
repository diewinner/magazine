import { CSSTransition } from 'react-transition-group';
import {HeartFavoriteSvg} from "../../global/assets/img/svg/heartFavorite_icon";
import {CartSvg} from "../../global/assets/img/svg/cart_icon";
import {navigation} from "../../global/const/titles";
import {BurgerSvg} from "../../global/assets/img/svg/BurgerSvg";
import {useDispatch, useSelector} from "react-redux";
import {offMenuAction, onMenuAction} from "../../global/store/burgerReducer";
import {ExitSvg} from "../../global/assets/img/svg/exitSvg";

export const MobileHeader = () => {
    const dispatch = useDispatch()

    const menuStatus = useSelector(state => state.menu.menu)

    function MenuOn() {
        if(menuStatus === false) {
            dispatch(onMenuAction(true))
        } else {
            dispatch(offMenuAction(false))
        }

    }

    return (
        <header className={'m_header'}>
            <CSSTransition in={menuStatus} timeout={300} classNames="menu-animation">
                {menuStatus === false ?
                <div  className={'m_burger_btn'} onClick={() => MenuOn()}>
                        <BurgerSvg width={20} height={20} />
                </div>
                    :
                    <div className={'m_header_container'}>
                    <div className={'m_header_logo'} onClick={() => MenuOn()}>
                        <ExitSvg width={40} height={40}/>
                    </div>
                    <nav className={'m_nav_container'}>
                        <ul className={'m_nav_container__navigation'}>
                            {navigation.map((item) => (
                                <li className={'m_nav_container__navigation__item'}>{item.toUpperCase()}</li>
                            ))}
                        </ul>
                    </nav>
                    <div className={'m_nav_container__btns'}>
                        <div className={'m_nav_container__btns__item__favorite'}>
                            <HeartFavoriteSvg/>
                        </div>
                        <div className={'m_nav_container__btns__item'}>
                            <CartSvg/>
                        </div>
                    </div>
            </div>
                }
            </CSSTransition>
        </header>
    );
}