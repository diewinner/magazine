import firstImg from '../../../../global/assets/img/14.png'
import secImg from '../../../../global/assets/img/15.png'
import thirdImg from '../../../../global/assets/img/16.png'
export const AvoneStylePage = () => {

    const mockTitle = {
        title: 'avone styles',
        description:'Choose Your Favorite Color'
    }
  return (
      <div className={'d_avone_container'}>
          <div className={'d_clothes_title_container'}>
              <div className={'d_clothes_title_container__title'}>{mockTitle.title.toUpperCase()}</div>
              <div className={'d_clothes_title_container__description'}>{mockTitle.description}</div>
          </div>
          <section className={'d_avone_main_info_container'}>
              <div className={'d_avone_main_info_item'}>
                  <img src={firstImg} alt={'img'}/>
              </div>
              <div className={'d_avone_main_info_item'}>
                  <img src={secImg} alt={'img'}/>
                  <div className={'d_avone_main_info_item__text'}>
                      <span>
                      SHOW WOMEN’S DRESS
                      </span>
                      <div className={'d_avone_main_info_item__text__border'}></div>
                  </div>
              </div>
              <div className={'d_avone_main_info_item__background'}></div>
              <div className={'d_avone_main_info_item__background__img'}>
                  <img src={thirdImg} alt={'img'}/>
              </div>
          </section>
      </div>
  )
}