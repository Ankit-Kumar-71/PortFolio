import {
  FaSquareXTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-700 text-white py-5">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-6">
              <a href="https://x.com/Ankit_Kumar_71" target="_blank" className="hover:text-blue-500 transition">
                <FaSquareXTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ankitkumar07" target="_blank" className="hover:text-blue-400 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/Ankit-Kumar-71" target="_blank" className="hover:text-pink-500 transition">
                <FaGithub size={24} />
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
