import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-700 text-white py-5">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-6">
              <a href="#" className="hover:text-blue-500 transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                <FaLinkedinIn size={24} />
              </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 ">
              <p className="text-sm text-gray-400">
                &copy; 2025 Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
