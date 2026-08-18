'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Gamepad2, 
  Trophy, 
  Coins, 
  Megaphone, 
  PenTool, 
  Map, 
  Briefcase, 
  Users, 
  Gavel, 
  CheckCircle2,
  ChevronRight,
  Zap,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- DATA ---

const roleSummary = [
  { position: "Coordinator", domain: "Executive Leadership", objective: "Operational oversight & institutional liaison", icon: ShieldCheck },
  { position: "Co-Coordinator", domain: "Executive Leadership", objective: "Internal operations & cross-functional alignment", icon: Users },
  { position: "Treasurer", domain: "Functional Head", objective: "Financial management & budgeting", icon: Coins },
  { position: "Media Coordinator", domain: "Functional Head", objective: "Visual branding & digital content", icon: PenTool },
  { position: "P & D Coordinator", domain: "Functional Head", objective: "Logistics, tournament structuring & venues", icon: Map },
  { position: "Marketing & Spo. Coordinator", domain: "Functional Head", objective: "Sponsorship acquisition & brand relations", icon: Briefcase },
  { position: "Operations and Executive Head", domain: "Operations and Execution", objective: "Responsible for on-ground and micro-management", icon: CheckCircle2 },
  { position: "Cultural and Creative Heads", domain: "Functional Head", objective: "Thematic aesthetics & live entertainment", icon: Megaphone }
];

const functionalDomains = [
  {
    title: "Treasurer",
    role: "Financial management, budgeting, and fund allocation.",
    tasks: [
      "Budget Planning: Draft master budget for physical venues, servers, marketing, and prize pools (under Deputy Director Physical Education).",
      "Fund Collection & Tracking: Track participant fees and corporate sponsorships systematically.",
      "Audit & Compliance: Maintain transparent ledgers and receipts for all expenditures; clear audits before final report."
    ],
    icon: Coins
  },
  {
    title: "Media Heads",
    role: "Visual branding, digital presence, and promotional content generation.",
    tasks: [
      "Design Production: Create high-quality technical posters, event banners, and digital marketing materials.",
      "Content Structuring: Provide design prompts, structural requirements, and script layouts for campaigns.",
      "Team Leadership: Manage media sub-committee members (graphic design, video editing, copywriting).",
      "Pre-Event Hype Strategy: Finalize and release promotional media strictly according to internal timeline."
    ],
    icon: PenTool
  },
  {
    title: "P & D (Planning & Development) Heads",
    role: "Core logistics, tournament structuring, and operational infrastructure.",
    tasks: [
      "Tournament Mechanics: Design rulebooks, formulate match brackets, and establish scoring systems (sports & esports).",
      "Venue & Hardware Infrastructure: Secure physical venues and technical setups (gaming servers, network, hardware).",
      "Schedule Management: Draft precise itineraries to guarantee matches, transitions, and ceremonies run without delay.",
      "Crowd & Participant Control: Formulate logistics for participant seating, spectator zones, and emergency exits."
    ],
    icon: Map
  },
  {
    title: "Marketing & Spo. Heads",
    role: "Revenue generation, corporate outreach, and brand partnerships.",
    tasks: [
      "Pitching Strategy: Develop compelling sponsorship proposals, investment tiers, and tailored pitch decks.",
      "Brand Outreach: Pitch event proposals to local/national corporate brands for financial or in-kind backing.",
      "Deliverable Management: Act as primary point of contact for sponsors; ensure promised obligations (logo placement, stage mentions) are fulfilled."
    ],
    icon: Briefcase
  },
  {
    title: "Cultural and Creative Heads",
    role: "Orchestrates thematic, physical aesthetics, and live entertainment elements.",
    tasks: [
      "Ceremonies & Entertainment: Curate live performances, manage anchors, and coordinate opening/closing ceremonies.",
      "Venue Aesthetics: Execute physical stage setups and thematic decorations aligned with brand identity.",
      "Spectator Engagement: Enhance crowd experience through creative on-ground activities to maintain energy."
    ],
    icon: Megaphone
  },
  {
    title: "Branch Representative Heads",
    role: "Departmental liaison, localized promotion, and participant mobilization.",
    tasks: [
      "Internal Marketing: Serve as localized face of EKSM within academic branches.",
      "Registration Drives: Conduct proactive announcements (desk/lab/class) to maximize awareness and registrations.",
      "Feedback Loop: Systematically collect student feedback regarding preferences, scheduling, and reception.",
      "Internal Coordination: Coordinate with Student Representatives of all branches and report to core coordinators."
    ],
    icon: Users
  }
];

