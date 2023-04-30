import Announcement from "./components/Announcement";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Subscription from "./components/Subscription";
import Products from "./components/Products";
import Slider from "./components/Slider";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <ProductList />
    </div>
  );
};

export default App;
