import './App.css';
import { Switch , Route , Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

//Components

  import Store from './components/Store';
  import ProductsDetails from './components/ProductsDetails';
  import CardContextProvider from './Context/CardContextProvider';
  import Navbar from './components/Shared/Navbar';
  import ShopCart from './components/ShopCart';

  //redux
  import store from './redux/store';
  
function App() {
  return (
      <Provider store={store}>
        <Navbar />
         <Switch>
           <Route path='/products/:id' component={ProductsDetails} />
          <Route path='/products' component={Store} />
          <Route path='/cart' component={ShopCart} />
          <Redirect to='/products' />
        </Switch>
      </Provider>
  );
}

export default App;
