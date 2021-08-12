import React from 'react'
import '../styles/collection-page.styles.scss'
import CollectionItem from '../components/CollectionItem'
import { useSelector } from 'react-redux'
const CollectionPage = ({ match }) => {
    const COLLECTION_ID_MAP = {
        hats: 1,
        sneakers: 2,
        jackets: 3,
        women: 4,
        mens: 5,
    }
    const collections = useSelector(state => state.shop.collections)
    const collection = collections.find(collection => collection.id === COLLECTION_ID_MAP[match.params.collectionId])
  
    return (
        <div className='collection-page'>
            <h2 className="title">{collections.title}</h2>
            <div className="items">
                {
                    collection.items?.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default CollectionPage
