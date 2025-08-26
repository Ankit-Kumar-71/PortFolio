import pic from "../../public/selfImage1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10">
      {/* Section Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Hi, I am a Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Highly motivated and detail-oriented Full Stack Developer with a
            strong foundation in Java, JavaScript, and modern full-stack
            technologies. I am passionate about building scalable, efficient,
            and user-friendly web applications. Adept at working in
            collaborative, agile teams, and committed to continuous learning and
            best coding practices across both frontend and backend development.
            Seeking to leverage my skills to contribute to innovative projects
            and create positive impact.
          </p>
          {/* Action Button */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 order-2 md:order-2">
          <img
            src={pic}
            alt="Developer Picture"
            className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-xl mx-auto shadow-2xl transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
