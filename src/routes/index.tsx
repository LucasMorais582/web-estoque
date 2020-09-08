import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductShow from '../pages/ProductShow';
import ProductList from '../pages/ProductList';
import ProductCreate from '../pages/ProductCreate';
import ProductEdit from '../pages/ProductEdit';

import CategoryShow from '../pages/CategoryShow';
import CategoryList from '../pages/CategoryList';
import CategoryCreate from '../pages/CategoryCreate';
import CategoryEdit from '../pages/CategoryEdit';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={ ProductList } />
    <Route path='/product/:id' component={ ProductShow } />
    <Route path='/product-create' component={ ProductCreate } />
    <Route path='/product-edit/:id' component={ ProductEdit } />
    <Route path='/category' component={ CategoryList } />
    <Route path='/category/:id' component={ CategoryShow } />
    <Route path='/category-create' component={ CategoryCreate } />
    <Route path='/category-edit/:id' component={ CategoryEdit } />
  </Switch>
);

export default Routes;

