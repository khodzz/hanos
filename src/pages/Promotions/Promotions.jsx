import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProducts from '../../Store/reducers/products/products'

function Promotions() {


  const dispatch = useDispatch()
  const  products = useSelector((state)=> state.products.data)
  // const favorites = useSelector((state) => state.favorites)
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
    <div className="promotions">
      <div className="promotions__container container">
        <div className="promotions__catalog">
          <h1 className="title">Promotions</h1>
          {/* <hr /> */}

          <div className="row">
            <div className="promotions__page-view-port"></div>
            <label className="nl">
              <select name="selectedFruit">
                <option className='promotions__options' value="nl">Relevance</option>
                <option className='promotions__options' value="en">Bestsellers</option>
                <option className='promotions__options' value="en">Title (a-z)</option>
                <option className='promotions__options' value="en">Title (z-a)</option>
                <option className='promotions__options' value="en">Price (low-high)</option>
                <option className='promotions__options' value="en">Price (high-low)</option>
              </select>
            </label>
            <div className="promotions__product-founded"></div>
            <div className="promotions__pages"></div>
          </div>
          
          <div className="promotions__catalog">
            <div className="promotoins__cart">
                 {/* <img src={products.img} alt="" className="promotions__cart_img" />
                <div className="promotions__cart_title">{getProducts}</div>
                <div className="promotions__cart_price">{products.price}</div>
                <div className="promotions__cart_review"></div>
                <p onClick={() => dispatch(toggleFavorites(item.id))} className="catalog__card-like" >
                  <svg width="21" height="18" viewBox="0 0 21 18" fill={`${favorites.data.includes(item.id) ? '#ff0000' : '#ffffff'}`} xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"  d="M2.31802 2.31802C4.07538 0.56066 6.92462 0.56066 8.68198 2.31802L10.5 4.13604L12.318 2.31802C14.0754 0.56066 16.9246 0.56066 18.682 2.31802C20.4393 4.07538 20.4393 6.92462 18.682 8.68198L10.5 16.864L2.31802 8.68198C0.56066 6.92462 0.56066 4.07538 2.31802 2.31802Z" stroke="#0F303F" stroke-linecap="round"/>
                  </svg>
                </p> */}

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Promotions
