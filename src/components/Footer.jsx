// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-7 mt-auto">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
          {/* Footer Text */}
          <div className="border-t border-gray-600 w-full pt-4 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2025 Ankit Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
