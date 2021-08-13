import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/collection-overview.styles.scss'
import CollectionPreview from './CollectionPreview'

const CollectionOverview = () => {
    const collections = useSelector(state => state.shop.collections)
    const collectionsArray = Object.keys(collections).map(key => collections[key])
    return (
       <div className="collection-overview">
              {
                collectionsArray.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
       </div>
    )
}

export default CollectionOverview
