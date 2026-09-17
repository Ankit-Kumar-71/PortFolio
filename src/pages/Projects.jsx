import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ravyn from "../assets/ravynperfumes.png";
import gnxmart from "../assets/gnx.png";
import kandp from "../assets/kandp.png";
import jai from "../assets/jai.png";
import math from "../assets/math.png";
import key from "../assets/key.png";
import khushi from "../assets/khushi.png";
import prakritihastkala from "../assets/prekrtic.png";
import kelovo from "../assets/kelovo.png";
import gotzila from "../assets/gotzila.png";

/* ===================== SCROLL PROGRESS BAR ===================== */

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
      className="
        fixed
        top-0
        left-0
        right-0
        h-[3px]
        bg-sky-400
        origin-left
        z-50
      "
    />
  );
}

/* ===================== ANIMATIONS ===================== */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(6px)",
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

/* ===================== PROJECT DATA ===================== */

const projects = [
  {
    title: "Gotzilasupplement",
    category: "html",
    description:
      "Gotzila Supplement Website is a modern, performance-focused platform built for a premium fitness and nutrition brand. The website is designed to deliver a strong visual impact while maintaining a smooth and user-friendly experience for customers. It showcases supplements with clear layouts, engaging product sections, and intuitive navigation that improves product discovery and conversions. I worked on creating a responsive, fast-loading, and conversion-oriented interface that works seamlessly across all devices. The project reflects my ability to design and develop brand-driven websites that combine strong UI/UX, modern design principles, and business-focused functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: gotzila,
    live: "https://www.gotzilasupplement.com/",
    code: "https://www.gotzilasupplement.com/",
  },

  {
    title: "Kelevo Software",
    category: "wordpress",
    description:
      "Kelevo Software is a professional technology solutions website for a trusted IT services provider specializing in CRM and ERP implementations and consulting. The platform highlights comprehensive services including Zoho customization, Salesforce integration, Odoo development, and business process automation to help companies streamline operations and drive growth. I worked on crafting a responsive, clean, and business-focused interface that clearly communicates the company’s expertise, service offerings, and industry impact. The design emphasizes intuitive navigation and professional presentation to improve user engagement and lead generation. This project reflects my ability to build scalable, client-centric web experiences tailored for B2B technology and consulting brands.",
    tech: ["WordPress", "PHP"],
    image: kelovo,
    live: "https://kelevosoftware.com/",
    code: "https://kelevosoftware.com/",
  },

  {
    title: "jaishreegarments",
    category: "wordpress",
    description:
      "Jaishree Garments is a professional website developed for a leading apparel and textile business, showcasing their diverse range of garments and fabric products. The platform is designed with a clean, organized layout that highlights product categories, company services, and brand values to make browsing simple and engaging. I built this site with a focus on responsive design, ensuring seamless performance across desktop and mobile devices. The user interface emphasizes clarity and visual appeal, helping visitors explore offerings and connect with the business easily. This project demonstrates my ability to create polished, business-oriented websites that effectively represent a brand and enhance online presence.",
    tech: ["WordPress", "PHP"],
    image: jai,
    live: "https://jaishreegarments.com/",
    code: "https://jaishreegarments.com/",
  },

  {
    title: "ravynperfumes",
    category: "wordpress",
    description:
      "Ravyn Perfumes is a stylish and immersive ecommerce-focused website designed to showcase a curated collection of luxury fragrances. The platform emphasizes elegant visuals, clear product presentation, and a smooth browsing experience to help users discover and explore premium perfume offerings. I developed this site with a thoughtful focus on responsive design, ensuring consistent performance across desktop and mobile devices. The interface balances aesthetic appeal with intuitive navigation, creating a refined user experience that aligns with the brand’s identity. This project demonstrates my ability to build modern, visually driven web experiences tailored for lifestyle and ecommerce audiences.",
    tech: ["WordPress", "PHP"],
    image: ravyn,
    live: "https://ravynperfumes.com/",
    code: "https://ravynperfumes.com/",
  },

  {
    title: "WordPress Corporate Site",
    category: "wordpress",
    description:
      "GNX Mart is a dynamic ecommerce platform that showcases a wide range of practical products including men’s and women’s shoes, electric mosquito rackets, and daily accessories, designed for comfort, style, and everyday convenience. The site features a clean, organized layout with clear product categories, engaging visuals, and intuitive navigation to help users explore offerings easily. I developed this responsive website with attention to seamless performance across devices, effective product presentation, and a user-focused shopping experience. This project highlights my ability to build commercial web interfaces that combine strong UX design with modern frontend development for retail audiences.",
    tech: ["WordPress", "PHP"],
    image: gnxmart,
    live: "https://gnxmart.com/",
    code: "https://gnxmart.com/",
  },

  {
    title: "Kandp",
    category: "wordpress",
    description:
      "kandp.me is a sleek, responsive personal branding website designed to present a professional digital portfolio with clarity and style. The site highlights key information about the individual’s skills, projects, and contact details in a clean, modern layout that enhances readability and engagement. I crafted this site to focus on effective visual hierarchy, smooth navigation, and seamless performance across desktop and mobile devices. The design emphasizes personal identity and professional presence while providing visitors with an intuitive browsing experience. This project demonstrates my ability to build polished, personal web experiences that reflect brand personality and showcase expertise effectively.",
    tech: ["WordPress", "PHP"],
    image: kandp,
    live: "https://kandp.me/",
    code: "https://kandp.me/",
  },

  {
    title: "Mathemagics",
    category: "wordpress",
    description:
      "Mathemagics is an educational website designed to support students in mastering mathematics through modern, interactive digital learning. The platform highlights smart classroom features, structured board exam preparation, and personalized guidance to help learners build strong fundamentals and confidence. I developed this site with a focus on responsive and user-friendly design that clearly presents key offerings such as theory lessons, practice sessions, career counseling, and performance support tools. The interface balances engaging visuals with intuitive navigation to make academic resources accessible across devices. This project showcases my ability to create informative, education-centric web experiences that enhance learning and student engagement.",
    tech: ["WordPress", "PHP"],
    image: math,
    live: "https://mathemagics.in/",
    code: "https://mathemagics.in/",
  },

  {
    title: "keymantra",
    category: "wordpress",
    description:
      "Key Mantra is a professional website developed for a business offering digital solutions including custom software, mobile app development, and IT consulting services. The platform features a clean and modern design that clearly highlights the company’s core services, expertise, and value propositions. I built this site with a focus on responsive layouts, intuitive navigation, and visual clarity to enhance user engagement across desktop and mobile devices. The interface effectively communicates service offerings while maintaining a professional brand presence. This project demonstrates my ability to create business-oriented web solutions that blend thoughtful design with functional, user-centric development.",
    tech: ["WordPress", "PHP"],
    image: key,
    live: "https://keymantra.in/",
    code: "https://keymantra.in/",
  },

  {
    title: "khushicentre",
    category: "wordpress",
    description:
      "Khushi Centre is a welcoming and informative website designed for a community-focused service provider offering holistic wellness, training, and personal development programs. The platform highlights key offerings with clear service sections, engaging visuals, and an intuitive layout that helps visitors learn about workshops, courses, and support initiatives. I developed this site with a focus on responsive design and user-friendly navigation to ensure seamless browsing across devices. The interface emphasizes clarity and accessibility, making it easier for users to connect with the centre’s mission and offerings. This project showcases my ability to create meaningful, community-centric web experiences that reflect purpose and professionalism.",
    tech: ["WordPress", "PHP"],
    image: khushi,
    live: "https://khushicentre.in/",
    code: "https://khushicentre.in/",
  },

  {
    title: "prakritihastkala",
    category: "wordpress",
    description:
      "Prakriti Hastkala is a visually engaging ecommerce website dedicated to showcasing and selling authentic handcrafted products that celebrate traditional Indian artistry. The platform highlights diverse categories of artisanal goods with clear product layouts, vibrant visuals, and intuitive navigation to create an enjoyable browsing experience. I developed this site with a focus on responsive design, ensuring seamless performance across desktop and mobile devices. The interface blends aesthetic appeal with user-friendly structure, making it easy for customers to explore and connect with handcrafted offerings. This project demonstrates my ability to build elegant, commerce-driven web experiences that support cultural brands and promote artisanal craftsmanship online.",
    tech: ["WordPress", "PHP"],
    image: prakritihastkala,
    live: "https://prakritihastkala.com/",
    code: "https://prakritihastkala.com/",
  },
];

