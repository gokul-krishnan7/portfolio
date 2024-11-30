import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutMe() {
  return (
    <section id="about" className="py-10 text-white min-h-screen">
      <div className="container mx-auto">
        <ScrollAnimation animateIn="slideInDown" initiallyVisible={true}>
          <motion.h2
            className="text-4xl font-extrabold text-teal-400 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
        </ScrollAnimation>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <ScrollAnimation animateIn="slideInLeft" initiallyVisible={true}>
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0">
              <img
                src="https://via.placeholder.com/250"
                alt="Gokul Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>
          <motion.div
            className="max-w-2xl text-lg font-light md:ml-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <ScrollAnimation animateIn="slideInRight" initiallyVisible={true}>
              <p className="mb-4">
                Hey, I'm{" "}
                <span className="text-teal-400 font-semibold">Gokul</span>,
                a passionate Web Developer driven by the thrill of building
                powerful, scalable, and user-focused digital experiences. My
                journey revolves around crafting web applications that not only
                look great but also perform flawlessly across all devices.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInRight" initiallyVisible={true}>
              <p className="mb-4">
                With expertise in React, Node.js, JavaScript, and tailored
                back-end solutions, I specialize in both front-end interactivity
                and seamless back-end functionality. I thrive on solving complex
                problems with clean, efficient code and an eye for detail.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInRight" initiallyVisible={true}>
              <p className="mb-4">
                What sets me apart is my relentless curiosity and desire to push
                boundaries. I don’t just build applications — I craft intuitive,
                engaging, and high-performance digital experiences that stand
                out.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInRight" initiallyVisible={true}>
              <p className="mb-4">
                <em>
                  "When you work with me, you're not just getting a developer,
                  but a partner who's committed to your vision and success.
                  Let’s create something exceptional together"
                </em>
              </p>
            </ScrollAnimation>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
