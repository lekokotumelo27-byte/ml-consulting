"use client";

import { motion } from "framer-motion";
import { 
  Palette,
  Monitor, 
  Database, 
  Settings, 
  GraduationCap, 
  HeartHandshake, 
  Check, 
  ArrowRight 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "UI/UX Design",
      description: "We design premium visual layouts, interactive prototypes, and custom user journeys. We ensure your digital products look stunning, feel intuitive, and represent your brand with absolute authority before writing any code.",
      icon: <Palette className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "Custom interface design layouts",
        "Interactive user prototypes",
        "Brand visual styling systems",
        "User journey mapping paths"
      ],
      gridArea: "md:col-span-2", // Large Card
    },
    {
      id: "02",
      title: "Complete Web Design",
      description: "We engineer high-performance, responsive websites custom-built for your business. From complete modern redesigns of outdated platforms to brand-new digital launches, we ensure speed, security, and search engine optimization.",
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "High-performance custom code",
        "Responsive mobile layouts",
        "Search Engine Optimization (SEO)",
        "Page speed optimization"
      ],
      gridArea: "md:col-span-1", // Small Card
    },
    {
      id: "03",
      title: "Application & System Design",
      description: "We construct tailored web applications, secure client portals, and custom internal dashboards. We design robust system structures that allow your users to safely register, log in, and manage operational data.",
      icon: <Database className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "Client portal development",
        "Secure authentication systems",
        "Database schema engineering",
        "Operational data dashboards"
      ],
      gridArea: "md:col-span-1", // Small Card
    },
    {
      id: "04",
      title: "System Setup & Integration",
      description: "We eliminate the friction of technical setups. We configure professional email systems, secure cloud servers, custom domains, and establish reliable integrations between your daily software tools.",
      icon: <Settings className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "Google Workspace / Outlook config",
        "Custom domain configuration",
        "Cloud server setup",
        "Third-party tool integrations"
      ],
      gridArea: "md:col-span-2", // Large Card
    },
    {
      id: "05",
      title: "Client Training & Onboarding",
      description: "We ensure your team is fully equipped to run your new systems. We deliver dedicated walkthrough training sessions, custom video guides, and technical reference manuals to guarantee a seamless operational handoff.",
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "Live staff walkthrough training",
        "Custom video reference guides",
        "User onboarding playbooks",
        "System documentation manuals"
      ],
      gridArea: "md:col-span-1", // Small Card
    },
    {
      id: "06",
      title: "Technical Support & Maintenance",
      description: "We offer a dedicated, premium monthly helpdesk service to monitor and maintain your systems. From regular security backups and performance tracking to fast layout changes, we keep your digital operations secure and online.",
      icon: <HeartHandshake className="h-6 w-6 text-blue-600" />,
      deliverables: [
        "Cloud server monitoring",
        "Automated system backups",
        "Dedicated helpdesk ticket support",
        "Monthly system updates"
      ],
      gridArea: "md:col-span-2", // Large Card
    },
  ];

  return (
    <section id="services" className="py-24 bg-blue-50/20 scroll-mt-20 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
              OUR CAPABILITIES
            </span>
            <h2 className="mt-2 font-sans text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              HOW WE CAN HELP YOUR BUSINESS
            </h2>
          </div>
          <p className="max-w-md font-sans text-base text-slate-600 leading-relaxed">
            We design, develop, and manage clean digital systems. Built to save you time and help your business grow.
          </p>
        </div>

        {/* Dynamic Bento Weave Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 ${service.gridArea}`}
            >
              <div>
                {/* Icon & Label */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                    <span className="text-blue-600 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    SERVICE {service.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-sans text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <ul className="space-y-3 border-t border-neutral-100 pt-6">
                  {services[index].deliverables.map((item, dIndex) => (
                    <li key={dIndex} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="font-sans text-sm font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-neutral-100">
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-400 group-hover:text-blue-600 transition-colors">
                  READY TO ENGAGE
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 group-hover:border-blue-500 group-hover:text-blue-600 transition-all">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}