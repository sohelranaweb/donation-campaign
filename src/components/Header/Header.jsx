import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Logo.png";

const Header = () => {
  return (
    <div>
      <nav className="lg:flex md:flex flex-row lg:justify-between md:justify-around items-center mt-12 lg:max-w-6xl lg:mx-auto">
        <img
          className="lg:w-[232px] lg:h-[72px] lg:ml-0 ml-16"
          src={Logo}
          alt=""
        />
        <ul className="lg:flex  flex justify-center gap-4 py-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline text-lg font-bold"
                  : "text-lg font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline text-lg font-bold"
                  : "text-lg font-bold"
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline text-lg font-bold"
                  : "text-lg font-bold"
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
