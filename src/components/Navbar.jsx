import { useState } from "react";
import { IoMdMenu, IoMdBook, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "#home" },
  { id: 2, title: "Services", path: "#services" },
  { id: 3, title: "About", path: "#about" },
  { id: 4, title: "Steps", path: "#works" },
  { id: 5, title: "Pricing", path: "#pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-5 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center">
          <IoMdBook className="text-4xl inline" />
          <span className="ml-2 text-xl font-bold">IELTS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 border-b-2 transition border-transparent hover:text-orange-600"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          {isOpen ? (
            <IoMdClose
              className="text-4xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <IoMdMenu
              className="text-4xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-lg hover:text-orange-600"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
