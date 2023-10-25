import firstImg from '../../../global/assets/img/2.png'
import secImg from '../../../global/assets/img/3.png'
import thirdImg from '../../../global/assets/img/4.png'
import fourImg from '../../../global/assets/img/14.png'

export const TabletCategoryPage = () => {
  return (
      <div className={'t_category_container'}>
          <div className={'t_category_left_side'}>
              <div className={'t_category_left_side__item'}><img src={firstImg} alt={'img'}/></div>
              <div className={'t_category_left_side__item_other'}>
                  <div className={'t_category_left_side__item'}><img src={secImg} alt={'img'}/></div>
                  <div className={'t_category_left_side__item'}><img src={thirdImg} alt={'img'}/></div>
              </div>
          </div>
          <div>
              <div className={'t_category_right_side'}>
                      <a className={'t_category_right_side__btn'}>CATEGORY NAME</a>
                      <img src={fourImg} alt={'img'}/>
              </div>
          </div>
      </div>
  )
}