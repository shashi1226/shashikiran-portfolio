import { useEffect, useState } from "react";

const journey = [
  {
    number: "01",
    title: "Graduation",
    category: "EDUCATION",
    description:
      "Completed my graduation and started focusing on building a career in software development.",
  },
  {
    number: "02",
    title: "Full-Stack Development",
    category: "KODNEST",
    description:
      "Completed a Full-Stack Development course at KodNest after graduation, strengthening my skills in frontend, backend, databases, and application development.",
  },
  {
    number: "03",
    title: "Building Projects",
    category: "PRACTICAL EXPERIENCE",
    description:
      "Started building practical applications to turn what I learned into real-world projects and improve my problem-solving skills.",
  },
  {
    number: "04",
    title: "Always Learning",
    category: "CURRENTLY",
    description:
      "Continuing to learn new technologies, improve my development skills, and build better software.",
  },
];

function Journey() {
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
      id="journey"
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
            04 /
          </span>

          <h2
            className={`text-sm font-medium tracking-[0.25em] transition-colors duration-500 ${
              lightMode
                ? "text-neutral-500"
                : "text-neutral-400"
            }`}
          >
            MY JOURNEY
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
            JOURNEY TIMELINE
        ========================= */}

        <div className="relative">

          {/* Timeline line */}

          <div
            className={`
              absolute
              left-[11px]
              top-0
              hidden
              h-full
              w-px
              md:block
              ${
                lightMode
                  ? "bg-black/10"
                  : "bg-white/10"
              }
            `}
          />


          <div className="space-y-12">

            {journey.map((item) => (
              <article
                key={item.number}
                className="group relative grid gap-8 md:grid-cols-[100px_1fr]"
              >

                {/* =========================
                    NUMBER / TIMELINE
                ========================= */}

                <div className="relative z-10">

                  <div
                    className={`
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-500
                      group-hover:border-lime-500
                      group-hover:bg-lime-500
                      ${
                        lightMode
                          ? "border-lime-500/50 bg-[#f5f5f2]"
                          : "border-lime-400/50 bg-black"
                      }
                    `}
                  >

                    <div
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-lime-500
                        transition-colors
                        duration-500
                        group-hover:bg-black
                      "
                    />

                  </div>


                  <span
                    className={`
                      mt-4
                      block
                      font-mono
                      text-xs
                      tracking-[0.2em]
                      ${
                        lightMode
                          ? "text-neutral-400"
                          : "text-neutral-600"
                      }
                    `}
                  >
                    {item.number}
                  </span>

                </div>


                {/* =========================
                    CONTENT
                ========================= */}

                <div
                  className={`
                    border
                    p-6
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:border-lime-500/40
                    md:p-10
                    ${
                      lightMode
                        ? "border-black/10 bg-white hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)]"
                        : "border-white/10 bg-neutral-950 group-hover:bg-neutral-900"
                    }
                  `}
                >

                  {/* Category */}

                  <p
                    className={`
                      mb-4
                      text-xs
                      tracking-[0.2em]
                      text-lime-500
                      ${
                        lightMode
                          ? "opacity-80"
                          : "opacity-70"
                      }
                    `}
                  >
                    {item.category}
                  </p>


                  {/* Title */}

                  <h4
                    className={`
                      text-3xl
                      font-bold
                      tracking-tight
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      md:text-4xl
                      ${
                        lightMode
                          ? "text-black"
                          : "text-white"
                      }
                    `}
                  >
                    {item.title}
                  </h4>


                  {/* Description */}

                  <p
                    className={`
                      mt-5
                      max-w-2xl
                      text-base
                      leading-7
                      transition-colors
                      duration-500
                      ${
                        lightMode
                          ? "text-neutral-600"
                          : "text-neutral-400"
                      }
                    `}
                  >
                    {item.description}
                  </p>


                  {/* Arrow */}

                  <div
                    className={`
                      mt-8
                      font-mono
                      text-sm
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                      group-hover:text-lime-500
                      ${
                        lightMode
                          ? "text-neutral-400"
                          : "text-neutral-700"
                      }
                    `}
                  >
                    ↗
                  </div>

                </div>

              </article>
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

          <p
            className={`
              max-w-3xl
              text-lg
              leading-8
              ${
                lightMode
                  ? "text-neutral-600"
                  : "text-neutral-500"
              }
            `}
          >
            My journey is still in progress. Every project, mistake, and new
            technology is another opportunity to become a better developer.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Journey;