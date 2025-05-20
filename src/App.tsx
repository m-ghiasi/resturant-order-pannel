import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Drivers from "./pages/Drivers";
import Resturants from "./pages/Resturants";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />}>
          
          </Route>
          <Route path="/products" element={<Products />}>
            
          </Route>
          <Route path="/orders" element={<Orders />}>
          
          </Route>
          <Route path="/drivers" element={<Drivers />}>
          
          </Route>
          <Route path="/resturants" element={<Resturants />}>
            
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
