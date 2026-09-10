
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    number: "01",
    title: "WorkConsole",
    category: "FULL-STACK APPLICATION",
    description:
      "A full-stack task management application built with authentication, REST APIs, CRUD operations, and a responsive user interface.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/projects/workconsole.png",
    featured: true,
    live: "https://workconsole.vercel.app",
    github: "https://github.com/shashi1226/workconsole",
  },
  {
    number: "02",
    title: "Sign Language Detection",
    category: "AI / COMPUTER VISION",
    description:
      "A real-time sign language recognition system using computer vision and machine learning to identify hand gestures.",
    tech: ["Python", "OpenCV", "TensorFlow", "MobileNet", "KNN"],
    image: "/images/projects/sign-language.png",
    featured: false,
    live: "https://elysian01.github.io/Sign-Language-Translator/",
    github: "https://github.com/shashi1226/Sign-Language-Translator",
  },
  {
    number: "03",
    title: "Chatbot",
    category: "NEXT.JS APPLICATION",
    description:
      "A chatbot application built using Next.js, focused on creating an interactive conversational interface and exploring modern frontend development.",
    tech: ["Next.js", "React", "JavaScript", "API"],
    image: "/images/projects/react-projects.png",
    featured: false,
    live: "https://github.com/shashi1226/chatbot",
    github: "https://github.com/shashi1226/chatbot",
  },
];

