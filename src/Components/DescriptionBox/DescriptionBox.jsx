import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that allows businesses and individuals to buy and sell products or services over the internet. These websites have become increasingly popular in recent years, offering a convenient and efficient way to conduct commercial transactions.</p>
        <p>
        E-commerce websites typically feature a catalog of products or services for sale. Each listing includes detailed information, such as product descriptions, prices, images, and availability status.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
