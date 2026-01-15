import pic from "../../public/NavbarPhoto.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo Image */}
        <div className="flex space-x-2 text-white items-center">
          <img src={pic} className="h-12 w-12 rounded-full" alt="logo" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Ankit Kumar
            <p className="text-sm">Java Full Stack Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-5">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="text-white hover:text-gray-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-gray-800 flex flex-col items-center gap-4 py-4 mt-2 rounded-lg shadow-md">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="text-white hover:text-gray-400 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
