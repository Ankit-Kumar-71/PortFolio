import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const resume = "/Ankit_Kumar_Web_Developer_Resume.pdf";

/* =====================
   SCROLL PROGRESS BAR
===================== */

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-sky-400 origin-left z-50"
    />
  );
}

/* =====================
   ANIMATION PRESETS
===================== */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================
   DATA
===================== */

const skills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 88 },
  { name: "JavaScript", value: 82 },
  { name: "WordPress", value: 85 },
  { name: "PHP", value: 78 },
  { name: "Java", value: 72 },
  { name: "SQL", value: 75 },
];

const professionalSkills = [
  "UI / UX Design",
  "Responsive Web Design",
  "Performance Optimization",
  "SEO Friendly Code",
  "API Integration",
  "Animation & Interaction",
];

const tools = [
  "VS Code",
  "GitHub",
  "Figma",
  "Postman",
  "WordPress",
  "IntelliJ IDEA",
];

const stats = [
  {
    label: "Days I Code",
    value: "300+",
  },
  {
    label: "Projects Completed",
    value: "40+",
  },
  {
    label: "Happy Clients",
    value: "25+",
  },
];

/* =====================
   COMPONENT
===================== */

export default function About() {
  const handleResume = () => {
    window.open(resume, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* =====================
          SCROLL PROGRESS
      ===================== */}

      <ScrollProgressBar />

      <section
        className="relative min-h-screen
        bg-[#0F172A]
        text-[#E5E7EB]
        overflow-hidden"
      >
        {/* =====================
            BACKGROUND GLOW
        ===================== */}

        <div
          className="absolute
          -top-40
          -left-40
          w-[250px]
          h-[250px]
          sm:w-[350px]
          sm:h-[350px]
          lg:w-[400px]
          lg:h-[400px]
          bg-sky-400/20
          blur-[100px]
          lg:blur-[120px]"
        />

        <div
          className="absolute
          top-1/3
          -right-40
          w-[250px]
          h-[250px]
          sm:w-[350px]
          sm:h-[350px]
          lg:w-[400px]
          lg:h-[400px]
          bg-green-500/20
          blur-[100px]
          lg:blur-[120px]"
        />

        {/* =====================
            MAIN CONTAINER
        ===================== */}

        <div
          className="relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-20
          sm:py-24
          lg:py-28"
        >
          {/* =====================
              HEADER
          ===================== */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-120px",
            }}
            className="text-center
            mb-16
            sm:mb-20
            lg:mb-24"
          >
            {/* Small Heading */}

            <motion.span
              variants={item}
              className="text-sky-400
              uppercase
              tracking-[0.2em]
              text-xs
              sm:text-sm"
            >
              About Me
            </motion.span>

            {/* Main Heading */}

            <motion.h2
              variants={item}
              className="text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              mt-4
              leading-tight"
            >
              Full Stack Web Developer
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={item}
              className="text-[#94A3B8]
              mt-4
              text-sm
              sm:text-base
              md:text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
              px-2"
            >
              I build modern, responsive and user-friendly web experiences
              using clean code and modern web technologies.
            </motion.p>
          </motion.div>

          {/* =====================
              INTRO + SKILLS
          ===================== */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-120px",
            }}
            className="grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
            mb-20
            sm:mb-28
            lg:mb-32"
          >
            {/* =====================
                LEFT CONTENT
            ===================== */}

            <motion.div variants={item}>
              <h3
                className="text-2xl
                sm:text-3xl
                font-semibold
                mb-6
                leading-snug"
              >
                I Build Modern & High-Performance Websites
              </h3>

              <p
                className="text-[#94A3B8]
                text-sm
                sm:text-base
                leading-relaxed
                mb-5"
              >
                I am a Full Stack Web Developer focused on building modern,
                responsive and user-friendly web applications. I enjoy
                turning ideas into functional digital experiences using
                clean code and thoughtful UI design.
              </p>

              <p
                className="text-[#94A3B8]
                text-sm
                sm:text-base
                leading-relaxed
                mb-8"
              >
                I work across both frontend and backend development,
                with a strong focus on responsive design, API integration,
                performance and creating smooth user experiences.
              </p>

              {/* =====================
                  RESUME BUTTON
              ===================== */}

              <motion.button
                type="button"
                onClick={handleResume}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                  cursor-pointer
                  flex
                  items-center
                  justify-between
                  px-4
                  sm:px-5
                  py-3
                  w-full
                  sm:w-[190px]
                  rounded-full
                  bg-gradient-to-r
                  from-sky-400
                  to-green-500
                  text-[#0F172A]
                  font-mono
                  font-semibold
                  tracking-wider
                  text-sm
                  sm:text-base
                  shadow-xl
                  hover:ring-2
                  hover:ring-sky-300
                  transition
                "
              >
                <span>View Resume</span>

                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                  animate={{
                    y: [0, 6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* =====================
                SKILL BARS
            ===================== */}

            <motion.div
              variants={item}
              className="w-full"
            >
              <h4
                className="text-xl
                sm:text-2xl
                font-semibold
                mb-6"
              >
                Core Skills
              </h4>

              <div className="space-y-5 sm:space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    {/* Skill Name + Percentage */}

                    <div
                      className="flex
                      justify-between
                      items-center
                      text-xs
                      sm:text-sm
                      mb-2"
                    >
                      <span>{skill.name}</span>

                      <span className="text-[#94A3B8]">
                        {skill.value}%
                      </span>
                    </div>

                    {/* Progress Background */}

                    <div
                      className="w-full
                      h-2
                      sm:h-2.5
                      bg-slate-800
                      rounded-full
                      overflow-hidden"
                    >
                      {/* Progress */}

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${skill.value}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full
                        bg-gradient-to-r
                        from-sky-400
                        to-green-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* =====================
              PROFESSIONAL SKILLS
          ===================== */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="mb-20
            sm:mb-28
            lg:mb-32"
          >
            <h3
              className="text-2xl
              sm:text-3xl
              font-bold
              text-center
              mb-10
              sm:mb-12"
            >
              Professional Skillset
            </h3>

            <div
              className="grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
              sm:gap-6
              lg:gap-8"
            >
              {professionalSkills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={item}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="
                    p-5
                    sm:p-6
                    rounded-2xl
                    bg-white/5
                    backdrop-blur
                    border
                    border-white/10
                    text-center
                    text-sm
                    sm:text-base
                    hover:border-sky-400/30
                    transition
                  "
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =====================
              TOOLS
          ===================== */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="mb-20
            sm:mb-28
            lg:mb-32"
          >
            <h3
              className="text-2xl
              sm:text-3xl
              font-bold
              text-center
              mb-10
              sm:mb-12"
            >
              Tools I Use
            </h3>

            <div
              className="grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
              gap-4
              sm:gap-6
              lg:gap-8"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool}
                  variants={item}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="
                    p-4
                    sm:p-5
                    rounded-xl
                    bg-slate-800/60
                    border
                    border-white/5
                    text-center
                    text-xs
                    sm:text-sm
                    md:text-base
                    min-h-[60px]
                    flex
                    items-center
                    justify-center
                  "
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =====================
              STATS
          ===================== */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            sm:gap-6
            lg:gap-8
            text-center"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={{
                  y: -5,
                }}
                className="
                  p-6
                  sm:p-8
                  rounded-2xl
                  bg-gradient-to-br
                  from-sky-400/10
                  to-green-500/5
                  border
                  border-white/5
                "
              >
                <motion.h4
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    text-sky-400
                  "
                >
                  {stat.value}
                </motion.h4>

                <p
                  className="text-[#94A3B8]
                  mt-2
                  text-sm
                  sm:text-base"
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

