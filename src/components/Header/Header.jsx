import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Logo.png";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mt-12 max-w-6xl mx-auto">
        <img className="w-[232px] h-[72px]" src={Logo} alt="" />
        <ul className="flex gap-4 py-5">
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
