'use client';
import ReactLenis, { Lenis } from 'lenis/react';

import { useEffect } from 'react';
import {ArrowRight } from 'lucide-react';

export default function home() {
  useEffect(() => {
    const handleContextMenu = (event: Event) => {
      event.preventDefault();
    };
    const handleDragStart = (event: DragEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && target.tagName === 'IMG') {
        event.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dragstart', handleDragStart as EventListener);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dragstart', handleDragStart as EventListener);
    };
  }, []);

  return (
    <ReactLenis root>
    <div className="min-h-screen bg-[#ffffff] overflow-x-hidden">
     

      {/* Hero Section */}
      <section className=" min-h-screen flex   overflow-hidden">
       <div className="absolute inset-0  " style={{ background: "radial-gradient(250% 100% at 50% 100%, #ffffff 20%, #e5e7ee 25%, #8b5cf9 40%, #5b21b6 55%, #1e1b4d 70%, #000000 85%)"}} />
       {/* Top Navigation (like screenshot) */}
       <header className="absolute top-0 left-0 right-0 z-10">
         <div className="mx-auto flex items-center justify-between px-6 md:px-12 py-6">
           {/* Brand */}
           <div className="text-white font-bold tracking-wide text-lg md:text-xl hover:cursor-pointer page-relod-12 ">
            <span>CH</span>
           </div>
           
           {/* Links + Contact */}
           <div className="flex items-center gap-15 hover:cursor-pointer">
             <nav className="md:block text-base text-white/80 ">
               <span className="hover:text-white transition-colors ">About Us , </span>
               
               <span className="hover:text-white transition-colors">Services , </span>
              
               <span className="hover:text-white transition-colors">Project , </span>
          
               <span className="hover:text-white transition-colors">FAQ</span>
             </nav>
             <button className="group inline-flex items-center gap- text-xs md:text-sm text-white/90 hover:text-white transition-colors">
               <span>CONTACT US</span>
               <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
             </button>

           </div>
           <div className='absolute  top-55 text-white  '>
            <h1 className="text-6xl ">Crafting<br/>
            narrative<br/>
            <span className='text-white/50 '>through<br/>
            design </span></h1>
           </div>
           
          
         </div>   
         </header>
        
        {/* Bottom Portfolio Section - Inside Hero */}
        <div className="absolute bottom-18 w-full z-10 ">
  <div className=" mx-auto px-6 relative ">
    

    
    <div   onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })} 
    className="absolute right-2 bottom-0 flex items-center space-x-2 text-black right-8 ">
      <span>SCROLL NOW</span>
      <div className="w-6 h-6 rounded-full border-2 border-gray-600 flex items-center justify-center">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
 

  </div>
