import summerImage from "../../public/Summer-Collection.png";
import portfolioImage from "../../public/Portfolio.png";

const projects = [
  {
    title: "Portfolio",
    description: "A portfolio website built using React.js and Tailwind CSS.",
    image: portfolioImage,
    link: "https://github.com/Ankit-Kumar-71/portfolio",
  },
  {
    title: "Summer-Collection",
    description: "An E-commerce website built using React.js and Tailwind CSS.",
    image: summerImage,
    link: "https://github.com/Ankit-Kumar-71/summer-collection",
  }
];

const Portfolio = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-4">
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        My Portfolio
      </h1>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Project Info */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-white text-sm">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg shadow-lg transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
