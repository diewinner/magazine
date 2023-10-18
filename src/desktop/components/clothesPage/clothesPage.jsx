export const ClothesPage = ({title, description, clothes}) => {
  return (
      <div className={'d_clothes_container'}>
          <div className={'d_clothes_title_container'}>
              <div className={'d_clothes_title_container__title'}>{title}</div>
              <div className={'d_clothes_title_container__description'}>{description}</div>
          </div>
          <div className={'d_clothes_info_container'}>
              {clothes.map((item) => {
                  return (
                      <div key={item.id} className={'d_clothes_info_item'}>
                              <div className={'d_clothes_info_item__img'}>
                                  <img src={item.image} alt={'image'}/>
                              </div>
                              <div className={'d_clothes_info_item__text'}>
                                <div className={'d_clothes_info_item__text__title'}>
                                    {item.title.substr(0,10)}
                                </div>
                                <div className={'d_clothes_info_item__text__desc'}>
                                    {item.description.substr(0,27).toUpperCase()}
                                </div>
                                <div className={'d_clothes_info_item__text__price'}>
                                    {item.price + ' $'}
                                </div>
                              </div>
                      </div>
                      )

              })}
          </div>
      </div>
  )
}