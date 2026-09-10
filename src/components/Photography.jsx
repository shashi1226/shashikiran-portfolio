import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const photos = [
  {
    id: "01",
    title: "Quiet Watch",
    category: "WILDLIFE",
    image: "/images/photography/photo-01.jpeg",
  },
  {
    id: "02",
    title: "Chasing the Sun",
    category: "LANDSCAPE",
    image: "/images/photography/photo-02.jpeg",
  },
  {
    id: "03",
    title: "Into the Details",
    category: "MACRO",
    image: "/images/photography/photo-03.jpeg",
  },
];

function Photography() {
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
      id="beyond"
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

        <ScrollReveal>
          <div className="mb-16 flex items-center gap-4">

            <span className="font-mono text-sm text-lime-500">
              06 /
            </span>

            <h2
              className={`text-sm font-medium tracking-[0.25em] transition-colors duration-500 ${
                lightMode
                  ? "text-neutral-500"
                  : "text-neutral-400"
              }`}
            >
              BEYOND CODE
            </h2>

          </div>
        </ScrollReveal>


        {/* =========================
            INTRODUCTION
        ========================= */}

        <ScrollReveal delay={100}>
          <div className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-end">

            <div>

              <p
                className={`mb-6 font-mono text-xs tracking-[0.2em] ${
                  lightMode
                    ? "text-neutral-400"
                    : "text-neutral-600"
                }`}
              >
                PHOTOGRAPHY
              </p>

              <h3
                className={`text-5xl font-bold leading-[0.95] tracking-tight transition-colors duration-500 sm:text-6xl lg:text-7xl ${
                  lightMode
                    ? "text-black"
                    : "text-white"
                }`}
              >
                SOFTWARE
                <br />
                IS WHAT I
                <br />

                <span
                  className={
                    lightMode
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }
                >
                  BUILD.
                </span>

              </h3>

            </div>


            <div className="max-w-lg lg:pb-2">

              <p
                className={`text-2xl font-medium leading-9 transition-colors duration-500 ${
                  lightMode
                    ? "text-black"
                    : "text-white"
                }`}
              >
                Photography is how I see.
              </p>

              <p
                className={`mt-5 text-base leading-7 transition-colors duration-500 ${
                  lightMode
                    ? "text-neutral-600"
                    : "text-neutral-500"
                }`}
              >
                Away from the screen, I enjoy observing places, people,
                details, and everyday moments through my camera.
              </p>

            </div>

          </div>
        </ScrollReveal>


        {/* =========================
            GALLERY
        ========================= */}

        <ScrollReveal delay={200}>
          <div className="grid gap-5 md:grid-cols-2">

            {/* Featured photograph */}

            <PhotoCard
              photo={photos[0]}
              featured
              lightMode={lightMode}
            />


            {/* Supporting photographs */}

            <div className="grid gap-5">

              <PhotoCard
                photo={photos[1]}
                lightMode={lightMode}
              />

              <PhotoCard
                photo={photos[2]}
                lightMode={lightMode}
              />

            </div>

          </div>
        </ScrollReveal>


        {/* =========================
            BOTTOM STATEMENT
        ========================= */}

        <ScrollReveal delay={300}>
          <div
            className={`mt-16 flex flex-col gap-4 border-t pt-6 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between ${
              lightMode
                ? "border-black/10"
                : "border-white/10"
            }`}
          >

            <p
              className={`text-sm ${
                lightMode
                  ? "text-neutral-500"
                  : "text-neutral-600"
              }`}
            >
              A collection of moments captured along the way.
            </p>

            <span className="font-mono text-xs tracking-[0.15em] text-lime-500">
              MORE COMING SOON →
            </span>

          </div>
        </ScrollReveal>


        {/* =========================
            INSTAGRAM
        ========================= */}

        <ScrollReveal delay={400}>
          <div className="mt-8">

            <a
              href="https://www.instagram.com/shashin_1226/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-lime-500 ${
                lightMode
                  ? "text-neutral-500"
                  : "text-neutral-500"
              }`}
            >

              <span>
                FOLLOW MY PHOTOGRAPHY → @shashin_1226
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>

            </a>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}


/* =================================
   PHOTO CARD
================================= */

function PhotoCard({
  photo,
  featured = false,
  lightMode,
}) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        border
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-lime-500/50
        ${
          lightMode
            ? "border-black/10 bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            : "border-white/10 bg-neutral-950 hover:shadow-[0_20px_60px_rgba(163,255,0,0.05)]"
        }
        ${
          featured
            ? "aspect-[4/5]"
            : "aspect-[16/9]"
        }
      `}
    >

      {/* =========================
          IMAGE
      ========================= */}

      <img
        src={photo.image}
        alt={photo.title}
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          scale-100
          object-cover
          opacity-100

          md:scale-[1.02]
          md:opacity-0
          md:transition-all
          md:duration-1000
          md:ease-out
          md:group-hover:scale-105
          md:group-hover:opacity-100
        "
      />


      {/* =========================
          IMAGE GLOW
      ========================= */}

      <div
        className={`
          pointer-events-none
          absolute
          -inset-20
          z-10
          blur-3xl
          opacity-0
          transition-opacity
          duration-1000
          md:group-hover:opacity-100
          ${
            lightMode
              ? "bg-lime-500/[0.04]"
              : "bg-lime-400/[0.04]"
          }
        `}
      />


      {/* =========================
          DARK OVERLAY
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          bg-gradient-to-t
          from-black/90
          via-black/10
          to-transparent
          opacity-100

          md:opacity-0
          md:transition-opacity
          md:duration-700
          md:group-hover:opacity-100
        "
      />


      {/* =========================
          PLACEHOLDER
      ========================= */}

      <div
        className="
          absolute
          inset-0
          z-30
          flex
          items-center
          justify-center
          opacity-0

          md:opacity-100
          md:transition-all
          md:duration-700
          md:group-hover:scale-105
          md:group-hover:opacity-0
        "
      >
        <span
          className={`
            font-mono
            text-xs
            tracking-[0.3em]
            ${
              lightMode
                ? "text-neutral-400"
                : "text-neutral-700"
            }

            md:transition-colors
            md:duration-500
            md:group-hover:text-lime-500
          `}
        >
          PHOTO {photo.id}
        </span>
      </div>


      {/* =========================
          TOP CORNER
      ========================= */}

      <div
        className="
          absolute
          right-6
          top-6
          z-40
          font-mono
          text-xs
          text-lime-400
          opacity-100

          md:text-white/30
          md:opacity-0
          md:transition-all
          md:duration-500
          md:group-hover:translate-x-1
          md:group-hover:-translate-y-1
          md:group-hover:text-lime-400
          md:group-hover:opacity-100
        "
      >
        ↗
      </div>


      {/* =========================
          PHOTO INFORMATION
      ========================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-40
          flex
          items-end
          justify-between
          p-6
          translate-y-0
          opacity-100

          md:translate-y-4
          md:opacity-0
          md:transition-all
          md:duration-700
          md:ease-out
          md:group-hover:translate-y-0
          md:group-hover:opacity-100
        "
      >

        <div>

          <p className="text-xs tracking-[0.2em] text-neutral-400">
            {photo.category}
          </p>

          <h4 className="mt-2 text-xl font-medium text-white">
            {photo.title}
          </h4>

        </div>

        <span className="font-mono text-xs text-lime-400">
          {photo.id}
        </span>

      </div>


      {/* =========================
          BOTTOM LIME LINE
      ========================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-50
          h-px
          w-full
          bg-lime-400

          md:w-0
          md:transition-all
          md:duration-700
          md:group-hover:w-full
        "
      />

    </div>
  );
}

export default Photography;