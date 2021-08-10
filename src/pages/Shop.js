import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CollectionPreview from '../components/CollectionPreview'
import { SHOP_DATA } from '../data'

const Shop = () => {
    const collections = useSelector(state => state.shop.collections)
  
    return (
        <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    )
}

export default Shop
