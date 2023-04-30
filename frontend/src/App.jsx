import Announcement from "./components/Announcement";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Slider from "./components/Slider";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      {/* <Slider />
      <Categories /> */}
      <Products />
    </div>
  );
};

export default App;
