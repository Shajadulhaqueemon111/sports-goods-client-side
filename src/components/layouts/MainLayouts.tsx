import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
