import Announcement from "./components/Announcement";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Subscription from "./components/Subscription";
import Products from "./components/Products";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Home />
      <Login />
      <Register />
    </div>
  );
};

export default App;
