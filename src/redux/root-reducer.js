import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist'
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['cart']
}
const rootReducer = combineReducers({
  user: userReducer,
  cart:cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})
 
export default persistReducer(persistConfig, rootReducer);