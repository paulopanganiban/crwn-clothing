import React, { useState } from 'react'
import MenuItem from './MenuItem'
import '../styles/directory.styles.scss'
import { useSelector } from 'react-redux'
const Directory = () => {
    const state = useSelector(state => state.directory.sections)
    return (
        <div className="directory-menu">
            {state.map(({ title, imageUrl, id, size, linkUrl }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
            ))}
        </div>
    )
}

export default Directory
