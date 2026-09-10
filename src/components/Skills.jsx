import { useEffect, useState } from "react";

const skillGroups = [
  {
    number: "01",
    title: "LANGUAGES",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    number: "02",
    title: "FRONTEND",
    skills: ["React.js", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "BACKEND & APIs",
    skills: ["Node.js", "Express", "REST APIs", "JWT Authentication"],
  },
  {
    number: "04",
    title: "DATABASE",
    skills: ["MongoDB", "MongoDB Atlas"],
  },
  {
    number: "05",
    title: "AI / ML & COMPUTER VISION",
    skills: [
      "TensorFlow",
      "TensorFlow.js",
      "OpenCV",
      "MobileNet",
      "KNN Classification",
    ],
  },
  {
    number: "06",
    title: "CLOUD & TOOLS",
    skills: [
      "AWS EC2",
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Postman",
      "VS Code",
    ],
  },
];

const coreStrengths = [
  "Problem Solving",
  "Debugging",
  "Teamwork",
  "Analytical Thinking",
];

function Skills() {
  const [lightMode, setLightMode] = useState(
    document.documentElement.classList.contains("light")
  );

  /* =========================
     WATCH THEME CHANGE
  ========================= */

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setLightMode(
        document.documentElement.classList.contains("light")
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className={`border-t px-6 py-28 transition-colors duration-500 lg:px-10 ${
        lightMode
          ? "border-black/10 bg-[#f5f5f2]"
          : "border-white/10 bg-black"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="mb-16 flex items-center gap-4">

          <span className="font-mono text-sm text-lime-500">
            02 /
          </span>

          <h2
            className={`text-sm font-medium tracking-[0.25em] transition-colors duration-500 ${
              lightMode
                ? "text-neutral-500"
                : "text-neutral-400"
            }`}
          >
            SKILLS
          </h2>

        </div>


        {/* =========================
            MAIN HEADING
        ========================= */}

        <div className="mb-20 max-w-4xl">

          <h3
            className={`text-5xl font-bold leading-[0.95] tracking-tight transition-colors duration-500 sm:text-6xl lg:text-7xl ${
              lightMode
                ? "text-black"
                : "text-white"
            }`}
          >
            MY
            <br />

            <span
              className={
                lightMode
                  ? "text-neutral-400"
                  : "text-neutral-600"
              }
            >
              TECHNICAL
            </span>

            <br />

            TOOLKIT.
          </h3>

        </div>


        {/* =========================
            SKILL GROUPS
        ========================= */}

        <div
          className={`border-t ${
            lightMode
              ? "border-black/10"
              : "border-white/10"
          }`}
        >

          {skillGroups.map((group) => (
            <div
              key={group.number}
              className={`
                grid
                border-b
                py-8
                transition-colors
                duration-300
                md:grid-cols-[100px_280px_1fr]
                md:items-start
                ${
                  lightMode
                    ? "border-black/10"
                    : "border-white/10"
                }
              `}
            >

              {/* Number */}

              <span className="mb-4 font-mono text-sm text-lime-500 md:mb-0">
                {group.number}
              </span>


              {/* Category */}

              <h4
                className={`
                  mb-5
                  text-sm
                  font-medium
                  tracking-[0.15em]
                  transition-colors
                  duration-500
                  md:mb-0
                  ${
                    lightMode
                      ? "text-neutral-600"
                      : "text-neutral-400"
                  }
                `}
              >
                {group.title}
              </h4>


              {/* Skills */}

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      border
                      px-4
                      py-2
                      text-sm
                      transition-all
                      duration-300
                      hover:border-lime-500
                      hover:text-lime-500
                      ${
                        lightMode
                          ? "border-black/10 text-neutral-600"
                          : "border-white/10 text-neutral-300"
                      }
                    `}
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>


        {/* =========================
            CORE STRENGTHS
        ========================= */}

        <div
          className={`
            mt-20
            border
            p-8
            transition-colors
            duration-500
            md:p-10
            ${
              lightMode
                ? "border-black/10 bg-white"
                : "border-white/10 bg-black"
            }
          `}
        >

          <p
            className={`
              mb-6
              font-mono
              text-xs
              tracking-[0.2em]
              ${
                lightMode
                  ? "text-neutral-500"
                  : "text-neutral-600"
              }
            `}
          >
            CORE STRENGTHS
          </p>


          <div className="flex flex-wrap gap-x-8 gap-y-4">

            {coreStrengths.map((strength) => (
              <span
                key={strength}
                className={`
                  text-lg
                  font-medium
                  ${
                    lightMode
                      ? "text-black"
                      : "text-white"
                  }
                `}
              >
                {strength}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;