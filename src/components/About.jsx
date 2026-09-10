import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function About() {
  const [lightMode, setLightMode] = useState(
    document.documentElement.classList.contains("light")
  );

  const interests = [
    "TECHNOLOGY",
    "PHOTOGRAPHY",
    "PROBLEM SOLVING",
  ];

  const services = [
    {
      number: "01",
      title: (
        <>
          Full-Stack
          <br />
          Development
        </>
      ),
      description:
        "Building complete applications from frontend interfaces to backend APIs and databases.",
    },
    {
      number: "02",
      title: (
        <>
          Frontend
          <br />
          Development
        </>
      ),
      description:
        "Creating responsive interfaces with React, JavaScript, and modern frontend technologies.",
    },
    {
      number: "03",
      title: (
        <>
          Backend &amp;
          <br />
          APIs
        </>
      ),
      description:
        "Working with servers, REST APIs, authentication, databases, and application logic.",
    },
    {
      number: "04",
      title: (
        <>
          Continuous
          <br />
          Learning
        </>
      ),
      description:
        "Exploring new technologies, experimenting with ideas, and improving through hands-on projects.",
    },
  ];

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
      id="about"
      className={`border-t px-6 py-28 transition-colors duration-500 lg:px-10 ${
        lightMode
          ? "border-black/10 bg-[#f5f5f2]"
          : "border-white/10 bg-black"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION LABEL
        ========================= */}

        <ScrollReveal>
          <div className="mb-16 flex items-center gap-4">

            <span className="font-mono text-sm text-lime-500">
              01 /
            </span>

            <h2
              className={`text-sm font-medium tracking-[0.25em] transition-colors duration-500 ${
                lightMode
                  ? "text-neutral-500"
                  : "text-neutral-400"
              }`}
            >
              ABOUT ME
            </h2>

          </div>
        </ScrollReveal>


        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">

          {/* LEFT */}

          <ScrollReveal delay={100}>
            <div>

              <h3
                className={`text-5xl font-bold leading-[0.95] tracking-tight transition-colors duration-500 sm:text-6xl lg:text-7xl ${
                  lightMode
                    ? "text-black"
                    : "text-white"
                }`}
              >
                I&apos;M INTERESTED
                <br />
                IN BUILDING
                <br />

                <span
                  className={
                    lightMode
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }
                >
                  THINGS THAT
                </span>

                <br />

                MATTER.
              </h3>


              <div className="mt-12 max-w-2xl">

                <p
                  className={`text-lg leading-8 transition-colors duration-500 ${
                    lightMode
                      ? "text-neutral-600"
                      : "text-neutral-400"
                  }`}
                >
                  I&apos;m a software developer who enjoys building practical
                  software and turning ideas into useful solutions.
                </p>

                <p
                  className={`mt-6 text-lg leading-8 transition-colors duration-500 ${
                    lightMode
                      ? "text-neutral-600"
                      : "text-neutral-400"
                  }`}
                >
                  I like understanding how things work, experimenting with new
                  technologies, and continuously improving the way I build.
                </p>

                <p
                  className={`mt-6 text-lg leading-8 transition-colors duration-500 ${
                    lightMode
                      ? "text-neutral-600"
                      : "text-neutral-400"
                  }`}
                >
                  Outside of software, I enjoy photography — exploring places,
                  observing details, and capturing moments from a different
                  perspective.
                </p>

              </div>

            </div>
          </ScrollReveal>


          {/* =========================
              RIGHT INFORMATION PANEL
          ========================= */}

          <ScrollReveal delay={250}>
            <div className="lg:pt-4">

              <div
                className={`
                  group
                  border
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-lime-400/40
                  ${
                    lightMode
                      ? "border-black/10 bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                      : "border-white/10 bg-neutral-950 hover:shadow-[0_20px_60px_rgba(163,255,0,0.04)]"
                  }
                `}
              >

                {/* BASED IN */}

                <div
                  className={`
                    border-b
                    p-6
                    transition-colors
                    duration-300
                    ${
                      lightMode
                        ? "border-black/10 hover:bg-black/[0.02]"
                        : "border-white/10 hover:bg-white/[0.02]"
                    }
                  `}
                >

                  <p
                    className={`font-mono text-xs tracking-[0.2em] ${
                      lightMode
                        ? "text-neutral-400"
                        : "text-neutral-600"
                    }`}
                  >
                    BASED IN
                  </p>

                  <p
                    className={`mt-3 text-lg font-medium ${
                      lightMode
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    INDIA
                  </p>

                </div>


                {/* FOCUS */}

                <div
                  className={`
                    border-b
                    p-6
                    transition-colors
                    duration-300
                    ${
                      lightMode
                        ? "border-black/10 hover:bg-black/[0.02]"
                        : "border-white/10 hover:bg-white/[0.02]"
                    }
                  `}
                >

                  <p
                    className={`font-mono text-xs tracking-[0.2em] ${
                      lightMode
                        ? "text-neutral-400"
                        : "text-neutral-600"
                    }`}
                  >
                    FOCUS
                  </p>

                  <p
                    className={`mt-3 text-lg font-medium ${
                      lightMode
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    SOFTWARE DEVELOPMENT
                  </p>

                </div>


                {/* CURRENTLY */}

                <div
                  className={`
                    border-b
                    p-6
                    transition-colors
                    duration-300
                    ${
                      lightMode
                        ? "border-black/10 hover:bg-black/[0.02]"
                        : "border-white/10 hover:bg-white/[0.02]"
                    }
                  `}
                >

                  <p
                    className={`font-mono text-xs tracking-[0.2em] ${
                      lightMode
                        ? "text-neutral-400"
                        : "text-neutral-600"
                    }`}
                  >
                    CURRENTLY
                  </p>

                  <p className="mt-3 text-lg font-medium text-lime-500">
                    LEARNING &amp; BUILDING
                  </p>

                </div>


                {/* INTERESTS */}

                <div className="p-6">

                  <p
                    className={`font-mono text-xs tracking-[0.2em] ${
                      lightMode
                        ? "text-neutral-400"
                        : "text-neutral-600"
                    }`}
                  >
                    INTERESTS
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {interests.map((interest, index) => (
                      <span
                        key={interest}
                        className={`
                          border
                          px-3
                          py-2
                          text-xs
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-lime-400/40
                          hover:text-lime-500
                          ${
                            lightMode
                              ? "border-black/10 text-neutral-500"
                              : "border-white/10 text-neutral-400"
                          }
                        `}
                        style={{
                          transitionDelay: `${index * 40}ms`,
                        }}
                      >
                        {interest}
                      </span>
                    ))}

                  </div>

                </div>

              </div>


              {/* SMALL STATEMENT */}

              <div
                className="
                  mt-8
                  border-l-2
                  border-lime-400
                  pl-5
                  transition-transform
                  duration-500
                  hover:translate-x-2
                "
              >

                <p
                  className={`font-mono text-sm leading-6 transition-colors duration-500 ${
                    lightMode
                      ? "text-neutral-500"
                      : "text-neutral-500"
                  }`}
                >
                  &quot;Always curious.
                  <br />
                  Always learning.
                  <br />
                  Always building.&quot;
                </p>

              </div>

            </div>
          </ScrollReveal>

        </div>


        {/* =========================
            WHAT I DO
        ========================= */}

        <div
          className={`
            mt-28
            border-t
            pt-16
            ${
              lightMode
                ? "border-black/10"
                : "border-white/10"
            }
          `}
        >

          <ScrollReveal>
            <div className="mb-12 flex items-center gap-4">

              <span className="font-mono text-sm text-lime-500">
                01.1 /
              </span>

              <h3
                className={`text-sm font-medium tracking-[0.25em] ${
                  lightMode
                    ? "text-neutral-500"
                    : "text-neutral-400"
                }`}
              >
                WHAT I DO
              </h3>

            </div>
          </ScrollReveal>


          <div
            className={`
              grid
              border-l
              border-t
              md:grid-cols-2
              lg:grid-cols-4
              ${
                lightMode
                  ? "border-black/10"
                  : "border-white/10"
              }
            `}
          >

            {services.map((service, index) => (
              <ScrollReveal
                key={service.number}
                delay={index * 120}
              >

                <div
                  className={`
                    group
                    relative
                    h-full
                    overflow-hidden
                    border-b
                    border-r
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    ${
                      lightMode
                        ? "border-black/10 hover:bg-white"
                        : "border-white/10 hover:bg-neutral-950"
                    }
                  `}
                >

                  {/* Hover glow */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      ${
                        lightMode
                          ? "bg-lime-500/[0.06]"
                          : "bg-lime-400/[0.04]"
                      }
                    `}
                  />


                  <div className="relative z-10">

                    {/* Number */}

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
                      {service.number}
                    </span>


                    {/* Title */}

                    <h4
                      className={`
                        mt-10
                        text-xl
                        font-medium
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        ${
                          lightMode
                            ? "text-black"
                            : "text-white"
                        }
                      `}
                    >
                      {service.title}
                    </h4>


                    {/* Description */}

                    <p
                      className={`
                        mt-5
                        text-sm
                        leading-6
                        ${
                          lightMode
                            ? "text-neutral-600"
                            : "text-neutral-500"
                        }
                      `}
                    >
                      {service.description}
                    </p>


                    {/* Bottom indicator */}

                    <div
                      className="
                        mt-8
                        h-px
                        w-0
                        bg-lime-400
                        transition-all
                        duration-500
                        group-hover:w-10
                      "
                    />

                  </div>

                </div>

              </ScrollReveal>
            ))}

          </div>

        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================= */}

        <ScrollReveal delay={200}>
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
                I&apos;m interested in building things that are useful,
                thoughtful, and worth improving.
              </p>

              <span className="font-mono text-xs tracking-[0.2em] text-lime-500">
                ALWAYS CURIOUS.
              </span>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default About;