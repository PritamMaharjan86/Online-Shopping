import './App.css';
import Routing from './routes/Routing';
import { Fragment } from 'react';
import { CartProvider } from './context/Cartcontext'; // ✅ import the provider

function App() {
  return (
    <Fragment>
      <CartProvider> {/* ✅ wrap the app in the provider */}
        <Routing />
      </CartProvider>
    </Fragment>
  );
}

export default App;