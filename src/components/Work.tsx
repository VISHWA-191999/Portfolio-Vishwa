import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "FoodReels",
    category: "Food discovery & partner platform",
    description:
      "A responsive food discovery platform with short reels, likes, comments, saves, and partner discovery. Added JWT authentication, MongoDB data models, validated forms, error handling, and cloud media delivery.",
    technologies:
      "React, Node.js, Express, MongoDB, JWT, ImageKit, Bootstrap",
    imageAlt: "FoodReels food discovery platform project",
  },
  {
    name: "Realtime AI Chat App",
    category: "Collaborative chat & code preview",
    description:
      "Real-time chat rooms with @ai-triggered Google Gemini responses, JWT authentication with bcrypt password hashing, Redis-backed session/data caching, markdown and syntax-highlighted messages, and WebContainer code run/preview.",
    technologies:
      "React, Node.js, Express, MongoDB, Redis, Socket.io, Google Gemini API, WebContainer, JWT, bcrypt",
    imageAlt: "Realtime AI Chat App project",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Highlights</h4>
                <p>{project.description}</p>
                <h4>Technologies</h4>
                <p>{project.technologies}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.imageAlt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
