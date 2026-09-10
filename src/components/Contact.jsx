import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const contactLinks = [
  {
    number: "01",
    label: "EMAIL",
    value: "poojarishashi30@gmail.com",
    href: "mailto:poojarishashi30@gmail.com",
  },
  {
    number: "02",
    label: "GITHUB",
    value: "github.com/shashi1226",
    href: "https://github.com/shashi1226",
  },
  {
    number: "03",
    label: "LINKEDIN",
    value: "linkedin.com/in/shashikiran-poojari1226",
    href: "https://www.linkedin.com/in/shashikiran-poojari1226/",
  },
];

function Contact() {
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
      id="contact"
      className={`border-t px-6 py-32 transition-colors duration-500 lg:px-10 ${
        lightMode
          ? "border-black/10 bg-[#f5f5f2]"
          : "border-white/10 bg-black"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <ScrollReveal>
          <div className="mb-16 flex items-center gap-4">

            <span className="font-mono text-sm text-lime-500">
              07 /
            </span>

            <h2
              className={`text-sm font-medium tracking-[0.25em] transition-colors duration-500 ${
                lightMode
                  ? "text-neutral-500"
                  : "text-neutral-400"
              }`}
            >
              CONTACT
            </h2>

          </div>
        </ScrollReveal>


        {/* =========================
            MAIN CTA
        ========================= */}

        <ScrollReveal delay={100}>
          <div className="max-w-5xl">

            <p className="mb-8 font-mono text-xs tracking-[0.2em] text-lime-500">
              HAVE AN IDEA?
            </p>

            <h3
              className={`text-6xl font-bold leading-[0.9] tracking-tight transition-colors duration-500 sm:text-7xl lg:text-9xl ${
                lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              LET&apos;S BUILD
              <br />

              <span
                className={
                  lightMode
                    ? "text-neutral-400"
                    : "text-neutral-600"
                }
              >
                SOMETHING
              </span>

              <br />

              TOGETHER.
            </h3>

            <p
              className={`mt-10 max-w-2xl text-lg leading-8 transition-colors duration-500 ${
                lightMode
                  ? "text-neutral-600"
                  : "text-neutral-500"
              }`}
            >
              Whether it&apos;s a project, an opportunity, or simply an idea
              worth discussing, feel free to reach out. I&apos;m always open
              to connecting and learning something new.
            </p>

          </div>
        </ScrollReveal>


        {/* =========================
            CONTACT LINKS
        ========================= */}

        <div
          className={`mt-20 border-t ${
            lightMode
              ? "border-black/10"
              : "border-white/10"
          }`}
        >

          {contactLinks.map((link, index) => (
            <ScrollReveal
              key={link.number}
              delay={index * 150}
            >
              <a
                href={link.href}
                target={
                  link.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`
                  group
                  grid
                  gap-5
                  border-b
                  py-8
                  transition-all
                  duration-300
                  md:grid-cols-[80px_140px_1fr_40px]
                  md:items-center
                  ${
                    lightMode
                      ? "border-black/10"
                      : "border-white/10"
                  }
                `}
              >

                {/* NUMBER */}

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
                        : "text-neutral-700"
                    }
                  `}
                >
                  {link.number}
                </span>


                {/* LABEL */}

                <span
                  className={`
                    font-mono
                    text-xs
                    tracking-[0.2em]
                    transition-colors
                    duration-300
                    group-hover:text-lime-500
                    ${
                      lightMode
                        ? "text-neutral-500"
                        : "text-neutral-600"
                    }
                  `}
                >
                  {link.label}
                </span>


                {/* VALUE */}

                <span
                  className={`
                    text-xl
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    group-hover:text-lime-500
                    md:text-2xl
                    ${
                      lightMode
                        ? "text-neutral-700"
                        : "text-neutral-300"
                    }
                  `}
                >
                  {link.value}
                </span>


                {/* ARROW */}

                <span
                  className={`
                    text-xl
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-lime-500
                    md:text-right
                    ${
                      lightMode
                        ? "text-neutral-400"
                        : "text-neutral-700"
                    }
                  `}
                >
                  ↗
                </span>

              </a>
            </ScrollReveal>
          ))}

        </div>


        {/* =========================
            AVAILABILITY
        ========================= */}

        <ScrollReveal delay={150}>
          <div
            className={`
              mt-20
              grid
              gap-6
              border-t
              pt-8
              md:grid-cols-2
              ${
                lightMode
                  ? "border-black/10"
                  : "border-white/10"
              }
            `}
          >

            {/* STATUS */}

            <div>

              <p
                className={`
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
                CURRENT STATUS
              </p>

              <div className="mt-4 flex items-center gap-3">

                <span className="h-2 w-2 animate-pulse rounded-full bg-lime-500 shadow-[0_0_12px_rgba(163,255,0,0.7)]" />

                <span
                  className={`
                    text-sm
                    font-medium
                    ${
                      lightMode
                        ? "text-neutral-700"
                        : "text-neutral-300"
                    }
                  `}
                >
                  OPEN TO OPPORTUNITIES
                </span>

              </div>

            </div>


            {/* RESPONSE */}

            <div className="md:text-right">

              <p
                className={`
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
                RESPONSE
              </p>

              <p
                className={`
                  mt-4
                  text-sm
                  ${
                    lightMode
                      ? "text-neutral-600"
                      : "text-neutral-500"
                  }
                `}
              >
                Usually within a few days.
              </p>

            </div>

          </div>
        </ScrollReveal>


        {/* =========================
            FOOTER
        ========================= */}

        <ScrollReveal delay={200}>
          <div
            className={`
              mt-24
              border-t
              pt-6
              ${
                lightMode
                  ? "border-black/10"
                  : "border-white/10"
              }
            `}
          >

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              {/* NAME */}

              <div>

                <p
                  className={`
                    text-sm
                    font-medium
                    ${
                      lightMode
                        ? "text-black"
                        : "text-white"
                    }
                  `}
                >
                  SHASHIKIRAN
                  <span className="text-lime-500">
                    .
                  </span>
                </p>

                <p
                  className={`
                    mt-2
                    font-mono
                    text-xs
                    ${
                      lightMode
                        ? "text-neutral-400"
                        : "text-neutral-700"
                    }
                  `}
                >
                  SOFTWARE DEVELOPER
                </p>

              </div>


              {/* COPYRIGHT */}

              <div className="flex flex-col gap-2 sm:items-end">

                <p
                  className={`
                    text-xs
                    ${
                      lightMode
                        ? "text-neutral-500"
                        : "text-neutral-600"
                    }
                  `}
                >
                  © {new Date().getFullYear()} Shashikiran.
                </p>

                <p
                  className={`
                    font-mono
                    text-xs
                    ${
                      lightMode
                        ? "text-neutral-400"
                        : "text-neutral-700"
                    }
                  `}
                >
                  DESIGNED &amp; BUILT WITH REACT
                </p>

              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Contact;