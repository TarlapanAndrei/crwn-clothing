import React from 'react';
import SHOP_DATA from './shop.data.js'
import ColectionPreview from '../../components/previw-collection/collection-preview.component';
class ShopPage extends React.Component{
  constructor(){
    super()
    this.state = {
      collections: SHOP_DATA }
    }
 
  render(){
    const {collections} = this.state
    return(
      <div className="shop-page">
        {
          collections.map(({id,...otherColectionProps}) => (
            <ColectionPreview key={id} {...otherColectionProps}/>
          ))
        }
      </div>
    )
  }
 }
export default ShopPage;