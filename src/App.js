import './App.css';
import Routing from './routes/Routing';
import { Fragment } from 'react';
import { CartProvider } from './context/Cartcontext'; // ✅ import the provider

function App() {
  return (
    <Fragment>
      <CartProvider> 
        <Routing />
      </CartProvider>
    </Fragment>
  );
}

export default App;