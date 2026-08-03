"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Palette, Monitor, Database, Settings, GraduationCap, 
  HeartHandshake, Code2, CloudDownload, Zap, ShieldAlert, 
  Network, Check, ArrowRight, Cpu, Share2, Compass, Activity,
  Layout, Globe
} from "lucide-react";

// --- REUSABLE SCHEMATIC HEADER FOR TECHNICAL VIBE ---
const SchematicHeader = ({ icon: Icon }: { icon: any }) => (
  <div className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-slate-800 flex items-center justify-center">
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px]" />
    <div className="relative z-10">
      <Icon className="h-16 w-16 text-blue-500 opacity-80" strokeWidth={1} />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10"
      />
    </div>
    <div className="absolute bottom-4 right-4 font-mono text-[8px] text-slate-500 font-bold uppercase tracking-[0.2em]">
      Architecture_Render_v1.1
    </div>
  </div>
);

export default function Services() {
  const services = [
    {
      id: "01",
      title: "UI/UX Design",
      description: "Designing premium visual systems and interactive prototypes that represent your brand with absolute authority.",
      icon: <Palette className="h-6 w-6" />,
      useSchematic: true,
      schematicIcon: Layout,
      deliverables: ["Interface design layouts", "Interactive prototypes"],
      gridArea: "md:col-span-2",
    },
    {
      id: "02",
      title: "Web Design",
      description: "Engineering high-performance, responsive websites custom-built for business speed and SEO.",
      icon: <Monitor className="h-6 w-6" />,
      useSchematic: true,
      schematicIcon: Globe,
      deliverables: ["Custom code", "Mobile optimization"],
      gridArea: "md:col-span-1",
    },
    {
      id: "03",
      title: "App & System Design",
      description: "Constructing tailored web applications and robust system structures for secure data management.",
      icon: <Database className="h-6 w-6" />,
      useSchematic: true,
      schematicIcon: Cpu,
      deliverables: ["Database engineering", "Secure auth systems"],
      gridArea: "md:col-span-1",
    },
    {
      id: "04",
      title: "System Integration",
      description: "Eliminating friction by configuring secure cloud servers and establishing reliable software integrations.",
      icon: <Settings className="h-6 w-6" />,
      useSchematic: true,
      schematicIcon: Share2,
      deliverables: ["Cloud server setup", "Third-party integrations"],
      gridArea: "md:col-span-2",
    },
    {
      id: "05",
      title: "Software Modernization",
      description: "Re-architecting legacy platforms into modern, high-speed Next.js environments.",
      icon: <Code2 className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
      deliverables: ["Code refactoring", "Stack migration"],
      gridArea: "md:col-span-1",
    },
    {
      id: "06",
      title: "Cloud Scaling",
      description: "Managing secure, reliable and cost-effective cloud infrastructure for global deployment.",
      icon: <CloudDownload className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800",
      deliverables: ["Infrastructure scaling", "Cloud migration"],
      gridArea: "md:col-span-1",
    },
    {
      id: "07",
      title: "Workflow Automation",
      description: "Creating intelligent automations that streamline business processes and drive impact.",
      icon: <Zap className="h-6 w-6" />,
      useSchematic: true,
      schematicIcon: Activity,
      deliverables: ["Process automation", "Data pipelines"],
      gridArea: "md:col-span-1",
    },
    {
      id: "08",
      title: "Security & POPIA Audit",
      description: "Performing technical health checks to ensure data encryption and legal compliance.",
      icon: <ShieldAlert className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      deliverables: ["Vulnerability checks", "POPIA compliance"],
      gridArea: "md:col-span-2",
    },
    {
      id: "09",
      title: "Technical Strategy",
      description: "Providing high-level architectural roadmaps and decision-making support for growth.",
      icon: <Network className="h-6 w-6" />,
      useSchematic: true,
      schematicIcon: Compass,
      deliverables: ["Technical roadmaps", "Architecture planning"],
      gridArea: "md:col-span-1",
    },
    {
      id: "10",
      title: "Training & Onboarding",
      description: "Equipping teams with the technical skills to run and manage new systems effectively.",
      icon: <GraduationCap className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
      deliverables: ["Staff walkthroughs", "Documentation manuals"],
      gridArea: "md:col-span-1",
    },
    {
      id: "11",
      title: "Maintenance & Support",
      description: "Dedicated premium helpdesk service to maintain, monitor, and update your systems.",
      icon: <HeartHandshake className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
      deliverables: ["24/7 Monitoring", "Monthly updates"],
      gridArea: "md:col-span-1",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-b border-neutral-200 uppercase">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-100">
            OUR CAPABILITIES
          </span>
          <h2 className="mt-6 font-sans text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            HOW WE CAN HELP <br /> YOUR <span className="text-blue-600">BUSINESS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 ${service.gridArea}`}
            >
              <div className="flex flex-col h-full">
                
                {/* Header Logic */}
                {service.useSchematic ? (
                  <SchematicHeader icon={service.schematicIcon} />
                ) : (
                  <div className="relative h-48 w-full overflow-hidden border-b border-neutral-100">
                    <Image 
                      src={service.image || ""} 
                      alt={service.title} 
                      fill 
                      className="object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
                  </div>
                )}

                <div className="p-8 lg:p-10 flex-1">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 tracking-widest">
                      ID // {service.id}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed mb-8 normal-case font-medium">
                    {service.description}
                  </p>

                  <ul className="space-y-3 pt-6 border-t border-slate-50">
                    {service.deliverables.map((item, dIndex) => (
                      <li key={dIndex} className="flex items-center gap-3">
                        <Check className="h-3.5 w-3.5 text-blue-600" />
                        <span className="font-sans text-[11px] font-bold text-slate-700 uppercase tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 pb-8 lg:px-10 lg:pb-10">
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors uppercase">
                      Ready to build
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}