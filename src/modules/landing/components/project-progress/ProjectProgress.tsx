import React from 'react'

const ProjectProgress: React.FC = () => {
  return <div>ProjectProgress</div>
}

export default ProjectProgress

// 'use client'

// import { useState } from 'react'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle
// } from '@/components/ui/card'
// import { Progress } from '@/components/ui/progress'

// // Sample project data
// const projectData = {
//   overall: 68,
//   categories: [
//     {
//       name: 'Design',
//       progress: 90,
//       description: 'UI/UX design and prototyping'
//     },
//     {
//       name: 'Frontend',
//       progress: 75,
//       description: 'User interface implementation'
//     },
//     {
//       name: 'Backend',
//       progress: 60,
//       description: 'Server and database development'
//     },
//     {
//       name: 'Testing',
//       progress: 45,
//       description: 'Quality assurance and bug fixes'
//     }
//   ]
// }

// export default function ProjectProgress() {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null)

//   return (
//     <section className="py-12">
//       <div className="mb-12 text-center">
//         <h2 className="from-primary bg-gradient-to-r to-cyan-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
//           Project Overview
//         </h2>
//         <p className="text-muted-foreground mt-4">
//           Current development progress across all project areas
//         </p>
//       </div>

//       <Card className="border-primary/10 bg-background/30 overflow-hidden backdrop-blur-sm">
//         <CardHeader className="bg-primary/5 border-primary/10 border-b">
//           <CardTitle>Overall Progress</CardTitle>
//           <CardDescription>
//             Combined progress across all project components
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="p-6">
//           <div className="flex items-center gap-4">
//             <div className="flex-1">
//               <Progress
//                 value={projectData.overall}
//                 className="bg-primary/20 h-4"
//               />
//             </div>
//             <div className="text-primary w-16 text-right text-2xl font-bold">
//               {projectData.overall}%
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {projectData.categories.map((category) => (
//           <Card
//             key={category.name}
//             className="border-primary/10 bg-background/30 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.15)]"
//             onMouseEnter={() => setActiveCategory(category.name)}
//             onMouseLeave={() => setActiveCategory(null)}
//           >
//             <CardHeader
//               className={`${activeCategory === category.name ? 'bg-primary text-primary-foreground' : 'bg-background/50'} transition-colors duration-300`}
//             >
//               <CardTitle className="flex items-center justify-between">
//                 {category.name}
//                 <span className="text-xl font-bold">{category.progress}%</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <Progress
//                 value={category.progress}
//                 className={`h-2 ${
//                   category.progress < 50
//                     ? 'bg-primary/20'
//                     : category.progress < 80
//                       ? 'bg-amber-500/20'
//                       : 'bg-emerald-500/20'
//                 }`}
//               />
//               <p className="text-muted-foreground mt-4 text-sm">
//                 {category.description}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   )
// }
