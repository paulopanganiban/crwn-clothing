import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionOverview from '../components/CollectionOverview'
import CollectionPreview from '../components/CollectionPreview'
import { SHOP_DATA } from '../data'
import CollectionPage from './CollectionPage'

const Shop = ({ match }) => {
    
    return (
        <div className="shop-page">
          <Route exact path={`${match.path}`} component={CollectionOverview}/>
          <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}

export default Shop
