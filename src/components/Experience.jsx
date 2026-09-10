import { useEffect, useState } from "react";

const education = [
  {
    period: "2021 — 2025",
    degree: "Bachelor of Engineering",
    field: "Information Science Engineering",
    institution: "Acharya Institute of Technology",
    location: "Bangalore",
    result: "CGPA: 7.0",
  },
  {
    period: "2019 — 2021",
    degree: "Pre-University Course",
    field: "Science",
    institution: "Govt. PU College",
    location: "Sirsi",
    result: "70%",
  },
  {
    period: "2016 — 2019",
    degree: "SSLC",
    field: "State Board of Education",
    institution: "Progressive High School",
    location: "Sirsi",
    result: "75%",
  },
];

const certifications = [
  "AWS Cloud Foundations",
  "Database Management System",
  "Data Science",
];

const trainingSkills = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "REST APIs",
  "SQL",
  "Git",
];

function Experience() {
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
      id="experience"
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
            05 /
          </span>

          <h2
            className={`text-sm font-medium tracking-[0.25em] transition-colors duration-500 ${
              lightMode
                ? "text-neutral-500"
                : "text-neutral-400"
            }`}
          >
            EXPERIENCE
          </h2>

        </div>


        {/* =========================
            MAIN TITLE
        ========================= */}

        <div className="mb-20 max-w-4xl">

          <h3
            className={`text-5xl font-bold leading-[0.95] tracking-tight transition-colors duration-500 sm:text-6xl lg:text-7xl ${
              lightMode
                ? "text-black"
                : "text-white"
            }`}
          >
            LEARNING.
            <br />

            <span
              className={
                lightMode
                  ? "text-neutral-400"
                  : "text-neutral-600"
              }
            >
              BUILDING.
            </span>

            <br />

            GROWING.
          </h3>

        </div>


        {/* =========================
            FULL-STACK TRAINING
        ========================= */}

        <div className="mb-24">

          <div
            className={`mb-8 border-b pb-5 ${
              lightMode
                ? "border-black/10"
                : "border-white/10"
            }`}
          >
            <p className="font-mono text-xs tracking-[0.2em] text-lime-500">
              PROFESSIONAL TRAINING
            </p>
          </div>


          <article
            className={`
              group
              relative
              overflow-hidden
              border
              p-7
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-lime-500/50
              md:p-10
              ${
                lightMode
                  ? "border-black/10 bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  : "border-white/10 bg-neutral-950"
              }
            `}
          >

            {/* Background glow */}

            <div
              className={`
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                blur-3xl
                transition-all
                duration-700
                ${
                  lightMode
                    ? "bg-lime-500/[0.05] group-hover:bg-lime-500/[0.09]"
                    : "bg-lime-400/5 group-hover:bg-lime-400/10"
                }
              `}
            />


            <div className="relative z-10 grid gap-10 lg:grid-cols-[180px_1fr_auto]">

              {/* Period */}

              <div>

                <p
                  className={`font-mono text-sm ${
                    lightMode
                      ? "text-neutral-500"
                      : "text-neutral-500"
                  }`}
                >
                  POST-GRADUATION
                </p>

                <p className="mt-3 font-mono text-xs tracking-[0.15em] text-lime-500">
                  FULL-STACK
                </p>

              </div>


              {/* Details */}

              <div>

                <p
                  className={`mb-3 text-xs tracking-[0.2em] ${
                    lightMode
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }`}
                >
                  KODNEST
                </p>

                <h4
                  className={`text-3xl font-bold tracking-tight transition-colors duration-500 md:text-4xl ${
                    lightMode
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  Full-Stack Development
                </h4>

                <p
                  className={`mt-5 max-w-2xl text-base leading-7 transition-colors duration-500 ${
                    lightMode
                      ? "text-neutral-600"
                      : "text-neutral-400"
                  }`}
                >
                  Completed professional training focused on full-stack
                  development, building practical applications, working with
                  frontend and backend technologies, and strengthening
                  problem-solving through hands-on development.
                </p>


                {/* Skills */}

                <div className="mt-8 flex flex-wrap gap-2">

                  {trainingSkills.map((skill) => (
                    <span
                      key={skill}
                      className={`
                        border
                        px-3
                        py-2
                        text-xs
                        transition-colors
                        duration-300
                        ${
                          lightMode
                            ? "border-black/10 text-neutral-500 group-hover:border-black/20 group-hover:text-neutral-700"
                            : "border-white/10 text-neutral-400 group-hover:border-white/20 group-hover:text-neutral-200"
                        }
                      `}
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>


              {/* Indicator */}

              <div className="flex items-start justify-end">

                <span
                  className={`
                    font-mono
                    text-2xl
                    transition-colors
                    duration-500
                    group-hover:text-lime-500
                    ${
                      lightMode
                        ? "text-neutral-400"
                        : "text-neutral-700"
                    }
                  `}
                >
                  ↗
                </span>

              </div>

            </div>


            {/* Bottom line */}

            <div
              className={`
                relative
                z-10
                mt-10
                border-t
                pt-5
                ${
                  lightMode
                    ? "border-black/10"
                    : "border-white/10"
                }
              `}
            >

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <span
                  className={`font-mono text-xs tracking-[0.15em] ${
                    lightMode
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }`}
                >
                  LEARN / BUILD / DEBUG / IMPROVE
                </span>

                <span className="font-mono text-xs text-lime-500">
                  COMPLETED
                </span>

              </div>

            </div>

          </article>

        </div>


        {/* =========================
            EDUCATION
        ========================= */}

        <div className="mb-24">

          <div
            className={`mb-8 border-b pb-5 ${
              lightMode
                ? "border-black/10"
                : "border-white/10"
            }`}
          >
            <p className="font-mono text-xs tracking-[0.2em] text-lime-500">
              EDUCATION
            </p>
          </div>


          <div>

            {education.map((item) => (
              <article
                key={item.degree}
                className={`
                  group
                  grid
                  gap-6
                  border-b
                  py-10
                  transition-colors
                  duration-300
                  md:grid-cols-[180px_1fr_auto]
                  md:gap-10
                  ${
                    lightMode
                      ? "border-black/10"
                      : "border-white/10"
                  }
                `}
              >

                {/* Period */}

                <div>

                  <p
                    className={`
                      font-mono
                      text-sm
                      transition-colors
                      duration-300
                      group-hover:text-lime-500
                      ${
                        lightMode
                          ? "text-neutral-500"
                          : "text-neutral-500"
                      }
                    `}
                  >
                    {item.period}
                  </p>

                </div>


                {/* Details */}

                <div>

                  <h4
                    className={`
                      text-2xl
                      font-semibold
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      ${
                        lightMode
                          ? "text-black"
                          : "text-white"
                      }
                    `}
                  >
                    {item.degree}
                  </h4>

                  <p
                    className={`mt-2 text-lg ${
                      lightMode
                        ? "text-neutral-600"
                        : "text-neutral-400"
                    }`}
                  >
                    {item.field}
                  </p>

                  <p
                    className={`mt-5 text-sm ${
                      lightMode
                        ? "text-neutral-500"
                        : "text-neutral-500"
                    }`}
                  >
                    {item.institution} · {item.location}
                  </p>

                </div>


                {/* Result */}

                <div className="md:text-right">

                  <span
                    className={`
                      border
                      px-4
                      py-2
                      font-mono
                      text-xs
                      text-lime-500
                      ${
                        lightMode
                          ? "border-black/10"
                          : "border-white/10"
                      }
                    `}
                  >
                    {item.result}
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>


        {/* =========================
            CERTIFICATIONS
        ========================= */}

        <div>

          <div
            className={`
              mb-8
              border-b
              pb-5
              ${
                lightMode
                  ? "border-black/10"
                  : "border-white/10"
              }
            `}
          >
            <p className="font-mono text-xs tracking-[0.2em] text-lime-500">
              CERTIFICATIONS
            </p>
          </div>


          <div className="grid gap-4 md:grid-cols-2">

            {certifications.map((certification, index) => (
              <div
                key={certification}
                className={`
                  group
                  flex
                  items-center
                  justify-between
                  border
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-lime-500/50
                  ${
                    lightMode
                      ? "border-black/10 bg-white hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                      : "border-white/10 bg-black hover:bg-neutral-950"
                  }
                `}
              >

                <div className="flex items-center gap-5">

                  <span
                    className={`
                      font-mono
                      text-xs
                      transition-colors
                      duration-300
                      group-hover:text-lime-500
                      ${
                        lightMode
                          ? "text-neutral-400"
                          : "text-neutral-600"
                      }
                    `}
                  >
                    0{index + 1}
                  </span>

                  <span
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
                    {certification}
                  </span>

                </div>


                <span
                  className={`
                    text-xl
                    transition-colors
                    duration-300
                    group-hover:text-lime-500
                    ${
                      lightMode
                        ? "text-neutral-400"
                        : "text-neutral-600"
                    }
                  `}
                >
                  ↗
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================= */}

        <div
          className={`
            mt-20
            border-t
            pt-8
            ${
              lightMode
                ? "border-black/10"
                : "border-white/10"
            }
          `}
        >

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <p
              className={`
                max-w-2xl
                text-lg
                leading-7
                ${
                  lightMode
                    ? "text-neutral-600"
                    : "text-neutral-500"
                }
              `}
            >
              Every project, course, and challenge has been another step
              toward becoming a better developer.
            </p>

            <span className="font-mono text-xs tracking-[0.2em] text-lime-500">
              KEEP BUILDING.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;