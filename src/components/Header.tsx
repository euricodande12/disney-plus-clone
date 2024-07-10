import logo from "../assets/images/logo.png";
import HeaderItem from "./HeaderItem";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { menu } from "../data/data";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="flex justify-between items-center p-5">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <ul className="hidden md:flex space-x-4 list-none">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.label} Icon={item.icon} />
          ))}
        </ul>
        <ul className="flex md:hidden space-x-6 list-none">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-5 bg-[#121212] border-[1px] border-gray-700 p-3">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={index}
                        name={item.label}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </ul>
      </div>
      <img
        className="w-[40px] rounded-full"
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="user"
      />
    </header>
  );
};

export default Header;
