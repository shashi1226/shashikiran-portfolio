import { useEffect, useState } from "react";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Beyond Code", href: "#beyond" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Default: dark mode
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  /* =========================
     THEME
  ========================= */

  useEffect(() => {
    const root = document.documentElement;

    if (lightMode) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]);

  /* =========================
     SCROLL DETECTION
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     ACTIVE SECTION
  ========================= */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActiveSection(
            `#${visibleSection.target.id}`
          );
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.2, 0.5, 1],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  /* =========================
     CLOSE MOBILE MENU
  ========================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
        lightMode
          ? "border-black/10 bg-[#f5f5f2]/95"
          : "border-white/10 bg-black/95"
      } ${
        scrolled
          ? "py-1 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
          : "backdrop-blur-md"
      }`}
    >

      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >

        {/* =========================
            LOGO
        ========================= */}

        <a
          href="#home"
          className={`group relative text-lg font-bold tracking-tight transition-colors duration-500 ${
            lightMode
              ? "text-black"
              : "text-white"
          }`}
        >
          SHASHIKIRAN

          <span className="text-lime-500 transition-all duration-300 group-hover:text-black">
            .
          </span>

          <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime-500 transition-all duration-300 group-hover:w-full" />
        </a>


        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <div className="hidden items-center gap-6 md:flex">

          {navItems.map((item) => {
            const isActive =
              activeSection === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`group relative py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? lightMode
                      ? "text-black"
                      : "text-white"
                    : lightMode
                      ? "text-neutral-500 hover:text-black"
                      : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-lime-500 transition-all duration-500 ease-out ${
                    isActive
                      ? "w-full shadow-[0_0_8px_rgba(163,255,0,0.5)]"
                      : "w-0 group-hover:w-full"
                  }`}
                />

                <span
                  className={`absolute -right-2 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-lime-500 transition-all duration-500 ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}


          {/* =========================
              THEME TOGGLE
          ========================= */}

          <button
            onClick={() => setLightMode(!lightMode)}
            type="button"
            aria-label={
              lightMode
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
            className={`group relative ml-1 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
              lightMode
                ? "border-black/15 hover:border-lime-500 hover:bg-black/5"
                : "border-white/15 hover:border-lime-400 hover:bg-white/5"
            }`}
          >
            <span
              className={`text-sm transition-all duration-500 ${
                lightMode
                  ? "rotate-0 scale-100"
                  : "rotate-90 scale-100"
              }`}
            >
              {lightMode ? "☀" : "☾"}
            </span>

            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_18px_rgba(163,255,0,0.12)]" />
          </button>

        </div>


        {/* =========================
            MOBILE CONTROLS
        ========================= */}

        <div className="flex items-center gap-3 md:hidden">

          {/* Theme */}

          <button
            onClick={() => setLightMode(!lightMode)}
            type="button"
            aria-label={
              lightMode
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-all duration-300 ${
              lightMode
                ? "border-black/15 text-black hover:border-lime-500"
                : "border-white/15 text-white hover:border-lime-400"
            }`}
          >
            {lightMode ? "☀" : "☾"}
          </button>


          {/* Hamburger */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="group relative flex h-8 w-8 items-center justify-center"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            type="button"
          >

            <span
              className={`absolute h-px w-6 transition-all duration-300 ${
                lightMode
                  ? "bg-black"
                  : "bg-white"
              } ${
                menuOpen
                  ? "rotate-45"
                  : "-translate-y-2"
              }`}
            />

            <span
              className={`absolute h-px w-6 transition-all duration-300 ${
                lightMode
                  ? "bg-black"
                  : "bg-white"
              } ${
                menuOpen
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-px w-6 transition-all duration-300 ${
                lightMode
                  ? "bg-black"
                  : "bg-white"
              } ${
                menuOpen
                  ? "-rotate-45"
                  : "translate-y-2"
              }`}
            />

          </button>

        </div>

      </nav>


      {/* =========================
          MOBILE NAVIGATION
      ========================= */}

      <div
        className={`overflow-hidden border-t transition-all duration-500 ease-out md:hidden ${
          lightMode
            ? "border-black/10 bg-[#f5f5f2]"
            : "border-white/10 bg-black"
        } ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="px-6 py-6">

          <div className="flex flex-col">

            {navItems.map((item, index) => {
              const isActive =
                activeSection === item.href;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between border-b py-4 ${
                    lightMode
                      ? "border-black/10"
                      : "border-white/10"
                  }`}
                  style={{
                    transitionDelay: menuOpen
                      ? `${index * 60}ms`
                      : "0ms",
                  }}
                >

                  <span
                    className={`text-base transition-colors duration-300 ${
                      isActive
                        ? "text-lime-500"
                        : lightMode
                          ? "text-neutral-600 group-hover:text-black"
                          : "text-neutral-300 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>

                  <span
                    className={`font-mono text-xs transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-lime-500 opacity-100"
                        : lightMode
                          ? "-translate-x-2 text-neutral-400 opacity-0 group-hover:translate-x-0 group-hover:text-lime-500 group-hover:opacity-100"
                          : "-translate-x-2 text-neutral-700 opacity-0 group-hover:translate-x-0 group-hover:text-lime-400 group-hover:opacity-100"
                    }`}
                  >
                    ↗
                  </span>

                </a>
              );
            })}

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;