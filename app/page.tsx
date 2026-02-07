"use client";
import ReactLenis, { Lenis } from "lenis/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleContextMenu = (event: Event) => {
      event.preventDefault();
    };
    const handleDragStart = (event: DragEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.tagName === "IMG") {
        event.preventDefault();
      }
    };

    // Handle escape key to close mobile menu
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("dragstart", handleDragStart as EventListener);
    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("dragstart", handleDragStart as EventListener);
      window.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-[#ffffff] overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex overflow-hidden relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(250% 100% at 50% 100%, #ffffff 20%, #e5e7ee 25%, #8b5cf9 40%, #5b21b6 55%, #1e1b4d 70%, #000000 85%)",
            }}
          />
          <header className="absolute top-0 left-0 right-0 z-10 w-full">
            <div className="flex items-center px-6 md:px-12 py-4 md:py-6 w-full">
              {/* Left: Brand */}
              <div className="text-white font-bold tracking-wide text-lg md:text-xl hover:cursor-pointer page-relod-12 flex-shrink-0 w-32">
                <span>CH</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors z-50 ml-auto"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>

              {/* Center: Navigation */}
              <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 text-sm text-white/80 flex-1">
                <span className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Services
                </span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Project
                </span>
              </nav>

              {/* Right: Contact */}
              <button className="hidden md:inline-flex items-center gap-2 text-xs text-white/90 hover:text-white transition-colors group flex-shrink-0 w-32 justify-end">
                <span>CONTACT US</span>
                <ArrowRight
                  className="transition-transform group-hover:translate-x-0.5"
                  size={12}
                />
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
              className={`fixed inset-0 bg-black/80 z-50 transition-opacity duration-300 md:hidden ${
                mobileMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div
                className={`absolute top-0 right-0 w-80 bg-white h-full flex flex-col p-6 shadow-2xl transition-transform duration-300 md:hidden ${
                  mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-black hover:bg-gray-100 p-2 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
                <nav className="flex-1 flex flex-col gap-4 pt-8">
                  <span className="text-xl font-semibold text-black">CH</span>
                  <a
                    href="#about"
                    className="text-lg text-black/80 hover:text-black transition-colors py-2 border-b border-gray-100 hover:bg-gray-50 -mx-2 px-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </a>
                  <a
                    href="#services"
                    className="text-lg text-black/80 hover:text-black transition-colors py-2 border-b border-gray-100 hover:bg-gray-50 -mx-2 px-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#projects"
                    className="text-lg text-black/80 hover:text-black transition-colors py-2 border-b border-gray-100 hover:bg-gray-50 -mx-2 px-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Project
                  </a>
                  <button className="mt-8 w-full bg-black text-white py-3 rounded-lg hover:bg-black/90 transition-colors">
                    CONTACT US
                  </button>
                </nav>
              </div>
            </div>
          </header>

          <div className="absolute top-20 left-4 right-4 text-white text-center md:top-55 md:left-6 md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Crafting
              <br />
              narrative
              <br />
              <span className="text-white/50">
                through
                <br />
                design
              </span>
            </h1>
          </div>

          <div className="absolute bottom-18 w-full z-10 md:bottom-24">
            <div className=" mx-auto px-6 relative max-w-7xl w-full">
              <div
                onClick={() =>
                  window.scrollBy({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                className="absolute right-2 bottom-0 flex items-center space-x-2 text-black right-8 md:right-12"
              >
                <span className="text-sm md:text-base">SCROLL NOW</span>
                <div className="w-6 h-6 rounded-full border-2 border-gray-600 flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 md:py-20 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            {/* Left: Big headline */}
            <div className="md:col-span-7 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold text-black">
                At <span className=""></span> — we believe
                <br />
                that design is not just
                <br />
                about appearance but
                <br />
                also <span className="text-[#969696]">about creating —</span>
                <br />
                immersive and{" "}
                <span className="text-black/60">
                  <br />
                  <span className="md:hidden block">
                    meaningful — experiences.
                  </span>
                  <span className="hidden md:block">
                    meaningful — experiences.
                  </span>
                </span>
              </h2>
              <div className="mt-8 text-sm md:text-xs tracking-widest font-semibold">
                ABOUT US
              </div>
            </div>

            {/* Middle: Description + CTA */}
            <div className="md:col-span-3 flex flex-col gap-6 md:pt-0">
              <p className="text-sm md:text-base leading-relaxed text-gray-500">
                We combine creativity and technology to deliver results that not
                only meet expectations, but exceed them.
              </p>
              <button className="inline-flex items-center gap-2 text-black text-sm md:text-base font-medium hover:opacity-70 transition-opacity">
                <a
                  href="https://kalvicat.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  LEARN MORE
                </a>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="px-6 py-16">
          <div className="max-w-9xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Top large image spans 2 cols */}
              <div className="md:col-span-2 overflow-hidden rounded-2xl border border-gray-200 ">
                <div className="relative w-fu md:h-[450px]overflow-hidden ">
                  <img src="/pmp.png" className="w-full   object-cover" />
                  <div className="absolute bottom-4 left-4 text-white/90 text-sm leading-tight">
                    <div className="font-semibold tracking-wide">
                      Globe Roll 1
                    </div>
                    <div className="text-white/80 text-[11px]">Specialized</div>
                  </div>
                </div>
              </div>

              {/* Bottom left */}
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="relative">
                  <img
                    src="/pmp1.png"
                    className="w-full h-[340px] object-cover"
                  />
                </div>
              </div>

              {/* Bottom right */}
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="relative">
                  <img
                    src="/pmp2.png"
                    className="w-full h-[340px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview (per screenshot) */}
        <section id="services" className="px-4 md:px-6 py-8 md:py-16">
          <div className="max-w-9xl mx-auto space-y-12 md:space-y-14">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="col-span-12 md:col-span-3 flex flex-col gap-4 md:gap-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-black">
                  Mobile App
                  <br />
                  Design
                </h3>
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-center py-6 md:py-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-sm">
                  <img
                    src="/image1.png"
                    alt="Mobile App Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 flex flex-col gap-4 md:gap-6">
                <p className="text-sm md:text-base leading-relaxed text-black/60">
                  We help your business create mobile apps that are not only
                  attractive, but also functional.
                </p>
              </div>
            </div>

            {/* Row 2 (highlighted) */}
            <div className="relative rounded-2xl bg-black/5 md:bg-black/6">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center py-8 md:py-12 px-4 md:px-6">
                <div className="col-span-12 md:col-span-3 flex flex-col gap-4 md:gap-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-black">
                    Website
                    <br />
                    Design
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6 flex justify-center py-6 md:py-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-sm">
                    <img
                      src="/image2.png"
                      alt="Website Design"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 flex flex-col gap-4 md:gap-6">
                  <p className="text-sm md:text-base leading-relaxed text-black/60">
                    We create websites that are responsive, modern and easy to
                    navigate, helping your business look professional and reach
                    your audience effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="col-span-12 md:col-span-3 flex flex-col gap-4 md:gap-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-black">
                  Development
                </h3>
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-center py-6 md:py-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-sm">
                  <img
                    src="/image3.png"
                    alt="Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 flex flex-col gap-4 md:gap-6">
                <p className="text-sm md:text-base leading-relaxed text-black/60">
                  We use the latest technology to ensure the products we make
                  are efficient and can grow with your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase (per screenshot) */}
        <section className="px-4 md:px-6 pt-16 md:pt-20 pb-16 md:pb-20 ">
          <div className="max-w-9xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-gray-200 h-96 md:h-[600px]">
              <div className="relative">
                <img
                  src="/image.png"
                  alt="Showcase"
                  className="w-full h-full object-cover"
                />

                {/* Overlay titles */}
                <div className="absolute top-3 left-3 md:top-8 md:left-8 space-y-1 md:space-y-3">
                  <div className="flex items-center gap-1.5 md:gap-4">
                    <span className="text-base sm:text-lg md:text-3xl lg:text-4xl font-semibold text-white/60 hover:text-white transition-all duration-300 cursor-pointer">
                      Stumpjumper
                    </span>
                    <span className="text-[10px] md:text-sm text-white/70">
                      03
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-4">
                    <span className="text-base sm:text-lg md:text-3xl lg:text-4xl font-bold text-white/60 hover:text-white transition-all duration-300 cursor-pointer">
                      S WORK LEVO
                    </span>
                    <span className="text-[10px] md:text-sm text-white/80">
                      04
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-4">
                    <span className="text-base sm:text-lg md:text-3xl lg:text-4xl font-semibold text-white/60 hover:text-white transition-all duration-300 cursor-pointer">
                      Diverge
                    </span>
                    <span className="text-[10px] md:text-sm text-white/70">
                      05
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-4">
                    <span className="text-base sm:text-lg md:text-3xl lg:text-4xl font-semibold text-white/60 hover:text-white transition-all duration-300 cursor-pointer">
                      Epic
                    </span>
                    <span className="text-[10px] md:text-sm text-white/60">
                      06
                    </span>
                  </div>
                </div>

                {/* Bottom-left indicator */}
                <div className="absolute left-3 bottom-3 flex items-end gap-2 text-white/90 md:left-6 md:bottom-5">
                  <div className="w-0.5 h-6 md:w-1 md:h-8 bg-white/80 rounded"></div>
                  <div className="text-xs md:text-base">
                    <span className="font-semibold">04</span>
                    <span className="text-white/70">/08</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8 md:py-12 relative">
          {/* Top section with copyright and links */}
          <div className="max-w-9xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between text-sm md:text-base mb-8 md:mb-16">
              <div className="text-white/70">
                © {new Date().getFullYear()} Oxaley. All Rights Reserved.
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Large centered brand logo */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-4 md:gap-6">
                {/* Stadium/Oval icon - filled shape with thick border */}
                <div className="relative w-20 h-12 md:w-40 md:h-24 lg:w-52 lg:h-32">
                  {/* Outer stadium shape - filled dark gray */}
                  <div className="absolute inset-0 bg-[#333333] rounded-[50px] md:rounded-[80px]"></div>
                  {/* Inner cutout - black center */}
                  <div className="absolute inset-2 md:inset-4 bg-black rounded-[40px] md:rounded-[60px]"></div>
                </div>
                {/* Brand name */}
                <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
                  ZEPHYR
                </h2>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ReactLenis>
  );
}
