import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/collection-overview.styles.scss'
import CollectionPreview from './CollectionPreview'

const CollectionOverview = () => {
    const collections = useSelector(state => state.shop.collections)
    return (
       <div className="collection-overview">
              {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
       </div>
    )
}

export default CollectionOverview
