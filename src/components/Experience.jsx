const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer training",
      company: "DSDC institute",
      duration: "July 2024 - Dec 2024",
      location: "Badarpur New Delhi",
      responsibilities: [
        "Developed responsive and user-friendly web applications using React.js and Tailwind CSS.",
        "Collaborated with the design team to implement UI components based on Figma designs.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      title: "Beckend Developer training",
      company: "DSDC institute",
      duration: "July 2024 - Dec 2024",
      location: "Badarpur New Delhi",
      responsibilities: [
        "Contributed to building website logic using Java and JavaScript to support dynamic functionality.",
        "Assisted in identifying and resolving bugs, ensuring smooth and error-free application performance.",
        "Collaborated with the development team to streamline workflows and deliver user-friendly solutions."
      ],
    },
    {
      title: "Freelancing ",
      company: "Self-employed",
      duration: "Jan 2025 - Present",
      location: "Remote",
      responsibilities: [
        "Developed custom websites for small businesses and entrepreneurs.",
        "Worked with clients to understand requirements and deliver tailored web solutions.",
        "Utilized HTML, CSS, and JavaScript and Java for project development.",
      ],
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
              </div>
              <p className="text-gray-400">{exp.duration}</p>
            </div>

            <ul className="list-disc pl-5 space-y-2">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="text-gray-600">{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