export default function EKSMGuidelines() {
  const [isParakramMode, setIsParakramMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeClasses = isParakramMode 
    ? {
        bg: "bg-slate-950",
        textPrimary: "text-slate-100",
        textSecondary: "text-slate-400",
        accentText: "text-emerald-400",
        border: "border-emerald-500/30",
        cardBg: "bg-slate-900/80 backdrop-blur-md",
        cardBorder: "border-slate-800",
        cardHoverBorder: "group-hover:border-emerald-500/50",
        gradientBg: "from-emerald-950/40 via-slate-950 to-indigo-950/40",
        highlightBg: "bg-emerald-500/10",
        buttonBg: "bg-emerald-500 hover:bg-emerald-400 text-slate-950",
        inactiveButtonBg: "bg-slate-800 text-slate-400 hover:bg-slate-700",
        glow: "shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
        iconColor: "text-emerald-400",
      }
    : {
        bg: "bg-slate-50",
        textPrimary: "text-slate-900",
        textSecondary: "text-slate-600",
        accentText: "text-indigo-700",
        border: "border-indigo-200",
        cardBg: "bg-white",
        cardBorder: "border-slate-200",
        cardHoverBorder: "group-hover:border-indigo-300",
        gradientBg: "from-indigo-50 via-slate-50 to-amber-50",
        highlightBg: "bg-indigo-50",
        buttonBg: "bg-indigo-700 hover:bg-indigo-800 text-white",
        inactiveButtonBg: "bg-slate-200 text-slate-600 hover:bg-slate-300",
        glow: "shadow-[0_10px_40px_-15px_rgba(67,56,202,0.3)]",
        iconColor: "text-indigo-600",
      };

  return (
    <div className={cn("min-h-screen transition-colors duration-500 font-sans pb-24", themeClasses.bg, themeClasses.textPrimary)}>
      
      {/* Background Gradient */}
      <div className={cn("fixed inset-0 bg-gradient-to-br -z-10 transition-colors duration-500", themeClasses.gradientBg)} />

      {/* Theme Toggle Navbar */}
      <nav className={cn("sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500", themeClasses.border, isParakramMode ? "bg-slate-950/80" : "bg-white/80")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Trophy className={themeClasses.accentText} size={24} />
            <span className="font-bold tracking-tight hidden sm:block">EKSM SOP Dashboard</span>
            <span className="font-bold tracking-tight sm:hidden">EKSM SOP</span>
          </div>
          <div className="flex bg-slate-200 dark:bg-slate-800 rounded-full p-1 border border-transparent dark:border-slate-700">
            <button
              onClick={() => setIsParakramMode(false)}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                !isParakramMode ? themeClasses.buttonBg : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              )}
            >
              <Activity size={16} />
              <span className="hidden sm:inline">Athletics Mode</span>
              <span className="sm:hidden">Athletics</span>
            </button>
            <button
              onClick={() => setIsParakramMode(true)}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                isParakramMode ? themeClasses.buttonBg : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              )}
            >
              <Gamepad2 size={16} />
              <span className="hidden sm:inline">Parakram Mode</span>
              <span className="sm:hidden">Parakram</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 border", themeClasses.border, themeClasses.highlightBg, themeClasses.accentText)}>
            <Zap size={14} className={isParakramMode ? "text-emerald-400" : "text-amber-500"} />
            SGSITS, Indore
          </div>
          <h1 className={cn(
            "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-colors duration-500",
            isParakramMode ? "font-mono uppercase tracking-tighter" : ""
          )}>
            Eklavya Khel Spardha Manch
          </h1>
          <h2 className={cn("text-xl sm:text-2xl font-semibold mb-6", themeClasses.accentText)}>
            Standard Operating Procedures
          </h2>
          <p className={cn("text-base sm:text-lg leading-relaxed", themeClasses.textSecondary)}>
            This document outlines the standard operating procedures, primary responsibilities, and operational protocols for each core committee position within the EKSM.
          </p>
        </motion.div>

        {/* Role Summary Matrix */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className={cn("p-2 rounded-lg", themeClasses.highlightBg)}>
              <Users className={themeClasses.accentText} size={24} />
            </div>
            <h3 className={cn(
              "text-2xl font-bold",
              isParakramMode ? "font-mono uppercase tracking-tight" : ""
            )}>
              Role Summary Matrix
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roleSummary.map((role, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={cn(
                  "group relative p-6 rounded-2xl border transition-all duration-300",
                  themeClasses.cardBg,
                  themeClasses.cardBorder,
                  themeClasses.cardHoverBorder,
                  "hover:-translate-y-1 hover:shadow-xl"
                )}
              >
                <role.icon className={cn("mb-4", themeClasses.iconColor)} size={28} />
                <h4 className="font-bold text-lg mb-1">{role.position}</h4>
                <div className={cn("text-xs font-semibold uppercase tracking-wider mb-3", themeClasses.accentText)}>
                  {role.domain}
                </div>
                <p className={cn("text-sm", themeClasses.textSecondary)}>
                  {role.objective}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Functional Domain Heads Detail */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className={cn("p-2 rounded-lg", themeClasses.highlightBg)}>
              <Briefcase className={themeClasses.accentText} size={24} />
            </div>
            <h3 className={cn(
              "text-2xl font-bold",
              isParakramMode ? "font-mono uppercase tracking-tight" : ""
            )}>
              Functional Domains & Representation
            </h3>
          </div>

          <div className="space-y-6">
            {functionalDomains.map((domain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "flex flex-col md:flex-row gap-6 p-6 sm:p-8 rounded-3xl border transition-all duration-300",
                  themeClasses.cardBg,
                  themeClasses.cardBorder
                )}
              >
                <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={cn("p-3 rounded-xl", themeClasses.highlightBg)}>
                      <domain.icon className={themeClasses.iconColor} size={28} />
                    </div>
                    <h4 className={cn("text-xl font-bold", isParakramMode ? "font-mono" : "")}>
                      {domain.title}
                    </h4>
                  </div>
                  <p className={cn("text-sm font-medium leading-relaxed", themeClasses.textSecondary)}>
                    {domain.role}
                  </p>
                </div>
                
                <div className="md:w-2/3 md:pl-6 md:border-l border-slate-200 dark:border-slate-800">
                  <ul className="space-y-4">
                    {domain.tasks.map((task, taskIdx) => {
                      const [heading, ...rest] = task.split(': ');
                      return (
                        <li key={taskIdx} className="flex items-start gap-3">
                          <ChevronRight className={cn("shrink-0 mt-1", themeClasses.accentText)} size={16} />
                          <p className={cn("text-sm leading-relaxed", themeClasses.textSecondary)}>
                            <strong className={cn("font-semibold", themeClasses.textPrimary)}>{heading}:</strong> {rest.join(': ')}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Dispute Resolution Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={cn(
            "relative overflow-hidden rounded-3xl p-8 sm:p-12 border text-center",
            themeClasses.cardBg,
            isParakramMode ? "border-emerald-500/50" : "border-amber-300",
            themeClasses.glow
          )}>
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Gavel size={120} className={themeClasses.iconColor} />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <Gavel className={cn("mx-auto mb-6", themeClasses.iconColor)} size={48} />
              <h3 className={cn(
                "text-2xl font-bold mb-4",
                isParakramMode ? "font-mono uppercase" : ""
              )}>
                Dispute Resolution Protocol
              </h3>
              <p className={cn("text-lg leading-relaxed font-medium", themeClasses.textSecondary)}>
                In any case of dispute, the final decision will be taken by a 2:1 or 3:0 majority by the Co-Coordinators and Coordinators, acting strictly under the direction of the <strong className={themeClasses.textPrimary}>Deputy Director Physical Education</strong>.
              </p>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
