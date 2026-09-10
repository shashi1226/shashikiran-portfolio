import ScrollReveal from "./ScrollReveal";

const interests = [
  {
    number: "01",
    title: "PHOTOGRAPHY",
    description:
      "I enjoy capturing moments, experimenting with composition, and seeing ordinary things from a different perspective.",
  },
  {
    number: "02",
    title: "CURIOSITY",
    description:
      "I like understanding how things work and exploring new ideas, technologies, and skills.",
  },
  {
    number: "03",
    title: "CREATIVITY",
    description:
      "Whether it is code or photography, I enjoy creating something from an idea and making it my own.",
  },
];

function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="border-t border-white/10 bg-black px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <ScrollReveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="font-mono text-sm text-lime-400">
              06 /
            </span>

            <h2 className="text-sm font-medium tracking-[0.25em] text-neutral-400">
              BEYOND CODE
            </h2>
          </div>
        </ScrollReveal>


        {/* MAIN CONTENT */}
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">

          {/* LEFT */}
          <ScrollReveal delay={100}>
            <div>

              <h3 className="text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                THERE&apos;S
                <br />

                <span className="text-neutral-600">
                  MORE
                </span>

                <br />

                THAN CODE.
              </h3>


              <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-400">
                Technology is a big part of what I do, but it isn&apos;t the
                only thing I enjoy. I like exploring creativity, learning new
                things, and finding inspiration outside the screen.
              </p>

            </div>
          </ScrollReveal>


          {/* PHOTOGRAPHY CARD */}
          <ScrollReveal delay={250}>
            <div className="flex items-end">

              <div className="group relative w-full overflow-hidden border border-white/10 bg-neutral-950 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-[0_20px_60px_rgba(163,255,0,0.05)]">

                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-lime-400/5 blur-3xl transition-all duration-700 group-hover:h-64 group-hover:w-64 group-hover:bg-lime-400/10" />


                <div className="relative z-10">

                  <div className="mb-10 flex items-center justify-between">

                    <span className="font-mono text-xs tracking-[0.2em] text-lime-400">
                      CURRENT INTEREST
                    </span>

                    <span className="font-mono text-xs text-neutral-600">
                      01
                    </span>

                  </div>


                  <h4 className="text-3xl font-bold text-white transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                    PHOTOGRAPHY
                  </h4>


                  <p className="mt-5 leading-7 text-neutral-500">
                    Looking at the world through a camera has taught me to
                    notice details, light, perspective, and moments that are
                    easy to miss.
                  </p>


                  <div className="mt-8 h-px w-12 bg-lime-400 transition-all duration-500 group-hover:w-20" />


                  <p className="mt-6 font-mono text-xs tracking-[0.15em] text-neutral-600">
                    OBSERVE / CAPTURE / CREATE
                  </p>

                </div>

              </div>

            </div>
          </ScrollReveal>

        </div>


        {/* INTERESTS */}
        <div className="mt-20 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">

          {interests.map((interest, index) => (
            <ScrollReveal
              key={interest.number}
              delay={index * 150}
            >

              <article className="group h-full bg-black p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-950 hover:shadow-[0_20px_50px_rgba(163,255,0,0.04)] md:p-10">

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <span className="font-mono text-xs text-lime-400">
                    {interest.number}
                  </span>

                  <span className="font-mono text-xs text-neutral-700 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime-400">
                    ↗
                  </span>

                </div>


                {/* TITLE */}
                <h4 className="mt-12 text-xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1">
                  {interest.title}
                </h4>


                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-6 text-neutral-500">
                  {interest.description}
                </p>


                {/* ACCENT LINE */}
                <div className="mt-8 h-px w-0 bg-lime-400 transition-all duration-500 group-hover:w-10" />

              </article>

            </ScrollReveal>
          ))}

        </div>


        {/* BOTTOM STATEMENT */}
        <ScrollReveal delay={150}>
          <div className="mt-20 border-t border-white/10 pt-8">

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

              <p className="max-w-2xl text-2xl font-medium leading-relaxed text-neutral-300 md:text-3xl">
                &quot;Good ideas can come from anywhere.&quot;
              </p>

              <span className="font-mono text-xs tracking-[0.2em] text-lime-400">
                BE CURIOUS.
              </span>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default BeyondCode;