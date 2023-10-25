import  {VkSvg} from '../../global/assets/img/svg/vk_icon.jsx'
import  {FacebookSvg} from '../../global/assets/img/svg/facebook_icon.jsx'
import  {InstSvg} from '../../global/assets/img/svg/inst_icon.jsx'
import  {LocationSvg} from '../../global/assets/img/svg/location_icon.jsx'


export const TabletFooter = () => {
    return (
        <footer className={'t_footer_container'}>
                <div className={'t_footer_wrapper'}>
                    <div className={'t_footer_contact'}>
                        <div className={'t_footer_contact__info'}>
                                We earned a reputation of being good at what we do. Let us take your online shop to new
                                dimension in success!
                        </div>
                        <div className={'t_footer_contact__social_info'}>
                            <div className={'t_footer_contact__social_info__location'}>
                                <div className={'t_footer_contact__social_info__location__svg'}>
                                    <LocationSvg/>
                                </div>
                                <div>Kazan, Sagitov 777</div>
                            </div>
                            <div className={'t_footer_contact__social_info__text'}>
                                <div className={'t_footer_contact__social_info__text__email'}>
                                    workilnouer@gmail.com
                                </div>
                                <div className={'t_footer_contact__social_info__text__other'}>
                                    123456789
                                </div>
                            </div>
                            <div className={'t_footer_contact__social_info__btns'}>
                                <div className={'t_footer_contact__social_info__btns__svg'}><FacebookSvg width={'25px'} height={'25px'}/></div>
                                <div className={'t_footer_contact__social_info__btns__svg'}><VkSvg width={'25px'} height={'25px'}/></div>
                                <div className={'t_footer_contact__social_info__btns__svg'}><InstSvg width={'25px'} height={'25px'}/></div>
                            </div>
                        </div>
                    </div>
                    <div className={'t_footer_btns'}>
                        <div className={'t_footer_btns__title'}>
                            <div className={'t_footer_btns__title__text'}>
                                RECIVE EMAIL UPDATES
                            </div>
                            <div className={'t_footer_btns__title__input'}>
                                <input  type={"email"}
                                         placeholder={'Your email Address'}/>
                                <a className={'t_footer_btns__title__input__btn'}>JOIN</a>
                            </div>
                        </div>
                        <div className={'t_footer_btns__info'}>
                            <div className={'t_footer_btns__info__item'}>
                                <div className={'t_footer_btns__info__item__title'}>
                                    SHOP
                                </div>
                                <ul className={'t_footer_btns__info__item__text'}>
                                    <li>Shop</li>
                                    <li>Collection</li>
                                    <li>Outlet</li>
                                    <li>Lookbook</li>
                                </ul>
                            </div>
                            <div className={'t_footer_btns__info__item'}>
                                <div className={'t_footer_btns__info__item__title'}>
                                    HELP
                                </div>
                                <ul className={'t_footer_btns__info__item__text'}>
                                    <li>FAQ</li>
                                    <li>Privecy Policy</li>
                                    <li>Tearms and conditions</li>
                                    <li>Return and Exchanges</li>
                                </ul>
                            </div>
                            <div className={'t_footer_btns__info__item'}>
                                <div className={'t_footer_btns__info__item__title'}>
                                    ABOUT
                                </div>
                                <ul className={'t_footer_btns__info__item__text'}>
                                    <li>Journal</li>
                                    <li>Our Story</li>
                                    <li>Contact</li>
                                    <li>Store Location</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={'t_footer_company'}>
                        Copyright © 2020 . Shop Wear All rights reserved
                    </div>
        </footer>
    )
}