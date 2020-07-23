import React from 'react';
import './HeadComponent'
import HeadComponent from './HeadComponent';
import ItemList from './ItemList';
import Bill from './Bill';
import Delivery from './Delivery';
import FootComponent from './FootComponent'

function App() {
  return (
    <div style={{
      maxWidth:'100%',
      margin:'50px'
    }}>
        <HeadComponent />
        <ItemList />
        <Delivery />
        <FootComponent />
    </div>
    
  );
}

export default App;
