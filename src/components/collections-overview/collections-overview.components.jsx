import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../previw-collection/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) =>(
  <div className="collection-overview">
    {
      collections.map(({id,...otherProps}) =>(
        <CollectionPreview key={id}  {...otherProps}/>
      ))
    }
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview);