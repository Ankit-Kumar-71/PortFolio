const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="my-5">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I am a Java Full Stack Developer with hands-on experience in
          React JS and Spring Boot. I have worked on simple web applications and
          have a good understanding of Java and JavaScript. I enjoy learning new
          technologies and want to grow by working on real-world projects.
        </p>
        <div />
        <div className="my-5">
          <h1 className="text-green-600 font-semibold text-xl">EDUCATION</h1>
          <div>
            Bachelor of Computer Application from Maharshi Dayanand University
            Rohtak Aug 2021 - May 2024 with CGPA:7.0
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-green-600 font-semibold text-xl">SKILLS</h1>
          <div>
            <p className="my-1">
              Programming Languages : HTML, CSS, JavaScript , Java .
            </p>
            <p className="my-1">
              Frontend Technologies : React.js , Bootstrap , Tailwind CSS ,
              Responsive Web Design
            </p>
            <p className="my-1">
              Backend Technologies : Express.js , Spring(Springboot) , Restful
              API Development , MVC Architecture
            </p>
            <p className="my-1">Databases : MySQL, MongoDB , PostgreSQL</p>
            <p className="my-1">
              IDEs & Code Editors: Spring Tool Shoot , Visual studio Code .
            </p>
            <p className="my-1">
              Tools & Platforms: Git , Github , Maven , Postman , Docker(Basics)  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
