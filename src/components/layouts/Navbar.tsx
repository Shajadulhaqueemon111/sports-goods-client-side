import { Link, NavLink } from "react-router-dom";

import { TiShoppingCart } from "react-icons/ti";
import { useAppSelector } from "../../redux/fetaure/hooks";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = () => {
  const products = useAppSelector((store) => store.cart.products);
  const navLink = (
    <>
      <li>
        <NavLink className=" font-bold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className=" font-bold" to="/all-products">
          All-Products
        </NavLink>
      </li>
      <li>
        <NavLink className=" font-bold" to="/manage-product">
          Manage-Products
        </NavLink>
      </li>
      <li>
        <NavLink className=" font-bold" to="/aboute-us">
          Aboute Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar z-10 max-w-screen-xl  bg-opacity-30 bg-black text-sky-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <li className="relative">
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block text-white hover:bg-white hover:text-black transition duration-300"
              to={"/cart"}
            >
              <TiShoppingCart size={26} />
            </Link>
            <span className="rounded-full absolute top-[-10px] left-[20px] bg-white text-black text-center w-[20px] h-[20px] flex items-center justify-center">
              {products.length}
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
