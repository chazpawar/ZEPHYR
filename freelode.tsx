"use client"

import { useEffect, useState, useRef } from "react"

export default function ScrollBorderLayout() {
  const [scrollY, setScrollY] = useState(0)
  const [borderWidth, setBorderWidth] = useState(0)
  const [isScrollingContent, setIsScrollingContent] = useState(false)
  const [virtualScroll, setVirtualScroll] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Configuration for the border animation
  const maxBorderWidth = 55 // Maximum border thickness
  const borderAnimationDistance = 500 // Distance to complete border animation

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (!isScrollingContent) {
        e.preventDefault()
        return false
      }
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (!isScrollingContent) {
        const newVirtualScroll = Math.max(0, virtualScroll + e.deltaY)
        setVirtualScroll(newVirtualScroll)

        if (newVirtualScroll < borderAnimationDistance) {
          // Phase 1: Border grows, no real scrolling
          const progress = newVirtualScroll / borderAnimationDistance
          const newBorderWidth = Math.min(progress * maxBorderWidth, maxBorderWidth)
          setBorderWidth(newBorderWidth)
        } else {
          // Phase 2: Border complete, enable content scrolling
          setBorderWidth(maxBorderWidth)
          setIsScrollingContent(true)
        }
      } else {
        const currentScrollY = window.scrollY + e.deltaY
        window.scrollTo(0, Math.max(0, currentScrollY))
        setScrollY(window.scrollY)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        !isScrollingContent &&
        (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "PageDown" || e.key === "PageUp" || e.key === " ")
      ) {
        e.preventDefault()
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: false })
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    if (!isScrollingContent) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [virtualScroll, isScrollingContent, borderAnimationDistance, maxBorderWidth])

  useEffect(() => {
    if (isScrollingContent) {
      window.scrollTo(0, 0)
      setScrollY(0)
    }
  }, [isScrollingContent])

  return (
    // <div ref={containerRef} className="min-h-[400vh] bg-gradient-to-br from-slate-50 to-slate-100">
    //   {/* Fixed border overlay */}
    //   <div
    //     className="fixed inset-0 pointer-events-none z-50"
    //     style={{
    //       border: `${borderWidth}px solid  bg-gradient-to-br from-slate-50 to-slate-100 `,
    //     }}
    //   />

    //   <div
    //     className="relative z-0 flex flex-col min-h-screen transition-all duration-75 ease-out"
    //     style={{
    //       padding: `${borderWidth}px`,
    //     }}
    //   >
//     <div className="min-h-screen min-w-screen flex flex-col">
      
//         {/* Hero Section */}
//         <section className="w-screen min-h-screen bg-[url('/bg1.png')] bg-h-screen w-screen text-white relative ">

//         <div className="absolute bottom-20 left-10">
//      <h1 className="text-6xl  lg:text-9xl font-open-sans ">
//       MINIMALIST
//       </h1>
//       <div className="w-[1400px] h-7 bg-gradient-to-r from-blue-400 to-purple-500 mb-6" />
      
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat omnis consectetur dolor similique ut sequi eligendi quasi vero? Officiis quos ea minus ad, quaerat quisquam, minima aspernatur nulla magnam, nisi iure exercitationem unde eius neque illo nemo expedita esse rem molestiae necessitatibus saepe aut sequi nesciunt velit? Consectetur molestias officia, provident ad sint quam nostrum corporis placeat magnam beatae? Eligendi quasi blanditiis possimus harum quis eum fugiat nulla architecto, ut debitis! Maiores sint distinctio laudantium eius quia ut in dolore pariatur aperiam placeat sequi, incidunt similique laborum et velit officiis dolorem nobis debitis non mollitia reprehenderit voluptatem? Quaerat, eius rerum!
//       </p>

//     </div>
//     <div className="absolute bottom-[-40] left-10">
//     <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat omnis consectetur dolor similique ut sequi eligendi quasi vero? Officiis quos ea minus ad, quaerat quisquam, minima aspernatur nulla magnam, nisi iure exercitationem unde eius neque illo nemo expedita esse rem molestiae necessitatibus saepe aut sequi nesciunt velit? Consectetur molestias officia, provident ad sint quam nostrum corporis placeat magnam beatae? Eligendi quasi blanditiis possimus harum quis eum fugiat nulla architecto, ut debitis! Maiores sint distinctio laudantium eius quia ut in dolore pariatur aperiam placeat sequi, incidunt similique laborum et velit officiis dolorem nobis debitis non mollitia reprehenderit voluptatem? Quaerat, eius rerum!
//       </p>
//       </div>
// </section>


//         <section className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
//           <div className="max-w-4xl mx-auto text-center px-8">
//             <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Phase Two</h2>
//             <p className="text-xl text-slate-600 leading-relaxed mb-12">
//               Once the border reaches its maximum thickness, normal scrolling begins. The content area is now framed by
//               the full border.
//             </p>
//             <div className="bg-white p-8 rounded-2xl shadow-lg">
        
//               <h3 className="text-2xl font-bold text-slate-900 mb-4">Perfect Framing</h3>
//               <p className="text-slate-600">
//                 The content is now perfectly framed within the border, creating a focused viewing experience.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center">
//           <div className="max-w-4xl mx-auto text-center px-8">
//             <h2 className="text-5xl md:text-6xl font-bold mb-8">Endless Scroll</h2>
//             <p className="text-xl text-slate-300 leading-relaxed mb-12">
//               Continue scrolling to see the effect in action. The border maintains its thickness while the content flows
//               naturally within the framed area.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
//               <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-75" />
//               <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-150" />
//             </div>
//           </div>
//         </section>

        
        
//       </div>
  <div className="min-h-screen border-6 flex flex-col">
  
    <div className="border-6 h-screen">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione provident quo, fugiat eum quae incidunt est laboriosam maiores assumenda voluptatum unde aut blanditiis quia! Sint architecto, minima exercitationem dicta facere repellat? Magnam inventore adipisci hic cumque, eius excepturi perferendis enim repellendus sapiente, assumenda rerum repudiandae? Nisi quia perferendis corporis corrupti porro, repellendus doloribus nesciunt saepe ut aliquid, dolorum, officia molestiae! Ipsam consectetur sapiente necessitatibus reiciendis facilis ipsum, neque corporis pariatur dolor atque nemo repellendus illum officiis quidem eligendi aliquam alias aut soluta nam nulla dolore quam quis. Eveniet alias minima exercitationem. Aperiam, ex vitae, enim veniam assumenda deleniti suscipit delectus facilis architecto numquam impedit modi. Ipsa sunt sequi reiciendis voluptates distinctio! Excepturi deleniti ducimus aspernatur blanditiis vel facere! Consectetur distinctio unde fugit sapiente. Voluptatem sed iusto eligendi dolor deserunt voluptas incidunt, ullam sequi earum ratione nulla doloremque veritatis eum soluta magnam iste repellendus accusantium placeat totam quidem? Odit omnis at placeat quos, natus dignissimos voluptatum, voluptatem earum totam eveniet, magni quia qui illo repellendus incidunt? Amet rem nemo soluta enim sed cupiditate ullam fugiat atque, reprehenderit, tempora quisquam sit iure alias architecto numquam consequuntur sunt consequatur provident, similique exercitationem. Quia fugiat quos, corrupti ut similique nostrum voluptatem laboriosam facilis mollitia.
    </div>

  </div>     


  )
}
