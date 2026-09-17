import { motion, useScroll, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/main.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaLaravel,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiWordpress,
  SiMysql,
  SiSpringboot,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

/* ================= TECH STACK ================= */

const techStacks = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "WordPress", icon: SiWordpress },
  { name: "PHP", icon: FaPhp },
  { name: "Java", icon: FaJava },
  { name: "Laravel", icon: FaLaravel },
  { name: "Express.js", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: FaGitAlt },
];

/* ================= HERO ANIMATION ================= */

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

/* ================= EDUCATION DATA ================= */

const educationData = [
  {
    year: "2020 - 2021",
    title: "12th Standard",
    org: "Delhi, India",
    desc: "Completed 12th grade from CBSE Board in Science stream, with a strong foundation in communication, creativity and analytical thinking.",
  },
  {
    year: "2021 - 2024",
    title: "Bachelor of Computer Applications",
    org: "Haryana, India",
    desc: "Completed BCA (Bachelor of Computer Applications) from Faridabad, developing skills in web development, programming and software applications.",
  },
  {
    year: "2024",
    title: "Full Stack Web Developer Certification",
    org: "Badarpur, India",
    desc: "Completed a 6-month Full Stack Development course, gaining hands-on experience in Frontend and Backend technologies, creating responsive and dynamic web applications.",
  },
];

/* ================= EXPERIENCE DATA ================= */

const experienceData = [
  {
    year: "2024 - Present",
    title: "Web Developer",
    org: "Freelancing Projects",
    desc: "Executed multiple freelance web development projects, delivering custom websites for clients using WordPress, Elementor, HTML, CSS, JavaScript, and React.js. Specialized in responsive design, UI/UX improvements, and client-focused solutions that enhance online presence.",
  },
  {
    year: "2026 - Present",
    title: "Web Developer",
    org: "ClickCatchers Pvt. Ltd",
    desc: "Currently working as a Web Developer, responsible for designing and developing responsive, dynamic websites using WordPress, Elementor, HTML, CSS, JavaScript, and PHP. Focused on building engaging user interfaces and seamless user experiences while implementing modern web development practices.",
  },
];

/* ================= PROFESSIONAL TIMELINE ================= */

const ProfessionalTimeline = ({ title, data }) => {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#0F172A]">
      {/* Heading */}

      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 px-4 text-[#E5E7EB]">
        My <span className="text-sky-400">{title}</span>
      </h2>

      <div className="max-w-6xl mx-auto relative px-4 sm:px-6">
        {/* Center Line - Desktop */}

        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px]
          bg-gradient-to-b from-transparent via-sky-400/40 to-transparent"
        />

        <div className="space-y-10 sm:space-y-16 lg:space-y-20">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}

              <span
                className="hidden md:block absolute left-1/2
                -translate-x-1/2 w-4 h-4 rounded-full
                bg-sky-400
                shadow-[0_0_18px_rgba(56,189,248,0.8)]"
              />

              {/* Timeline Card */}

              <div
                className="w-full md:w-[45%]
                bg-slate-800/80 backdrop-blur-xl
                border border-white/10 rounded-2xl
                p-5 sm:p-6 md:p-8
                transition
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]"
              >
                {/* Year */}

                <span
                  className="inline-block text-xs sm:text-sm
                  px-3 sm:px-4 py-1 rounded-full
                  bg-sky-400/10 text-sky-400 mb-3"
                >
                  {item.year}
                </span>

                {/* Title */}

                <h3 className="text-lg sm:text-xl font-semibold text-[#E5E7EB]">
                  {item.title}
                </h3>

                {/* Organization */}

                <p className="text-[#94A3B8] text-sm mt-1">
                  {item.org}
                </p>

                {/* Description */}

                <p
                  className="text-[#94A3B8]
                  mt-4 text-sm sm:text-base
                  leading-relaxed"
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= HOME ================= */

const Home = () => {
  const { scrollYProgress } = useScroll();

  /* ================= SCROLL PROGRESS ================= */

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      className="bg-[#0F172A]
      text-[#E5E7EB]
      overflow-hidden
      relative"
    >
      {/* ================= SCROLL PROGRESS BAR ================= */}

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0
        h-[3px]
        bg-sky-400
        origin-left
        z-50"
      />

      {/* ================= HERO ================= */}

      <div
        className="min-h-screen
        flex items-center
        px-4 sm:px-6
        py-16 sm:py-20
        lg:py-0"
      >
        <div
          className="max-w-7xl w-full mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-12 lg:gap-16
          items-center"
        >
          {/* ================= HERO CONTENT ================= */}

          <motion.div
            variants={heroContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="text-center md:text-left"
          >
            {/* Main Heading */}

            <motion.h1
              variants={heroItem}
              className="text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight"
            >
              Hi, I’m{" "}
              <span className="text-sky-400 whitespace-nowrap">
                Ankit Kumar
              </span>
            </motion.h1>

            {/* Typewriter */}

            <motion.h2
              variants={heroItem}
              className="mt-4
              text-lg
              sm:text-xl
              md:text-2xl
              text-emerald-400
              min-h-[32px]"
            >
              <Typewriter
                words={[
                  "WEB DEVELOPER",
                  "FRONTEND DEVELOPER",
                  "BACKEND DEVELOPER",
                  "WORDPRESS DEVELOPER",
                ]}
                loop
                cursor
              />
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={heroItem}
              className="mt-6
              text-sm
              sm:text-base
              md:text-lg
              text-[#94A3B8]
              max-w-xl
              mx-auto md:mx-0
              leading-relaxed"
            >
              Professional Web Developer with experience in designing,
              developing and maintaining scalable web applications using
              modern front-end and back-end technologies. Skilled in
              building responsive user interfaces, developing RESTful APIs,
              managing databases and implementing secure authentication
              and authorization systems.
            </motion.p>
          </motion.div>

          {/* ================= PROFILE IMAGE ================= */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="flex
            justify-center
            order-first md:order-last"
          >
            <img
              src={img}
              alt="Ankit Kumar profile"
              className="w-52
              sm:w-64
              md:w-72
              lg:w-80
              max-w-full
              rounded-3xl
              border-2
              border-sky-400
              shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= STATS ================= */}

      <div
        className="max-w-6xl mx-auto
        px-4 sm:px-6
        py-20 sm:py-28 lg:py-32
        grid grid-cols-2
        md:grid-cols-4
        gap-4 sm:gap-6 lg:gap-8"
      >
        {[
          {
            value: "20+",
            label: "Projects",
          },
          {
            value: "6 Month+",
            label: "Experience",
          },
          {
            value: "100%",
            label: "Satisfaction",
          },
          {
            value: "7+",
            label: "Tech Stack",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.05,
            }}
            className="bg-slate-800/70
            border border-white/10
            rounded-xl
            p-4 sm:p-6
            text-center"
          >
            <h3
              className="text-2xl
              sm:text-3xl
              font-bold
              text-sky-400"
            >
              {item.value}
            </h3>

            <p
              className="text-[#94A3B8]
              mt-1
              text-xs
              sm:text-sm
              md:text-base"
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================= EDUCATION ================= */}

      <ProfessionalTimeline
        title="Education"
        data={educationData}
      />

      {/* ================= EXPERIENCE ================= */}

      <ProfessionalTimeline
        title="Experience"
        data={experienceData}
      />

      {/* ================= TECH STACK ================= */}

      <div
        className="max-w-7xl mx-auto
        px-4 sm:px-6
        py-20 sm:py-28 lg:py-32"
      >
        {/* Heading */}

        <h2
          className="text-3xl
          sm:text-4xl
          font-bold
          text-center
          mb-12 sm:mb-16"
        >
          My{" "}
          <span className="text-sky-400">
            Tech Stack
          </span>
        </h2>

        {/* Tech Cards */}

        <div
          className="grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-7
          gap-4
          sm:gap-6
          lg:gap-8"
        >
          {techStacks.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-slate-800/70
              border border-white/10
              rounded-xl
              p-4 sm:p-6
              text-center
              transition"
            >
              {/* Icon */}

              <tech.icon
                className="text-emerald-400
                mx-auto
                mb-3
                text-3xl
                sm:text-4xl"
              />

              {/* Name */}

              <p
                className="text-[#94A3B8]
                text-xs
                sm:text-sm
                font-medium"
              >
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;