/* ===================== COMPONENT ===================== */

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeTab
        );

  return (
    <section
      className="
        relative
        min-h-screen
        bg-[#0F172A]
        text-[#E5E7EB]
        py-20
        sm:py-24
        lg:py-28
        px-4
        sm:px-6
        overflow-hidden
      "
    >
      <ScrollProgressBar />

      {/* Background Glow */}
      <div
        className="
          absolute
          -top-32
          -left-32
          w-[250px]
          h-[250px]
          sm:w-[350px]
          sm:h-[350px]
          lg:w-[450px]
          lg:h-[450px]
          bg-sky-400/10
          blur-[100px]
          lg:blur-[130px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-1/2
          -right-32
          w-[250px]
          h-[250px]
          sm:w-[350px]
          sm:h-[350px]
          lg:w-[450px]
          lg:h-[450px]
          bg-green-500/10
          blur-[100px]
          lg:blur-[130px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-10 sm:mb-14 lg:mb-16 px-2">

          <span
            className="
              text-[#38BDF8]
              uppercase
              tracking-[0.25em]
              text-xs
              sm:text-sm
            "
          >
            Portfolio
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              mt-3
              sm:mt-4
              leading-tight
            "
          >
            My Projects
          </h2>

          <p
            className="
              text-[#94A3B8]
              mt-4
              text-sm
              sm:text-base
              max-w-xl
              mx-auto
              leading-relaxed
            "
          >
            Explore my HTML, React and WordPress projects.
          </p>
        </div>

        {/* ================= TABS ================= */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-2
            sm:gap-3
            md:gap-4
            mb-10
            sm:mb-14
            lg:mb-16
            px-2
          "
        >
          {["all", "html", "react", "wordpress"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4
                sm:px-5
                md:px-6
                py-2
                sm:py-2.5
                rounded-full
                text-xs
                sm:text-sm
                font-medium
                transition-all
                duration-300
                whitespace-nowrap

                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#38BDF8] to-[#22C55E] text-black shadow-lg shadow-sky-400/20"
                    : "border border-[#94A3B8]/40 text-[#94A3B8] hover:border-[#38BDF8] hover:text-[#38BDF8]"
                }
              `}
            >
              {tab === "all"
                ? "All"
                : tab === "html"
                ? "HTML / CSS / JS"
                : tab === "react"
                ? "React"
                : "WordPress"}
            </button>
          ))}
        </div>

        {/* ================= PROJECT GRID ================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
              sm:gap-7
              lg:gap-10
            "
          >
            {filtered.map((project, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => setSelected(project)}
                className="
                  group
                  cursor-pointer
                  rounded-2xl
                  overflow-hidden
                  bg-[#111827]/70
                  backdrop-blur
                  border
                  border-[#1F2933]
                  transition-all
                  duration-300
                  hover:border-sky-400/40
                  hover:shadow-xl
                  hover:shadow-sky-400/5
                "
              >
                {/* ================= IMAGE ================= */}

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-48
                      sm:h-52
                      md:h-56
                      lg:h-52
                      xl:h-56
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Desktop Hover Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/70
                      hidden
                      sm:flex
                      items-center
                      justify-center
                      gap-4
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-300
                    "
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Open ${project.title} live website`}
                      className="
                        p-3
                        md:p-4
                        rounded-full
                        bg-[#38BDF8]
                        text-[#0F172A]
                        hover:scale-110
                        transition
                      "
                    >
                      <FaExternalLinkAlt
                        size={18}
                      />
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Open ${project.title} code`}
                      className="
                        p-3
                        md:p-4
                        rounded-full
                        bg-[#22C55E]
                        text-[#0F172A]
                        hover:scale-110
                        transition
                      "
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div
                    className="
                      absolute
                      bottom-3
                      right-3
                      flex
                      sm:hidden
                      gap-2
                    "
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Open ${project.title} live website`}
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-[#38BDF8]
                        text-[#0F172A]
                        shadow-lg
                      "
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Open ${project.title} code`}
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-[#22C55E]
                        text-[#0F172A]
                        shadow-lg
                      "
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}

                <div
                  className="
                    p-4
                    sm:p-5
                    md:p-6
                  "
                >
                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      font-semibold
                      leading-snug
                      line-clamp-2
                    "
                  >
                    {project.title}
                  </h3>

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-3
                      sm:mt-4
                    "
                  >
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="
                          text-[10px]
                          sm:text-xs
                          px-2.5
                          sm:px-3
                          py-1
                          rounded-full
                          bg-[#1E293B]
                          text-[#CBD5E1]
                          border
                          border-[#334155]
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ================= EMPTY STATE ================= */}

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#94A3B8] text-sm sm:text-base">
              No projects available in this category.
            </p>
          </div>
        )}

        {/* ================= MODAL ================= */}

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed
                inset-0
                bg-black/80
                backdrop-blur-sm
                flex
                items-center
                justify-center
                z-[999]
                p-3
                sm:p-5
                md:p-6
                overflow-y-auto
              "
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{
                  scale: 0.85,
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  scale: 0.85,
                  opacity: 0,
                  y: 20,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  relative
                  bg-[#111827]
                  rounded-2xl
                  w-full
                  max-w-lg
                  max-h-[92vh]
                  overflow-y-auto
                  p-4
                  sm:p-6
                  border
                  border-[#1F2933]
                  shadow-2xl
                "
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}

                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close project details"
                  className="
                    absolute
                    top-3
                    right-3
                    z-10
                    w-9
                    h-9
                    rounded-full
                    bg-black/60
                    text-white
                    flex
                    items-center
                    justify-center
                    text-lg
                    hover:bg-red-500
                    transition
                  "
                >
                  ×
                </button>

                {/* Modal Image */}

                <img
                  src={selected.image}
                  className="
                    w-full
                    h-48
                    sm:h-56
                    md:h-64
                    object-cover
                    rounded-xl
                    mb-4
                  "
                  alt={selected.title}
                />

                {/* Modal Title */}

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-bold
                    mb-3
                    pr-8
                    leading-tight
                  "
                >
                  {selected.title}
                </h3>

                {/* Modal Description */}

                <p
                  className="
                    text-[#94A3B8]
                    text-sm
                    sm:text-base
                    leading-relaxed
                    mb-5
                  "
                >
                  {selected.description}
                </p>

                {/* Modal Tech */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mb-6
                  "
                >
                  {selected.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-[#1E293B]
                        text-[#CBD5E1]
                        border
                        border-[#334155]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Modal Buttons */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                  "
                >
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-2.5
                      sm:py-3
                      rounded-lg
                      bg-gradient-to-r
                      from-[#38BDF8]
                      to-[#22C55E]
                      text-black
                      font-semibold
                      text-sm
                      sm:text-base
                      transition
                      hover:scale-[1.02]
                    "
                  >
                    <FaExternalLinkAlt size={15} />
                    Live Demo
                  </a>

                  <a
                    href={selected.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-2.5
                      sm:py-3
                      rounded-lg
                      border
                      border-[#94A3B8]/40
                      text-[#E5E7EB]
                      font-semibold
                      text-sm
                      sm:text-base
                      transition
                      hover:border-[#38BDF8]
                      hover:text-[#38BDF8]
                    "
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


