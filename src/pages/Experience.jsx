const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Training",
      company: "DSDC Institute",
      duration: "July 2024 - Dec 2024",
      location: "Badarpur, New Delhi",
      responsibilities: [
        "Developed responsive and dynamic web applications using React.js, Tailwind CSS and Springboot.",
        "Implemented both frontend UI components (based on Figma designs) and backend logic to ensure seamless integration.",
        "Collaborated with design and development teams to deliver optimized, scalable and user-friendly solutions.",
        "Debugged and resolved issues across the full stack to ensure high performance and smooth functionality.",
        "Enhanced overall application speed, scalability and maintainability through code optimization and best practices.",
      ],
    },
    {
      title: "Freelancing ",
      company: "Self-employed",
      duration: "Jan 2025 - Present",
      location: "Work From Home",
      responsibilities: [
        "Developed custom websites for small businesses and entrepreneurs.",
        "Worked with clients to understand requirements and deliver tailored web solutions.",
        "Utilized HTML, CSS, and JavaScript and Java for project development.",
      ],
    },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.title}
                </h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
              </div>
              <p className="text-gray-400">{exp.duration}</p>
            </div>

            <ul className="list-disc pl-5 space-y-2">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="text-gray-600">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
