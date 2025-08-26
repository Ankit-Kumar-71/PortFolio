import pic from "../../public/Profile.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo Image */}
        <div className=" flex space-x-2 text-white">
          <img src={pic} className="h-12 w-12 rounded-full" alt="" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Ankit Kumar
            <p className="text-sm">Full Stack Developer</p>
          </h1>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-5">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/experience" className="text-white hover:text-gray-400">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-white hover:text-gray-400">
              PortFolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
