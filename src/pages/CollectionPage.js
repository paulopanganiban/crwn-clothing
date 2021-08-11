import React from 'react'
import '../styles/collection-page.styles.scss'
import CollectionItem from '../components/CollectionItem'
import { useSelector } from 'react-redux'
const CollectionPage = ({ match, ownProps }) => {
    const COLLECTION_ID_MAP = {
        hats: 1,
        sneakers: 2,
        jackets: 3,
        women: 4,
        mens: 5,
    }
    const collections = useSelector(state => state.shop.collections)
    const collection = collections.find(collection => collection.id === COLLECTION_ID_MAP[match.params.collectionId])
    console.log(collection)
    return (
        <div className='collection-page'>
            <h2>CATEGORY</h2>
        </div>
    )
}

export default CollectionPage
