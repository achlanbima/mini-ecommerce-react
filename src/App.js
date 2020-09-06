import React from 'react';
import './App.css';
import {Container} from 'shards-react'
import ProductList from './components/product-list/ProductList';

function App() {
  
  return (
    <Container>
      <h1 className="mt-3 mb-3">Products</h1>
      <ProductList/>
    </Container>
  );
}

export default App;
