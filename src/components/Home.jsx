import pic from "../../public/Profile.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { SiMysql } from "react-icons/si";

// import { SiSpringboot } from "react-icons/si";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-5"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I am a </h1>
              <ReactTyped
                className="text-red-700 font-bold px-1"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Highly motivated and detail-oriented Full Stack Developer with a
              strong foundation in Java, JavaScript, and modern full stack
              technologies. BCA graduate from Maharishi Dayanand University,
              passionate about building scalable, efficient, and user-friendly
              web applications. Adept at working in collaborative, agile teams
              and committed to continuous learning and implementing best coding
              practices across both frontend and backend development. Seeking to
              leverage my skills and knowledge to contribute to innovative
              projects and drive positive impact in the software development
              industry.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-center space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Home;
