import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CollectionOverview from '../components/CollectionOverview'
import CollectionPreview from '../components/CollectionPreview'
import { SHOP_DATA } from '../data'

const Shop = () => {
    const collections = useSelector(state => state.shop.collections)
  
    return (
        <div className="shop-page">
          <CollectionOverview/>
        </div>
    )
}

export default Shop
