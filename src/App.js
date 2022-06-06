import "./App.css";
import {Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import {Products} from "./components/Products";
import {Product} from "./components/Products/Product"
// import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      {
        // Code here
      }
      {/* <Navbar/> */}
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route  path="/product" element={<Product/>}/>
          
      </Routes>
    </div>
  );
}

export default App;