</div>

       
      </section>



      {/* About Section */}
      <section className="py-68 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left: Big headline */}
          <div className="md:col-span-7">
            <h2 className="text-[34px] md:text-[40px] leading-10 font-semibold text-black">
              At <span className=""></span> — we believe
              <br />that design is not just
              <br />about appearance but
              <br />also <span className="text-[#969696]">about creating —</span>
              <br />immersive and <span className="text-black/60"><br/>meaningful — experiences.</span>
            </h2>
            <div className="mt-20 text-[11px] tracking-widest font-semibold">ABOUT US</div>
          </div>

          {/* Middle: Description + CTA */}
          <div className="md:col-span-3 flex flex-col gap-6 md:pt-80">
            <p className="text-[16px] leading-5 text-gray-500">
              We combine creativity and technology to deliver results that not only meet
              expectations, but exceed them.
            </p>
            <button className="inline-flex items-center gap-2 text-black text-[12px] font-medium hover:opacity-70 transition-opacity">
              <a href="https://kalvicat.vercel.app/ " target='_blank'>LEARN MORE</a>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-16">
        <div className="max-w-9xl mx-auto">
 

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Top large image spans 2 cols */}
            <div className="md:col-span-2 overflow-hidden rounded-2xl border border-gray-200 ">
              <div className="relative w-fu md:h-[450px]overflow-hidden ">
                <img src="/pmp.png"  className="w-full   object-cover" />
                <div className="absolute bottom-4 left-4 text-white/90 text-sm leading-tight">
                  <div className="font-semibold tracking-wide">Globe Roll 1</div>
                  <div className="text-white/80 text-[11px]">Specialized</div>
                </div>
              </div>
            </div>

            {/* Bottom left */}
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative">
                <img src="/pmp1.png"  className="w-full h-[340px] object-cover" />
              </div>
            </div>

            {/* Bottom right */}
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative">
                <img src="/pmp2.png"  className="w-full h-[340px] object-cover" />
                <div className="absolute bottom-4 left-4 text-white">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview (per screenshot) */}
      <section className="px-6 py-16">
        <div className="max-w-9xl mx-auto space-y-14">
          {/* Row 1 */}
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-3">
              <h3 className="text-xl md:text-2xl font-semibold leading-tight text-black">
                Mobile App
                <br />Design
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-center py-6 md:py-0">
              <div className="w-[140px] h-[140px] rounded-xl overflow-hidden shadow-sm">
                <img src="/image1.png" alt="Mobile App Design" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 text-[12px] md:text-[13px] leading-5 text-black/60">
              We help your business create mobile apps that are not only attractive, but also functional.
            </div>
          </div>

          {/* Row 2 (highlighted) */}
          <div className="relative rounded-2xl">
            <div className="absolute inset-0 rounded-2xl bg-black/6"></div>
            <div className="relative grid grid-cols-12 items-center py-10 md:py-12 px-4 md:px-6">
              <div className="col-span-12 md:col-span-3">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight text-black">
                  Website
                  <br />Design
                </h3>
              </div>
              <div className="col-span-12 md:col-span-6 flex justify-center py-6 md:py-0">
                <div className="w-[140px] h-[140px] rounded-xl overflow-hidden shadow-sm">
                  <img src="/image2.png" alt="Website Design" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 text-[12px] md:text-[13px] leading-5 text-black/60">
                We create websites that are responsive, modern and easy to navigate, helping your business look professional and reach your audience effectively.
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-3">
              <h3 className="text-xl md:text-2xl font-semibold leading-tight text-black">
                Development
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-center py-6 md:py-0">
              <div className="w-[140px] h-[140px] rounded-xl overflow-hidden shadow-sm">
                <img src="/image3.png" alt="Development" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 text-[12px] md:text-[13px] leading-5 text-black/60">
              We use the latest technology to ensure the products we make are efficient and can grow with your business needs.
            </div>
          </div>
        </div>
      </section>

      {/* Showcase (per screenshot) */}
      <section className="px-5 pt-20 pb-20 ">
        <div className="max-w-9xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <div className="relative">
              <img src="/image.png" alt="Showcase" className="w-full h-full  object-cover" />

            

              {/* Overlay titles */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 space-y-2 md:space-y-3">
                <div className="flex items-baseline gap-2 md:gap-4">
                  <span className="text-xl md:text-3xl lg:text-4xl font-semibold text-white/60 hover:text-white hover:text-2xl md:hover:text-4xl lg:hover:text-5xl transition-all duration-300">Stumpjumper</span>
                  <span className="text-xs md:text-sm text-white/70">03</span>
                </div>
                <div className="flex items-baseline gap-2 md:gap-4">
                  <span className="text-xl md:text-3xl lg:text-4xl font-bold text-white/60 hover:text-white hover:text-2xl md:hover:text-4xl lg:hover:text-5xl transition-all duration-300">S WORK LEVO</span>
                  <span className="text-xs md:text-sm text-white/80">04</span>
                </div>
                <div className="flex items-baseline gap-2 md:gap-4">
                  <span className="text-xl md:text-3xl lg:text-4xl font-semibold text-white/60 hover:text-white hover:text-2xl md:hover:text-4xl lg:hover:text-5xl transition-all duration-300">Diverge</span>
                  <span className="text-xs md:text-sm text-white/70">05</span>
                </div>
                <div className="flex items-baseline gap-2 md:gap-4">
                  <span className="text-xl md:text-3xl lg:text-4xl font-semibold text-white/60 hover:text-white hover:text-2xl md:hover:text-4xl lg:hover:text-5xl transition-all duration-300">Epic</span>
                  <span className="text-xs md:text-sm text-white/60">06</span>
                </div>
              </div>

              {/* Bottom-left indicator */}
              <div className="absolute left-6 bottom-5 flex items-end gap-3 text-white/90">
                <div className="w-[2px] h-10 bg-white/80 rounded"></div>
                <div className="text-sm md:text-base"><span className="font-semibold">04</span><span className="text-white/70">/08</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 relative">
        {/* Top section with copyright and links */}
        <div className="max-w-9xl mx-auto px-6">
          <div className="flex items-center justify-between text-sm mb-16">
            <div className="text-white/70">
              © {new Date().getFullYear()} Oxaley. All Rights Reserved.
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
          
          {/* Large centered brand logo */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              {/* Link icon */}
              <div className="w-65 h-35 rounded-full border-30 border-[#333333] flex  ">
                
              </div>
              {/* Brand name */}
              <h2 className="text-6xl md:text-[160px] font-bold tracking-tight">ZEPHYR</h2>
            </div>
          </div>
        </div>
      </footer>

   
    </div>
    </ReactLenis>
  );
}