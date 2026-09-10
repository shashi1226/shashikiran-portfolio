import { useEffect, useState } from "react";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const [lightMode, setLightMode] = useState(
    document.documentElement.classList.contains("light")
  );

  const terminalText = "Always learning";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(terminalText.slice(0, index + 1));
      index++;

      if (index === terminalText.length) {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

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
      id="home"
      className={`relative min-h-screen overflow-hidden px-6 pb-20 pt-36 transition-colors duration-500 lg:px-10 ${
        lightMode ? "bg-[#f5f5f2]" : "bg-black"
      }`}
    >

      {/* =========================
          BACKGROUND EFFECTS
      ========================= */}

      <div
        className={`pointer-events-none absolute right-[-15%] top-[20%] h-[500px] w-[500px] rounded-full blur-[140px] animate-glow ${
          lightMode
            ? "bg-lime-500/[0.06]"
            : "bg-lime-400/5"
        }`}
      />

      <div
        className={`pointer-events-none absolute bottom-[-20%] left-[-20%] h-[400px] w-[400px] rounded-full blur-[120px] ${
          lightMode
            ? "bg-lime-500/[0.025]"
            : "bg-lime-400/[0.02]"
        }`}
      />


      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-16 lg:grid-cols-2">


        {/* =========================
            LEFT SIDE
        ========================= */}

        <div>

          {/* Role */}

          <p
            className="animate-slide-left mb-6 text-sm font-medium tracking-[0.25em] text-lime-500"
            style={{ animationDelay: "0.1s" }}
          >
            SOFTWARE DEVELOPER
          </p>


          {/* Main heading */}

          <h1
            className={`text-6xl font-bold leading-[0.9] tracking-[-0.04em] transition-colors duration-500 sm:text-7xl lg:text-[7rem] ${
              lightMode
                ? "text-black"
                : "text-white"
            }`}
          >

            <span
              className="block animate-slide-left"
              style={{ animationDelay: "0.2s" }}
            >
              I BUILD
            </span>

            <span
              className="block animate-slide-left"
              style={{ animationDelay: "0.35s" }}
            >
              SOFTWARE.
            </span>

            <span
              className="block animate-slide-left"
              style={{ animationDelay: "0.5s" }}
            >
              I SOLVE
            </span>

            <span
              className={`block animate-slide-left ${
                lightMode
                  ? "text-neutral-400"
                  : "text-neutral-600"
              }`}
              style={{ animationDelay: "0.65s" }}
            >
              PROBLEMS.
            </span>

          </h1>


          {/* Description */}

          <p
            className={`animate-fade-up mt-10 max-w-xl text-lg leading-relaxed transition-colors duration-500 ${
              lightMode
                ? "text-neutral-600"
                : "text-neutral-400"
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            I enjoy building practical software, learning new technologies,
            and turning ideas into useful solutions.
          </p>


          {/* Buttons */}

          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.95s" }}
          >

            {/* VIEW WORK */}

            <a
              href="#work"
              className="group relative overflow-hidden bg-lime-400 px-7 py-4 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,255,0,0.2)]"
            >
              <span className="relative z-10">
                VIEW MY WORK
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
            </a>


            {/* CONTACT */}

            <a
              href="#contact"
              className={`group border px-7 py-4 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:text-lime-500 ${
                lightMode
                  ? "border-black/20 text-black"
                  : "border-white/20 text-white"
              }`}
            >
              CONTACT ME

              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>

            </a>

          </div>


          {/* Location / status */}

          <div
            className={`animate-fade-up mt-12 flex gap-8 text-xs tracking-[0.2em] transition-colors duration-500 ${
              lightMode
                ? "text-neutral-500"
                : "text-neutral-500"
            }`}
            style={{ animationDelay: "1.1s" }}
          >

            <span>
              INDIA
            </span>

            <span className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-glow" />

              OPEN TO OPPORTUNITIES

            </span>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="hidden lg:block">

          <div
            className="relative mx-auto max-w-lg animate-slide-right"
            style={{ animationDelay: "0.5s" }}
          >

            {/* Glow */}

            <div
              className={`absolute -inset-10 rounded-full blur-3xl animate-glow ${
                lightMode
                  ? "bg-lime-500/[0.06]"
                  : "bg-lime-400/5"
              }`}
            />


            {/* Terminal */}

            <div
              className={`relative animate-float border shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/30 ${
                lightMode
                  ? "border-black/10 bg-white shadow-black/10"
                  : "border-white/10 bg-neutral-950"
              }`}
            >

              {/* Terminal header */}

              <div
                className={`flex items-center border-b px-5 py-4 ${
                  lightMode
                    ? "border-black/10"
                    : "border-white/10"
                }`}
              >

                <div className="flex gap-2">

                  <span className="h-3 w-3 rounded-full bg-neutral-400 transition-colors duration-300 hover:bg-red-500" />

                  <span className="h-3 w-3 rounded-full bg-neutral-400 transition-colors duration-300 hover:bg-yellow-500" />

                  <span className="h-3 w-3 rounded-full bg-neutral-400 transition-colors duration-300 hover:bg-green-500" />

                </div>

                <span
                  className={`ml-4 font-mono text-xs transition-colors duration-500 ${
                    lightMode
                      ? "text-neutral-500"
                      : "text-neutral-500"
                  }`}
                >
                  shashikiran@portfolio
                </span>

              </div>


              {/* Terminal content */}

              <div className="p-7 font-mono text-sm leading-8">

                <p
                  className={
                    lightMode
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }
                >
                  $ whoami
                </p>

                <p
                  className={
                    lightMode
                      ? "text-black"
                      : "text-white"
                  }
                >
                  shashikiran
                </p>


                <br />


                <p
                  className={
                    lightMode
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }
                >
                  $ role
                </p>

                <p className="text-lime-500">
                  Software Developer
                </p>


                <br />


                <p
                  className={
                    lightMode
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }
                >
                  $ interests
                </p>

                <p
                  className={
                    lightMode
                      ? "text-black"
                      : "text-white"
                  }
                >
                  Software · Technology · Problem Solving
                </p>


                <br />


                <p
                  className={
                    lightMode
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }
                >
                  $ hobby
                </p>

                <p
                  className={
                    lightMode
                      ? "text-black"
                      : "text-white"
                  }
                >
                  Photography
                </p>


                <br />


                <p
                  className={
                    lightMode
                      ? "text-neutral-400"
                      : "text-neutral-600"
                  }
                >
                  $ status
                </p>

                <p className="text-lime-500">

                  {typedText}

                  <span className="animate-cursor">
                    _
                  </span>

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-soft-fade lg:block"
        style={{ animationDelay: "1.5s" }}
      >

        <a
          href="#work"
          className="group flex flex-col items-center gap-3"
        >

          <span
            className={`font-mono text-[10px] tracking-[0.25em] transition-colors duration-300 group-hover:text-lime-500 ${
              lightMode
                ? "text-neutral-400"
                : "text-neutral-600"
            }`}
          >
            SCROLL
          </span>

          <span
            className={`h-10 w-px transition-all duration-500 group-hover:h-14 group-hover:bg-lime-400 ${
              lightMode
                ? "bg-neutral-300"
                : "bg-neutral-800"
            }`}
          />

        </a>

      </div>

    </section>
  );
}

export default Hero;