function Projects() {
  const [lightMode, setLightMode] = useState(
    document.documentElement.classList.contains("light")
  );

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
      id="work"
      className={`border-t px-6 py-28 transition-colors duration-500 lg:px-10 ${
        lightMode
          ? "border-black/10 bg-[#f5f5f2]"
          : "border-white/10 bg-black"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION LABEL */}

        <ScrollReveal>
          <div className="mb-16 flex items-center gap-4">

            <span className="font-mono text-sm text-lime-500">
              03 /
            </span>

            <h2
              className={`text-sm font-medium tracking-[0.25em] transition-colors duration-500 ${
                lightMode
                  ? "text-neutral-500"
                  : "text-neutral-400"
              }`}
            >
              SELECTED WORK
            </h2>

          </div>
        </ScrollReveal>


        {/* MAIN HEADING */}

        <ScrollReveal delay={100}>
          <div className="mb-20 max-w-4xl">

            <h3
              className={`text-5xl font-bold leading-[0.95] tracking-tight transition-colors duration-500 sm:text-6xl lg:text-7xl ${
                lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              THINGS
              <br />

              <span
                className={
                  lightMode
                    ? "text-neutral-400"
                    : "text-neutral-600"
                }
              >
                I&apos;VE
              </span>

              <br />

              BUILT.
            </h3>

          </div>
        </ScrollReveal>


        {/* PROJECT LIST */}

        <div className="space-y-8">

          {projects.map((project, index) => (
            <ScrollReveal
              key={project.number}
              delay={index * 150}
            >

              <article
                className={`group relative overflow-hidden border transition-all duration-500 hover:-translate-y-1 ${
                  lightMode
                    ? "border-black/10 bg-white hover:border-lime-500/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                    : "border-white/10 bg-neutral-950 hover:border-lime-400/40 hover:shadow-[0_20px_60px_rgba(163,255,0,0.05)]"
                }`}
              >

                {/* FEATURED ACCENT */}

                {project.featured && (
                  <div className="absolute left-0 top-0 z-30 h-full w-[2px] bg-lime-400 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                )}


                {/* IMAGE PREVIEW */}

                <div
                  className={`group/preview relative aspect-[16/7] overflow-hidden border-b transition-colors duration-500 ${
                    lightMode
                      ? "border-black/10 bg-[#eeeeeb]"
                      : "border-white/10 bg-black"
                  }`}
                >

                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-contain p-4 transition-all duration-700 ease-out group-hover/preview:scale-[1.035] md:p-6"
                  />

                  <div
                    className={`pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-700 group-hover/preview:opacity-100 ${
                      lightMode
                        ? "bg-lime-500/[0.035]"
                        : "bg-lime-400/[0.03]"
                    }`}
                  />

                  <div
                    className={`pointer-events-none absolute inset-0 transition-all duration-700 ${
                      lightMode
                        ? "bg-black/[0.04] group-hover/preview:bg-black/0"
                        : "bg-black/20 group-hover/preview:bg-black/0"
                    }`}
                  />

                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover/preview:opacity-100 ${
                      lightMode
                        ? "from-black/20"
                        : "from-black/60"
                    }`}
                  />

                  <span
                    className={`absolute bottom-5 left-6 z-10 font-mono text-xs tracking-[0.3em] transition-all duration-500 group-hover/preview:translate-x-1 group-hover/preview:text-lime-500 ${
                      lightMode
                        ? "text-black/40"
                        : "text-white/40"
                    }`}
                  >
                    PROJECT {project.number}
                  </span>

                  <span
                    className={`absolute right-6 top-6 z-10 font-mono text-sm transition-all duration-500 group-hover/preview:translate-x-1 group-hover/preview:-translate-y-1 group-hover/preview:text-lime-500 ${
                      lightMode
                        ? "text-black/40"
                        : "text-white/40"
                    }`}
                  >
                    ↗
                  </span>

                </div>


                {/* PROJECT CONTENT */}

                <div className="p-6 md:p-10">

                  <div className="grid gap-10 lg:grid-cols-[100px_1fr_1fr]">

                    {/* NUMBER */}

                    <div>
                      <span className="font-mono text-sm text-lime-500 transition-all duration-300 group-hover:tracking-[0.2em]">
                        {project.number}
                      </span>
                    </div>


                    {/* INFORMATION */}

                    <div>

                      <p
                        className={`mb-4 text-xs tracking-[0.2em] transition-colors duration-300 group-hover:text-lime-500 ${
                          lightMode
                            ? "text-neutral-500"
                            : "text-neutral-600 group-hover:text-neutral-400"
                        }`}
                      >
                        {project.category}
                      </p>

                      <h4
                        className={`text-3xl font-bold tracking-tight transition-all duration-500 group-hover:translate-x-1 md:text-4xl ${
                          lightMode
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {project.title}
                      </h4>

                      <p
                        className={`mt-6 max-w-xl text-base leading-7 transition-colors duration-500 ${
                          lightMode
                            ? "text-neutral-600"
                            : "text-neutral-400"
                        }`}
                      >
                        {project.description}
                      </p>

                    </div>


                    {/* TECHNOLOGIES + LINKS */}

                    <div className="flex flex-col justify-between">

                      <div className="flex flex-wrap gap-2">

                        {project.tech.map((technology) => (
                          <span
                            key={technology}
                            className={`border px-3 py-2 text-xs transition-all duration-300 ${
                              lightMode
                                ? "border-black/10 text-neutral-500 group-hover:border-black/20 group-hover:text-neutral-700"
                                : "border-white/10 text-neutral-500 group-hover:border-white/20 group-hover:text-neutral-300"
                            }`}
                          >
                            {technology}
                          </span>
                        ))}

                      </div>


                      {/* LINKS */}

                      <div className="mt-10 flex flex-wrap gap-6">

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/link inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-lime-500 ${
                            lightMode
                              ? "text-black"
                              : "text-white"
                          }`}
                        >
                          VIEW PROJECT

                          <span className="transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                            ↗
                          </span>

                        </a>


                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors duration-300 hover:text-lime-500"
                        >
                          SOURCE CODE

                          <span className="transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                            ↗
                          </span>

                        </a>

                      </div>

                    </div>

                  </div>


                  {/* FEATURED PROJECT */}

                  {project.featured && (
                    <div
                      className={`mt-8 border-t pt-5 ${
                        lightMode
                          ? "border-black/10"
                          : "border-white/10"
                      }`}
                    >
                      <span className="font-mono text-xs tracking-[0.15em] text-lime-500">
                        ★ FEATURED PROJECT
                      </span>
                    </div>
                  )}

                </div>

              </article>

            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;