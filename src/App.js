import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/add-product" component={AddProduct} />
          <Route path="/edit-product/:id" component={EditProduct} />
          <Route path="/" component={ProductList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
