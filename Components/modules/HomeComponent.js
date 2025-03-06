import Link from 'next/link'
import React from 'react'

export default function HomeComponent({title, img, price,meterage,roomCount, id}) {



  return (
    <div className="card">
    <img src={img} alt="House 6" className="card__img" />
    <h5 className="card__title">{title}</h5>
    <svg className="card__like">
      <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
    </svg>
    <div className="card__details">
      <svg className="card__icon">
        <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
      </svg>
      <p className="card__text">مالدیو</p>

      <svg className="card__icon">
        <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
      </svg>
      <p className="card__text">تعداد اتاق ها : {roomCount}</p>

      <svg className="card__icon">
        <use xlinkHref="img/sprite.svg#icon-expand"></use>
      </svg>
      <p className="card__text">{meterage}</p>

      <svg className="card__icon">
        <use xlinkHref="img/sprite.svg#icon-key"></use>
      </svg>
      <p className="card__text">{price} میلیون تومان</p>
    </div>

    <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
      مشاهده ملک
    </Link>
  </div>
  )
}
