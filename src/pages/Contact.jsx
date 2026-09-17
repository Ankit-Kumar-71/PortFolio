import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* =====================
     SCROLL PROGRESS
  ===================== */

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  /* =====================
     VALIDATION
  ===================== */

  const validate = (fields) => {
    const tempErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!fields.user_name.trim()) {
      tempErrors.name = "Name is required";
    }

    if (!fields.user_email.trim()) {
      tempErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.user_email)
    ) {
      tempErrors.email = "Email is invalid";
    }

    if (!fields.message.trim()) {
      tempErrors.message = "Message is required";
    }

    setErrors(tempErrors);

    return Object.values(tempErrors).every(
      (err) => err === ""
    );
  };

  /* =====================
     SEND EMAIL
  ===================== */

  const sendEmail = (fields) => {
    setLoading(true);
    setSuccess("");

    const templateParams = {
      name: fields.user_name,
      email: fields.user_email,
      message: fields.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully:",
            response
          );

          setLoading(false);
          setSuccess("Message sent successfully!");

          formRef.current.reset();

          setErrors({
            name: "",
            email: "",
            message: "",
          });

          setTimeout(() => {
            setSuccess("");
          }, 5000);
        },
        (error) => {
          console.error(
            "EmailJS Error:",
            error
          );

          setLoading(false);
          setSuccess(
            "Oops! Something went wrong."
          );

          setTimeout(() => {
            setSuccess("");
          }, 5000);
        }
      );
  };

  /* =====================
     FORM SUBMIT
  ===================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const userName =
      form.elements.namedItem("user_name");

    const userEmail =
      form.elements.namedItem("user_email");

    const message =
      form.elements.namedItem("message");

    const fields = {
      user_name: userName?.value || "",
      user_email: userEmail?.value || "",
      message: message?.value || "",
    };

    if (!validate(fields)) {
      return;
    }

    sendEmail(fields);
  };

  return (
    <section
      className="
        relative
        min-h-screen
        bg-[#0F172A]
        py-20
        sm:py-24
        lg:py-32
        px-4
        sm:px-6
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* =====================
          BACKGROUND GLOW
      ===================== */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[250px]
          h-[250px]
          sm:w-[350px]
          sm:h-[350px]
          lg:w-[400px]
          lg:h-[400px]
          bg-sky-400/10
          blur-[100px]
          lg:blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-[250px]
          h-[250px]
          sm:w-[350px]
          sm:h-[350px]
          lg:w-[400px]
          lg:h-[400px]
          bg-green-500/10
          blur-[100px]
          lg:blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================
          SCROLL PROGRESS BAR
      ===================== */}

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

      {/* =====================
          MAIN CONTAINER
      ===================== */}

      <div
        className="
          relative
          w-full
          max-w-3xl
          mx-auto
        "
      >
        {/* =====================
            HEADING
        ===================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-center
            mb-8
            sm:mb-10
            lg:mb-12
            text-[#E5E7EB]
            leading-tight
          "
        >
          Get in{" "}
          <span className="text-[#38BDF8]">
            Touch
          </span>
        </motion.h2>

        {/* =====================
            FORM
        ===================== */}

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            bg-[#111827]/60
            backdrop-blur-md
            border
            border-[#1F2933]
            rounded-2xl
            p-5
            sm:p-7
            md:p-10
            shadow-2xl
            grid
            gap-6
          "
        >
          {/* =====================
              NAME
          ===================== */}

          <div className="relative">
            <input
              type="text"
              name="user_name"
              placeholder=" "
              autoComplete="name"
              className="
                peer
                w-full
                bg-transparent
                border-b-2
                border-[#94A3B8]
                text-[#E5E7EB]
                py-3
                px-1
                text-sm
                sm:text-base
                placeholder-transparent
                focus:border-[#38BDF8]
                focus:outline-none
                transition
              "
            />

            <label
              className="
                absolute
                left-1
                -top-3
                text-[#94A3B8]
                text-xs
                sm:text-sm
                transition-all

                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-[#94A3B8]
                peer-placeholder-shown:text-xs
                sm:peer-placeholder-shown:text-sm

                peer-focus:-top-3
                peer-focus:text-[#38BDF8]
                peer-focus:text-sm
                sm:peer-focus:text-base
              "
            >
              Your Name
            </label>

            {errors.name && (
              <p className="text-red-400 text-xs sm:text-sm mt-2">
                {errors.name}
              </p>
            )}
          </div>

          {/* =====================
              EMAIL
          ===================== */}

          <div className="relative">
            <input
              type="email"
              name="user_email"
              placeholder=" "
              autoComplete="email"
              className="
                peer
                w-full
                bg-transparent
                border-b-2
                border-[#94A3B8]
                text-[#E5E7EB]
                py-3
                px-1
                text-sm
                sm:text-base
                placeholder-transparent
                focus:border-[#38BDF8]
                focus:outline-none
                transition
              "
            />

            <label
              className="
                absolute
                left-1
                -top-3
                text-[#94A3B8]
                text-xs
                sm:text-sm
                transition-all

                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-[#94A3B8]
                peer-placeholder-shown:text-xs
                sm:peer-placeholder-shown:text-sm

                peer-focus:-top-3
                peer-focus:text-[#38BDF8]
                peer-focus:text-sm
                sm:peer-focus:text-base
              "
            >
              Your Email
            </label>

            {errors.email && (
              <p className="text-red-400 text-xs sm:text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* =====================
              MESSAGE
          ===================== */}

          <div className="relative">
            <textarea
              name="message"
              rows="5"
              placeholder=" "
              className="
                peer
                w-full
                bg-transparent
                border-b-2
                border-[#94A3B8]
                text-[#E5E7EB]
                py-3
                px-1
                text-sm
                sm:text-base
                placeholder-transparent
                focus:border-[#38BDF8]
                focus:outline-none
                transition
                resize-none
              "
            />

            <label
              className="
                absolute
                left-1
                -top-3
                text-[#94A3B8]
                text-xs
                sm:text-sm
                transition-all

                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-[#94A3B8]
                peer-placeholder-shown:text-xs
                sm:peer-placeholder-shown:text-sm

                peer-focus:-top-3
                peer-focus:text-[#38BDF8]
                peer-focus:text-sm
                sm:peer-focus:text-base
              "
            >
              Your Message
            </label>

            {errors.message && (
              <p className="text-red-400 text-xs sm:text-sm mt-2">
                {errors.message}
              </p>
            )}
          </div>

          {/* =====================
              SUBMIT BUTTON
          ===================== */}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={
              !loading
                ? {
                    scale: 1.03,
                    boxShadow:
                      "0 0 30px rgba(56,189,248,0.6)",
                  }
                : {}
            }
            whileTap={
              !loading
                ? {
                    scale: 0.97,
                  }
                : {}
            }
            className="
              w-full
              sm:w-auto
              sm:min-w-[180px]
              sm:mx-auto
              bg-[#38BDF8]
              text-[#0F172A]
              font-semibold
              px-6
              py-3
              rounded-xl
              transition
              text-sm
              sm:text-base
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            {loading
              ? "Sending..."
              : "Send Message"}
          </motion.button>

          {/* =====================
              SUCCESS / ERROR
          ===================== */}

          {success && (
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className={`
                text-center
                mt-1
                font-medium
                text-sm
                sm:text-base
                ${
                  success.includes("success")
                    ? "text-green-400"
                    : "text-red-500"
                }
              `}
            >
              {success}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
