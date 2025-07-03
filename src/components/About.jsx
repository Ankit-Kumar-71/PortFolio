
const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="my-5">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I am Ankit Kumar, a passionate Full Stack developer with a keen
          eye for Full Stack Development. With a background in IT, I strive to
          create impactful and visually stunning Software solutions that leave a
          lasting impression.
        </p>
        <div />
        <div className="my-5">
          <h1 className="text-green-600 font-semibold text-xl">
            Education & Training
          </h1>
          <div>
            Bachlor of Computer Application from Maharishi Dayanand University
            Haryana 2021-2024 .
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-green-600 font-semibold text-xl">
            Skills & Expertise
          </h1>
          <div>
            <p className="my-1">
              Programming Languages : HTML, CSS, JavaScript , Java .
            </p>
            <p className="my-1">
              Frameworks/Libraries : React.js , Bootstrap , Tailwind CSS , Express.js , Spring(Springboot).
            </p>
            <p className="my-1">Databases : MySQL, MongoDB , PostgreSQL</p>
            <p className="my-1">
              Tools & Technologies: Git , Maven , Postman , Docker , Spring Tool Shoot , Visual studio Code .
            </p>
            <p className="my-1">Other Skills : responsive design, debugging , OOPs concepts , Exception Handling</p>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-green-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <p>
            My mission is to leverage my skills and creativity to deliver
            innovative Software Developer solutions that exceed client
            expectations and contribute positively to the digital landscape. I
            am committed to continuous learning and growth, always seeking new
            challenges and opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
