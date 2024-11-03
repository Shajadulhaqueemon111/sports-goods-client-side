import Banner from "../components/layouts/Banner";
import Categories from "../components/layouts/Category";
import ContactUS from "../components/layouts/ContactUS";
import Products from "../components/layouts/products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Categories></Categories>
      <ContactUS></ContactUS>
    </div>
  );
};

export default Home;
