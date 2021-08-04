import React from 'react'
import '../styles/collection-item.styles.scss'
import { Button } from '@material-ui/core';
import styled from 'styled-components'
const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>

            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">Php {price}</span>
            </div>
            <StyledButton style={{marginTop: -80,}}>Add to cart</StyledButton>
        </div>
    )
}

export default CollectionItem
const StyledButton = styled.button`
  background-color: black;
  width: 100px;
  padding: 2px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  > :hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: gray;
    cursor: pointer;
  }
`