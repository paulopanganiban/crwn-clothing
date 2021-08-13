import React from 'react'
import '../styles/collection-page.styles.scss'
import CollectionItem from '../components/CollectionItem'
import { useSelector } from 'react-redux'
const CollectionPage = ({ match }) => {
    const collections = useSelector(state => state.shop.collections)
    const collection = useSelector(state => state.shop.collections[match.params.collectionId])
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
