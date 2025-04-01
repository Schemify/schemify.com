import React from 'react'

const ProjectTimelineHorizontal: React.FC = () => {
  return <div>ProjectTimelineHorizontal</div>
}

export default ProjectTimelineHorizontal

// 'use client'

// import { useState } from 'react'
// import {
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle,
//   Clock,
//   AlertCircle,
//   ChevronDown,
//   ChevronUp
// } from 'lucide-react'

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardFooter
// } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger
// } from '@/components/ui/collapsible'

// // Group timeline items by quarter
// const groupedTimelineData = timelineData.reduce(
//   (acc, item) => {
//     const date = new Date(item.date)
//     const year = date.getFullYear()
//     const quarter = Math.floor(date.getMonth() / 3) + 1
//     const key = `Q${quarter} ${year}`

//     if (!acc[key]) {
//       acc[key] = []
//     }

//     acc[key].push(item)
//     return acc
//   },
//   {} as Record<string, typeof timelineData>
// )

// export default function ProjectTimelineHorizontal() {
//   const [activePhase, setActivePhase] = useState<number | null>(null)
//   const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
//     {}
//   )
//   const [viewMode, setViewMode] = useState<'horizontal' | 'grouped'>(
//     'horizontal'
//   )

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'completed':
//         return <CheckCircle className="h-5 w-5 text-emerald-500" />
//       case 'in-progress':
//         return <Clock className="h-5 w-5 animate-pulse text-amber-500" />
//       case 'pending':
//         return <AlertCircle className="text-muted-foreground h-5 w-5" />
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

//   const toggleGroup = (group: string) => {
//     setExpandedGroups((prev) => ({
//       ...prev,
//       [group]: !prev[group]
//     }))
//   }

//   return (
//     <section className="py-12">
//       <div className="mb-8 text-center">
//         <h2 className="from-primary bg-gradient-to-r to-cyan-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
//           Project Timeline
//         </h2>
//         <p className="text-muted-foreground mt-4">
//           Our development journey from concept to launch
//         </p>
//       </div>

//       <div className="mb-8 flex justify-center gap-4">
//         <Button
//           variant={viewMode === 'horizontal' ? 'default' : 'outline'}
//           onClick={() => setViewMode('horizontal')}
//           className={
//             viewMode === 'horizontal' ? 'bg-primary' : 'border-primary/20'
//           }
//         >
//           Horizontal View
//         </Button>
//         <Button
//           variant={viewMode === 'grouped' ? 'default' : 'outline'}
//           onClick={() => setViewMode('grouped')}
//           className={
//             viewMode === 'grouped' ? 'bg-primary' : 'border-primary/20'
//           }
//         >
//           Grouped View
//         </Button>
//       </div>

//       {viewMode === 'horizontal' && (
//         <div className="relative mb-12">
//           <ScrollArea className="w-full">
//             <div className="relative min-w-max">
//               {/* Timeline line */}
//               <div className="bg-primary/20 absolute top-8 right-0 left-0 h-1" />

//               <div className="flex gap-4 px-4 pb-8">
//                 {timelineData.map((phase) => (
//                   <div
//                     key={phase.id}
//                     className="relative w-[200px] flex-shrink-0 pt-12"
//                     onMouseEnter={() => setActivePhase(phase.id)}
//                     onMouseLeave={() => setActivePhase(null)}
//                   >
//                     <div
//                       className={`border-background absolute top-8 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 ${getStatusColor(phase.status)} transition-all duration-300 ${activePhase === phase.id ? 'scale-150 shadow-[0_0_10px_rgba(124,58,237,0.5)]' : ''}`}
//                     />

//                     <Card
//                       className={`border-primary/10 bg-background/30 h-full backdrop-blur-sm transition-all duration-300 ${activePhase === phase.id ? 'shadow-[0_0_15px_rgba(124,58,237,0.2)]' : ''}`}
//                     >
//                       <CardHeader className="pb-2">
//                         <CardTitle className="text-base">
//                           {phase.title}
//                         </CardTitle>
//                         <CardDescription>{phase.date}</CardDescription>
//                       </CardHeader>
//                       <CardContent className="pb-2">
//                         <div className="flex items-center gap-2">
//                           {getStatusIcon(phase.status)}
//                           <span className="text-sm">
//                             {phase.status === 'completed'
//                               ? 'Completed'
//                               : phase.status === 'in-progress'
//                                 ? 'In Progress'
//                                 : 'Pending'}
//                           </span>
//                         </div>
//                       </CardContent>
//                       <CardFooter>
//                         <p className="text-muted-foreground line-clamp-3 text-xs transition-all hover:line-clamp-none">
//                           {phase.description}
//                         </p>
//                       </CardFooter>
//                     </Card>
//                   </div>
//                 ))}
//               </div>
//               <ScrollBar orientation="horizontal" />
//             </div>
//           </ScrollArea>

//           <div className="pointer-events-none absolute right-0 -bottom-2 left-0 flex justify-between">
//             <div className="pointer-events-auto">
//               <Button
//                 size="icon"
//                 variant="outline"
//                 className="bg-background/50 border-primary/20 rounded-full backdrop-blur-sm"
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>
//             </div>
//             <div className="pointer-events-auto">
//               <Button
//                 size="icon"
//                 variant="outline"
//                 className="bg-background/50 border-primary/20 rounded-full backdrop-blur-sm"
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {viewMode === 'grouped' && (
//         <div className="space-y-4">
//           {Object.entries(groupedTimelineData).map(([group, phases]) => (
//             <Collapsible
//               key={group}
//               open={expandedGroups[group]}
//               onOpenChange={() => toggleGroup(group)}
//               className="border-primary/10 bg-background/30 overflow-hidden rounded-lg border backdrop-blur-sm"
//             >
//               <div className="flex items-center justify-between p-4">
//                 <h3 className="text-lg font-semibold">{group}</h3>
//                 <CollapsibleTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="hover:bg-primary/10"
//                   >
//                     {expandedGroups[group] ? (
//                       <ChevronUp className="h-4 w-4" />
//                     ) : (
//                       <ChevronDown className="h-4 w-4" />
//                     )}
//                   </Button>
//                 </CollapsibleTrigger>
//               </div>

//               <CollapsibleContent>
//                 <div className="space-y-3 px-4 pb-4">
//                   {phases.map((phase) => (
//                     <div
//                       key={phase.id}
//                       className="hover:bg-primary/5 flex items-start gap-4 rounded-md p-3 transition-colors"
//                       onMouseEnter={() => setActivePhase(phase.id)}
//                       onMouseLeave={() => setActivePhase(null)}
//                     >
//                       <div
//                         className={`mt-1 h-4 w-4 rounded-full ${getStatusColor(phase.status)}`}
//                       />
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between">
//                           <h4 className="font-medium">{phase.title}</h4>
//                           <span className="text-muted-foreground text-sm">
//                             {phase.date}
//                           </span>
//                         </div>
//                         <p className="text-muted-foreground mt-1 text-sm">
//                           {phase.description}
//                         </p>
//                       </div>
//                       <div>{getStatusIcon(phase.status)}</div>
//                     </div>
//                   ))}
//                 </div>
//               </CollapsibleContent>
//             </Collapsible>
//           ))}
//         </div>
//       )}
//     </section>
//   )
// }
