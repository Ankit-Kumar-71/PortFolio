import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiSpring,
} from "react-icons/si";

const About = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-4">
      <div className="space-y-10">
        {/* Introduction Section */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-800 mb-5">
            About Me
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hello! I’m a passionate Full Stack Developer with hands-on
            experience in both Frontend and Backend Technologies. I enjoy
            building web applications and solving real-world problems using my
            knowledge of Java and JavaScript. I’m always eager to learn new
            technologies and continuously grow by working on challenging
            projects.
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-600 mb-3">
            Education
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Bachelor of Computer Applications</span>{" "}
            from Maharshi Dayanand University, Rohtak (Aug 2021 - May 2024)
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-600 mb-3">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Technologies */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Frontend Technologies
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaHtml5 className="text-orange-500 mr-2" /> HTML
                </li>
                <li className="flex items-center">
                  <FaCss3Alt className="text-blue-500 mr-2" /> CSS
                </li>
                <li className="flex items-center">
                  <FaJs className="text-yellow-500 mr-2" /> JavaScript
                </li>
                <li className="flex items-center">
                  <FaReact className="text-blue-400 mr-2" /> React.js
                </li>
                <li className="flex items-center">
                  <SiTailwindcss className="text-teal-400 mr-2" /> Tailwind CSS
                </li>
                <li className="flex items-center">
                  <SiBootstrap className="text-purple-500 mr-2" /> Bootstrap
                </li>
              </ul>
            </div>

            {/* Backend Technologies */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Backend Technologies
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaJava className="text-red-600 mr-2" /> Java
                </li>
                <li className="flex items-center">
                  <SiSpring className="text-green-600 mr-2" /> Spring
                </li>
                <li className="flex items-center">
                  <SiSpringboot className="text-green-600 mr-2" /> Spring Boot
                </li>
              </ul>
            </div>

            {/* Databases and Tools */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Databases & Tools
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <SiMysql className="text-green-700 mr-2" /> MySQL
                </li>
                <li className="flex items-center">
                  <SiMongodb className="text-green-700 mr-2" /> MongoDB
                </li>
                <li className="flex items-center">
                  <SiPostgresql className="text-blue-600 mr-2" /> PostgreSQL
                </li>
                <li className="flex items-center">
                  <FaGithub className="text-black mr-2" /> Git & GitHub
                </li>
                <li className="flex items-center">
                  <FaDocker className="text-blue-500 mr-2" /> Docker (Basics)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
