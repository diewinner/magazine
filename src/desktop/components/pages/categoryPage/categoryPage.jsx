import firstImg from '../../../assets/img/2.png'
import secImg from '../../../assets/img/3.png'
import thirdImg from '../../../assets/img/4.png'
import fourImg from '../../../assets/img/14.png'

export const CategoryPage = () => {
  return (
      <div className={'d_category_container'}>
          <div className={'d_category_left_side'}>
              <div className={'d_category_left_side__item'}><img src={firstImg} alt={'img'}/></div>
              <div className={'d_category_left_side__item_other'}>
                  <div className={'d_category_left_side__item'}><img src={secImg} alt={'img'}/></div>
                  <div className={'d_category_left_side__item'}><img src={thirdImg} alt={'img'}/></div>
              </div>
          </div>
          <div>
              <div className={'d_category_right_side'}>
                  <a className={'d_category_right_side__btn'}>CATEGORY NAME</a>
                  <div className={'d_category_right_side__img_container'}>
                      <img src={fourImg} alt={'img'}/>
                  </div>
              </div>
          </div>
      </div>
  )
}