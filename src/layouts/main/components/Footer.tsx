import React from 'react'

const Footer: React.FC = () => {
  return <div>Footer</div>
}

export default Footer

// import { Github, Mail, Twitter } from 'lucide-react'
// import { Button } from '@/components/ui/button'

// export default function ProjectFooter() {
//   return (
//     <footer className="border-primary/10 bg-background/30 border-t backdrop-blur-sm">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           <div className="space-y-4">
//             <h3 className="from-primary bg-gradient-to-r to-cyan-500 bg-clip-text text-lg font-semibold text-transparent">
//               Project Vision
//             </h3>
//             <p className="text-muted-foreground text-sm">
//               Tracking our development progress with transparency and clarity.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Contact</h3>
//             <ul className="text-muted-foreground space-y-2 text-sm">
//               <li className="flex items-center gap-2">
//                 <Mail className="h-4 w-4" />
//                 <span>info@projectvision.com</span>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Follow Us</h3>
//             <div className="flex gap-4">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="hover:bg-primary/10 hover:text-primary"
//               >
//                 <Twitter className="h-5 w-5" />
//                 <span className="sr-only">Twitter</span>
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="hover:bg-primary/10 hover:text-primary"
//               >
//                 <Github className="h-5 w-5" />
//                 <span className="sr-only">GitHub</span>
//               </Button>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Subscribe</h3>
//             <p className="text-muted-foreground text-sm">
//               Get updates on our progress and launch date.
//             </p>
//             <div className="flex gap-2">
//               <Button className="bg-primary hover:bg-primary/90">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="border-primary/10 mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
//           <p className="text-muted-foreground text-sm">
//             © 2023 Project Vision. All rights reserved.
//           </p>
//           <div className="text-muted-foreground flex gap-4 text-sm">
//             <a href="#" className="hover:text-primary hover:underline">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-primary hover:underline">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
