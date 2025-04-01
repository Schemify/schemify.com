import React from 'react'

const ProjectTimeline: React.FC = () => {
  return <div>ProjectTimeline</div>
}

export default ProjectTimeline

// 'use client'

// import { useState } from 'react'
// import { CheckCircle, Clock, AlertCircle } from 'lucide-react'
// import { Card, CardContent } from '@/components/ui/card'
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger
// } from '@/components/ui/tooltip'

// // Sample timeline data
// const timelineData = [
//   {
//     id: 1,
//     title: 'Research & Planning',
//     date: 'January 2023',
//     status: 'completed',
//     description:
//       'Market research, competitor analysis, and initial project planning completed.'
//   },
//   {
//     id: 2,
//     title: 'Design Phase',
//     date: 'March 2023',
//     status: 'completed',
//     description: 'UI/UX design, wireframing, and prototyping finalized.'
//   },
//   {
//     id: 3,
//     title: 'Development Sprint 1',
//     date: 'May 2023',
//     status: 'completed',
//     description: 'Core functionality and basic features implemented.'
//   },
//   {
//     id: 4,
//     title: 'Development Sprint 2',
//     date: 'July 2023',
//     status: 'in-progress',
//     description: 'Advanced features and integrations currently in development.'
//   },
//   {
//     id: 5,
//     title: 'Testing & QA',
//     date: 'September 2023',
//     status: 'pending',
//     description: 'Comprehensive testing and quality assurance planned.'
//   },
//   {
//     id: 6,
//     title: 'Launch',
//     date: 'November 2023',
//     status: 'pending',
//     description: 'Official product launch and marketing campaign.'
//   }
// ]

// export default function ProjectTimeline() {
//   const [activePhase, setActivePhase] = useState<number | null>(null)

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'completed':
//         return <CheckCircle className="h-6 w-6 text-emerald-500" />
//       case 'in-progress':
//         return <Clock className="h-6 w-6 animate-pulse text-amber-500" />
//       case 'pending':
//         return <AlertCircle className="text-muted-foreground h-6 w-6" />
//       default:
//         return null
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'completed':
//         return 'bg-emerald-500'
//       case 'in-progress':
//         return 'bg-amber-500'
//       case 'pending':
//         return 'bg-muted'
//       default:
//         return 'bg-muted'
//     }
//   }

//   return (
//     <section className="py-12">
//       <div className="mb-12 text-center">
//         <h2 className="from-primary bg-gradient-to-r to-cyan-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
//           Project Timeline
//         </h2>
//         <p className="text-muted-foreground mt-4">
//           Our development journey from concept to launch
//         </p>
//       </div>

//       <TooltipProvider>
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="bg-primary/20 absolute top-0 left-1/2 h-full w-1 -translate-x-1/2" />

//           <div className="space-y-12">
//             {timelineData.map((phase, index) => (
//               <div
//                 key={phase.id}
//                 className="relative"
//                 onMouseEnter={() => setActivePhase(phase.id)}
//                 onMouseLeave={() => setActivePhase(null)}
//               >
//                 <div
//                   className={`border-background absolute top-0 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 ${getStatusColor(phase.status)} transition-all duration-300 ${activePhase === phase.id ? 'scale-150 shadow-[0_0_10px_rgba(124,58,237,0.5)]' : ''}`}
//                 />

//                 <div
//                   className={`grid grid-cols-2 gap-8 transition-opacity duration-300 ${activePhase !== null && activePhase !== phase.id ? 'opacity-50' : 'opacity-100'}`}
//                 >
//                   <div
//                     className={`text-right ${index % 2 !== 0 ? 'order-2' : ''}`}
//                   >
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <h3 className="text-xl font-semibold">{phase.title}</h3>
//                       </TooltipTrigger>
//                       <TooltipContent side="top" className="max-w-xs">
//                         {phase.description}
//                       </TooltipContent>
//                     </Tooltip>
//                     <p className="text-muted-foreground">{phase.date}</p>
//                   </div>

//                   <div
//                     className={`flex items-center ${index % 2 !== 0 ? 'order-1 justify-end' : 'justify-start'}`}
//                   >
//                     <Card
//                       className={`border-primary/10 bg-background/30 flex h-12 w-12 items-center justify-center backdrop-blur-sm transition-transform duration-300 ${activePhase === phase.id ? 'scale-110 shadow-[0_0_15px_rgba(124,58,237,0.2)]' : ''}`}
//                     >
//                       <CardContent className="flex h-full items-center justify-center p-0">
//                         {getStatusIcon(phase.status)}
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </TooltipProvider>
//     </section>
//   )
// }
