import React from 'react'

const MouseEffect: React.FC = () => {
  return <div>MouseEffect</div>
}

export default MouseEffect

// 'use client'

// import { useEffect, useState } from 'react'

// export default function MouseEffect() {
//   const [position, setPosition] = useState({ x: -100, y: -100 }) // Start off-screen
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY })
//       if (!isVisible) setIsVisible(true)
//     }

//     const handleMouseLeave = () => {
//       setIsVisible(false)
//     }

//     window.addEventListener('mousemove', handleMouseMove)
//     document.documentElement.addEventListener('mouseleave', handleMouseLeave)

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove)
//       document.documentElement.removeEventListener(
//         'mouseleave',
//         handleMouseLeave
//       )
//     }
//   }, [isVisible])

//   return (
//     <div className="pointer-events-none fixed inset-0 overflow-hidden">
//       {/* Primary glow */}
//       <div
//         className={`bg-primary/10 fixed z-0 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 ${
//           isVisible ? 'opacity-100' : ''
//         }`}
//         style={{
//           left: `${position.x - 80}px`,
//           top: `${position.y - 80}px`,
//           background:
//             'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(124, 58, 237, 0) 70%)'
//         }}
//       />

//       {/* Secondary smaller glow */}
//       <div
//         className={`fixed z-0 h-16 w-16 rounded-full bg-cyan-500/30 opacity-0 blur-xl transition-opacity duration-200 ${
//           isVisible ? 'opacity-100' : ''
//         }`}
//         style={{
//           left: `${position.x - 32}px`,
//           top: `${position.y - 32}px`,
//           background:
//             'radial-gradient(circle, rgba(56, 189, 248, 0.6) 0%, rgba(56, 189, 248, 0) 70%)'
//         }}
//       />

//       {/* Core dot - smaller and more subtle */}
//       <div
//         className={`fixed z-0 h-3 w-3 rounded-full bg-white/50 opacity-0 shadow-lg transition-opacity duration-150 ${
//           isVisible ? 'opacity-100' : ''
//         }`}
//         style={{
//           left: `${position.x - 6}px`,
//           top: `${position.y - 6}px`,
//           boxShadow: '0 0 10px 2px rgba(124, 58, 237, 0.3)'
//         }}
//       />
//     </div>
//   )
// }
