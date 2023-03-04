import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Cart from './components/Cart';
import Details from './components/Details';
import Payment from './components/Payment';
import Order from './components/Order';


function App() {
  return (
    <div className="App">
       {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
    </div>
  );
}

export default App;
