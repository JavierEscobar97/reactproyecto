
import './App.css';
import Products from './components/Products'
import NavBar from './components/NavBar'
import CartView from './components/CartView'
import CartProduct from './components/CartProduct'

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Products/> */}
      <CartView/>
      {/* <CartProduct/> */}
      {/* <Productos/> */}
      
    </div>
  );
}

export default App;
