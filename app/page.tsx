"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Brain,
  Users,
  Target,
  Search,
  Settings,
  Clock,
  FileText,
  Presentation,
  Car,
  Shield,
  Bot,
  Network,
  Zap,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Home,
  BookOpen,
  Trophy,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  Download,
  ExternalLink,
  CheckCircle,
  Circle,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import TechCarousel from "@/components/tech-carousel";
import { link } from "fs";
import ContactUs from "./contactus";
export default function ResearchWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState("proposal");

  const blurRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    if (blurRef.current) {
      blurRef.current.style.maskImage = `radial-gradient(circle 300px at ${x}px ${y}px, black 50%, transparent 100%)`;
      blurRef.current.style.webkitMaskImage = `radial-gradient(circle 300px at ${x}px ${y}px, black 50%, transparent 100%)`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = [
        "home",
        "domain",
        "milestones",
        "documents",
        "presentations",
        "about",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "domain", label: "Domain", icon: BookOpen },
    { id: "milestones", label: "Milestones", icon: Trophy },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "presentations", label: "Presentations", icon: Presentation },
    { id: "about", label: "About Us", icon: Users },
    { id: "contact", label: "Contact Us", icon: Phone },
  ];

  const milestones = {
    taf: {
      title: "TAF",
      date: "July 1, 2024",
      marks: "Pending",
      status: "completed",
      description:
        "Initial project proposal with research objectives and methodology",
    },
    proposal: {
      title: "Project Proposal Report",
      date: "August 5, 2024",
      marks: "Pending",
      status: "completed",
      description:
        "Initial project proposal with research objectives and methodology",
    },
    progress1: {
      title: "Progress Presentation-1",
      date: "December 4, 2024",
      marks: "Pending",
      status: "completed",
      description:
        "First progress presentation covering literature review and initial development",
    },

    progress2: {
      title: "Progress Presentation-2",
      date: "March 19, 2025",
      marks: "Pending",
      status: "completed",
      description:
        "Second progress presentation with system implementation and testing results",
    },
    finalreport: {
      title: "Final Report Submission",
      date: "April 11, 2025",
      marks: "Pending",
      status: "completed",
      description:
        "Comprehensive project report including system design, implementation, and evaluation",
    },
    finalpresentation: {
      title: "Final Presentation & Viva",
      date: "May 26, 2025",
      marks: "Pending",
      status: "pending",
      description:
        "Final presentation summarizing project outcomes, challenges, and future work",
    },
    websiteassessment: {
      title: "Website Assessment",
      date: "May 26, 2025",
      marks: "Pending",
      status: "pending",
      description:
        "Evaluation of project website and documentation for completeness and clarity",
    },
    researchpaper: {
      title: "Research Paper Submission",
      date: "June 2, 2025",
      marks: "Pending",
      status: "pending",
      description:
        "Submission of research paper summarizing findings and contributions",
    },
    logbook: {
      title: "Logbook Submission",
      date: "June 9, 2025",
      marks: "Pending",
      status: "pending",
      description:
        "Submission of logbook documenting project progress, challenges, and solutions",
    },
  };
  const documents = [
    {
      title: "Topic Assessment",
      status: "available",
      date: "2021/02/25",
      type: "PDF",
      groupType: "Group",
      link: "https://drive.google.com/drive/folders/1TdASMvpH3pvCHf7V2jGQjI_quxWAVfML?usp=sharing",
    },
    {
      title: "Project Charter",
      status: "available",
      date: "2021/02/25",
      type: "PDF",
      groupType: "Group",
      link: "#",
    },
    {
      title: "Project Proposal",
      status: "available",
      date: "2021/03/22",
      type: "PDF",
      groupType: "Individual",
      link: "https://drive.google.com/drive/folders/1JxoHwQIAwdIm73SjLW5JxhAofD89W-0V?usp=sharing",
    },
    {
      title: "Status Documents I",
      status: "available",
      date: "2021/07/05",
      type: "PDF",
      groupType: "Individual",
      link: "#",
    },
    {
      title: "Status Documents II",
      status: "pending",
      date: "",
      type: "PDF",
      groupType: "Individual",
      link: "#",
    },
    {
      title: "Research Paper",
      status: "pending",
      date: "",
      type: "PDF",
      groupType: "Group",
      link: "#",
    },
    {
      title: "Final Report",
      status: "available",
      date: "2021/10/13",
      type: "PDF",
      groupType: "Group",
      link: "https://drive.google.com/drive/folders/1T6DaNB9AAzOmocP9ZxHXlNpv2s4wHHce?usp=sharing",
    },
    {
      title: "Poster",
      status: "available",
      date: "2021/10/13",
      type: "PDF",
      groupType: "Group",
      link: "#",
    },
  ];
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='fixed top-0 w-full bg-white/50 backdrop-blur-sm shadow-lg z-50 transition-all duration-300'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-900 to-purple-600 rounded-lg flex justify-center items-center p-2'>
                <Image
                  src='/images/logo_1.svg'
                  alt='Logo'
                  width={32}
                  height={32}
                  className='rounded-full'
                />
              </div>
              <span className='font-bold text-blue-900 text-lg'>
                24-25J-216 - Research Project
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-1'>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size='sm'
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-blue-900 text-white"
                      : "text-slate-600 hover:text-blue-900 hover:bg-blue-50"
                  }`}>
                  <item.icon className='w-4 h-4 mr-2' />
                  {item.label}
                </Button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant='ghost'
              size='sm'
              className='lg:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Menu className='w-5 h-5' />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className='lg:hidden mt-4 pb-4 border-t border-slate-200/50 pt-4 animate-in slide-in-from-top-2 duration-200'>
              <div className='grid grid-cols-2 gap-2'>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant='ghost'
                    size='sm'
                    onClick={() => scrollToSection(item.id)}
                    className='justify-start text-slate-600 hover:text-blue-900 hover:bg-blue-50'>
                    <item.icon className='w-4 h-4 mr-2' />
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Home Section */}
      <section
        id='home'
        className='relative pt-24 pb-16 text-white overflow-hidden'
        onMouseMove={handleMouseMove}>
        {/* Background Image Layer */}
        <div
          className='absolute inset-0 blur-md'
          style={{
            backgroundImage: "url('/images/img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: "-10px", // Compensate for blur expansion
            width: "calc(100% + 50px)",
            height: "calc(100% + 40px)",
          }}
        />

        {/* Blur Layer with Mouse Interaction */}
        <div
          ref={blurRef}
          className='absolute inset-0 z-10 pointer-events-none transition-all duration-100'
          style={{
            maskImage:
              "radial-gradient(circle 0px at 0px 0px, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle 0px at 0px 0px, black 0%, transparent 100%)",
            backgroundImage: "url('/images/img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 z-5 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>

        <div className='container mx-auto px-4 relative z-20'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='flex justify-center mb-6'>
              <div className='flex items-center space-x-4 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000'>
                <div className='w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center'>
                  <Brain className='w-8 h-8 text-white' />
                </div>
                <div className='w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center'>
                  <Network className='w-8 h-8 text-white' />
                </div>
                <div className='w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center'>
                  <Car className='w-8 h-8 text-white' />
                </div>
              </div>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold mb-6 animate-in fade-in-50 slide-in-from-bottom-6 duration-1000 delay-200'>
              LLM BASED MULTI-AGENT PLATFORM
            </h1>
            <h2 className='text-2xl md:text-3xl font-semibold mb-8 text-blue-100 animate-in fade-in-50 slide-in-from-bottom-8 duration-1000 delay-400'>
              FOR WORKPLACE TASK AUTOMATION
            </h2>

            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 text-left max-w-3xl mx-auto animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-600'>
              <h3 className='text-xl font-semibold mb-4 text-center'>
                Project Abstract
              </h3>
              <p className='text-blue-100 leading-relaxed'>
                This research project focuses on developing an innovative
                LLM-based multi-agent platform specifically designed for
                workplace task automation in the motor insurance industry. The
                platform leverages advanced Large Language Models to coordinate
                multiple intelligent agents, enabling seamless automation of
                complex insurance workflows including
                Customer-Estimation-Crosschecking, Customer Risk Prediction,
                Insurance Document Automation, Claim Process Automation & Fraud
                Detection, and Vehicle Risk Prediction & Premium Adjustment. Our
                solution addresses the critical need for intelligent automation
                in insurance operations while maintaining high accuracy,
                regulatory compliance, and operational efficiency.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-50 slide-in-from-bottom-12 duration-1000 delay-800'>
              <Button
                size='lg'
                className='bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105'
                onClick={() => scrollToSection("domain")}>
                Explore Domain
                <ChevronRight className='w-5 h-5 ml-2' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 bg-black/20 backdrop-blur-sm '
                onClick={() => scrollToSection("milestones")}>
                <Trophy className='w-5 h-5 mr-2' />
                View Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Section */}
      <section id='domain' className='py-16 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6'>
                <BookOpen className='w-8 h-8 text-blue-900' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4'>
                Domain
              </h2>
              <p className='text-xl text-slate-600'>
                Comprehensive domain analysis and research foundation
              </p>
            </div>

            {/* Literature Survey */}
            <div className='mb-16'>
              <h3 className='text-2xl font-bold text-blue-900 mb-8 text-center'>
                Literature Survey
              </h3>
              <div className='grid md:grid-cols-2 gap-8'>
                <Card className='border-l-4 border-l-blue-900 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <CardHeader>
                    <CardTitle className='flex items-center text-blue-900'>
                      <Bot className='w-5 h-5 mr-2' />
                      Customer-Estimation-Crosschecking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-slate-600'>
                      Analysis of Large Language Model implementations in
                      enterprise automation, focusing on their effectiveness in
                      complex workflow management and decision-making processes.
                    </p>
                  </CardContent>
                </Card>

                <Card className='border-l-4 border-l-purple-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <CardHeader>
                    <CardTitle className='flex items-center text-purple-600'>
                      <Network className='w-5 h-5 mr-2' />
                      Customer Risk Prediction & Insurance Document Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-slate-600'>
                      The insurance industry has advanced by integrating XGBoost
                      with Llama 3.3 70B for customer risk prediction and Gemini
                      1.5 Flash for document data extraction. XGBoost accurately
                      predicts claims and identifies high-risk customers, while
                      Llama 3.3 70B provides clear, natural language
                      explanations, enhancing interpretability and regulatory
                      compliance. Meanwhile, Gemini 1.5 Flash efficiently
                      extracts key information from unstructured insurance
                      documents, streamlining data processing. This unified
                      workflow, combining XGBoost, Llama 3.3 70B, and Gemini 1.5
                      Flash, offers a scalable, explainable, and efficient
                      system for risk assessment and document automation,
                      optimizing personalized premiums and operational
                      efficiency in real-world insurance applications.
                    </p>
                  </CardContent>
                </Card>

                <Card className='border-l-4 border-l-green-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <CardHeader>
                    <CardTitle className='flex items-center text-green-600'>
                      <Zap className='w-5 h-5 mr-2' />
                      Claim Process Automation & Fraud Detection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-slate-600'>
                      Recent advancements in insurance leverage AI, machine
                      learning, and NLP for fraud detection and claim
                      processing. Models like decision trees, neural networks,
                      CNNs, SVMs, and ensemble methods show high accuracy,
                      especially in detecting fraudulent claims and assessing
                      damage from mobile images. Tools like VGG16, Mask R-CNN,
                      and LDA support part localization and fraud
                      identification. Large Language Models (LLMs) such as BERT
                      and GPT analyze unstructured data to improve claim
                      validation. However, integration across systems remains
                      limited. Current research emphasizes the potential of
                      unified LLM-based multi-agent frameworks to automate
                      workflows, enhance fraud detection, and streamline the
                      entire vehicle insurance claim process.
                    </p>
                  </CardContent>
                </Card>

                <Card className='border-l-4 border-l-orange-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <CardHeader>
                    <CardTitle className='flex items-center text-orange-600'>
                      <Car className='w-5 h-5 mr-2' />
                      Vehicle Risk Prediction & Premium Adjustment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-slate-600'>
                      Risk assessments are essential in vehicle insurance to
                      predict potential claims. Research highlights the
                      importance of machine learning and statistical methods in
                      improving risk evaluation. Techniques like the Analytical
                      Hierarchy Process (AHP) help categorize risks related to
                      drivers, vehicles, and the environment, allowing insurers
                      to prioritize key factors. Generalized Linear Models
                      (GLMs), especially with gamma distribution, and K-means
                      clustering enable detailed analysis by grouping similar
                      risk profiles. These methods enhance accuracy in premium
                      calculation by considering variables such as prior claims,
                      vehicle models, and market value. Collectively, they
                      support the development of efficient, transparent, and
                      reliable insurance risk analysis systems.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Research Gap */}
            <div className='mb-16'>
              <h3 className='text-2xl font-bold text-blue-900 mb-8 text-center'>
                Research Gap
              </h3>
              <div className='bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8'>
                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <Badge variant='destructive' className='mb-4'>
                      Integration Challenges
                    </Badge>
                    <p className='text-slate-700'>
                      Current insurance systems face a key gap in integrating
                      LLMs with multi-agent coordination, limiting their ability
                      to automate complex workflows. Without seamless
                      interaction between language understanding and task
                      execution, processes like fraud detection, risk analysis,
                      and compliance remain inefficient, fragmented, and unable
                      to adapt to dynamic regulatory and business needs.
                    </p>
                  </div>
                  <div className='text-center'>
                    <Badge variant='destructive' className='mb-4'>
                      Domain Specificity
                    </Badge>
                    <p className='text-slate-700'>
                      Despite incremental digitalization, Sri Lanka’s
                      motor-insurance sector still lacks a comprehensive, fully
                      automated, multi-agent platform that unifies intelligent
                      document handling, real-time fraud detection, and
                      LLM-driven premium adjustment with vehicle-specific risk
                      analysis; current tools remain siloed and rule-based,
                      leaving a critical industry gap for the country’s first
                      end-to-end solution that can autonomously coordinate every
                      step of the claims and underwriting workflow.
                    </p>
                  </div>
                  <div className='text-center'>
                    <Badge variant='destructive' className='mb-4'>
                      Scalability Issues
                    </Badge>
                    <p className='text-slate-700'>
                      Existing insurance automation systems lack the scalability
                      needed for enterprise-wide deployment, often failing to
                      support high-volume data processing, real-time
                      decision-making, and adaptive learning. This results in
                      performance bottlenecks, limited responsiveness to
                      changing risk factors, and challenges in maintaining
                      efficiency across large, dynamic operational environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Problem */}
            <div className='mb-16'>
              <h3 className='text-2xl font-bold text-blue-900 mb-8 text-center'>
                Research Problem
              </h3>
              <Card className='bg-gradient-to-r from-blue-50 to-purple-50'>
                <CardContent className='p-8'>
                  <p className='text-lg text-slate-700 leading-relaxed text-center'>
                    The motor insurance industry faces significant challenges in
                    automating complex workflows due to the lack of intelligent
                    coordination between various functional components,
                    dependency on manual document processing, vulnerability to
                    fraudulent claim activities, and limited adaptability to
                    dynamic risk factors and regulatory changes. Existing
                    automation solutions often operate in silos and lack the
                    cognitive capabilities needed to analyze unstructured data,
                    detect anomalies, or make real-time decisions across
                    interconnected processes. These limitations hinder the
                    industry's ability to efficiently manage documents,
                    accurately calculate premiums based on vehicle-associated
                    risk, validate post-repair inspections, and cross-check
                    customer estimates with actual repair data. This research
                    investigates how AI-driven multi-agent systems can address
                    these gaps by enabling intelligent, autonomous agents to
                    collaboratively manage and optimize the end-to-end insurance
                    workflow—enhancing accuracy, transparency, fraud prevention,
                    and operational efficiency in motor insurance operations.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Research Objectives */}
            <div className='mb-16'>
              <h3 className='text-2xl font-bold text-blue-900 mb-8 text-center'>
                Research Objectives
              </h3>
              <div className='space-y-4'>
                {[
                  "Develop an automated document processing system and customer risk calculation model using advanced AI and machine learning techniques",
                  "To develop a system that automates insurance claim submission using chatbot assistance, performs damage assessment from media files to estimate repair costs, and identifies potential fraud by analyzing behavioral patterns and verifying user and vehicle details through intelligent data analysis.",
                  "Identifying risk levels associated with vehicle types and adjust the insurance premiums based on risk levels",
                  "To develop a system that maintains an up-to-date database of vehicle spare parts and repair costs, while validating the integrity of customer-provided repair estimations to ensure accuracy, prevent overcharging, and support fair claim settlements",
                  "Validate the platform through comprehensive testing in real-world motor insurance scenarios",
                ].map((objective, index) => (
                  <Card
                    key={index}
                    className='hover:shadow-md transition-all duration-300'>
                    <CardContent className='p-4'>
                      <div className='flex items-start space-x-4'>
                        <div className='w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0'>
                          {index + 1}
                        </div>
                        <p className='text-slate-700'>{objective}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div className='mb-16'>
              <h3 className='text-2xl font-bold text-blue-900 mb-8 text-center'>
                Methodology
              </h3>
              <Image
                src='/images/system_overview_diagram.png'
                alt='Methodology Diagram'
                width={1200}
                height={630}
                className='mb-8'
              />
              <h5 className='text-xl font-semibold text-blue-900 text-center'>
                The research methodology involves a systematic approach to
                developing the multi-agent platform, including:
              </h5>
              <Card className='bg-gradient-to-r from-blue-50 to-purple-50 mb-4 mt-4'>
                <CardContent className='p-8'>
                  <div className='md:flex md:space-x-8 '>
                    {/* Left side: List of components */}
                    <ul className='list-disc list-inside text-slate-700 space-y-2 md:w-1/2 mb-6 md:mb-0'>
                      <li>
                        <strong>Customer- Estimation-Crosschecking</strong>
                      </li>
                      <li>
                        <strong>
                          Customer Risk Prediction & Insurance Document
                          Automation
                        </strong>
                      </li>
                      <li>
                        <strong>
                          Claim Process Automation & Fraud Detection
                        </strong>
                      </li>
                      <li>
                        <strong>
                          Vehicle Risk Prediction & Premium Adjustment
                        </strong>
                      </li>
                    </ul>

                    {/* Right side: Description paragraph */}
                    <p className='text-slate-600 text-left md:text-start md:w-1/2'>
                      Each component will be developed using state-of-the-art
                      technologies and integrated into a cohesive platform that
                      enhances operational efficiency, accuracy, and fraud
                      prevention in motor insurance processes. The platform will
                      be validated through comprehensive testing in real-world
                      scenarios, ensuring its effectiveness in automating
                      complex insurance workflows.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {[
                  {
                    phase: "Analysis & Design",
                    icon: Search,
                    color: "blue",
                    steps: [
                      "Requirements Analysis",
                      "System Architecture",
                      "Agent Design Patterns",
                    ],
                  },
                  {
                    phase: "Development",
                    icon: Settings,
                    color: "purple",
                    steps: [
                      "LLM Integration",
                      "Multi-Agent Framework",
                      "API Development",
                    ],
                  },
                  {
                    phase: "Testing & Validation",
                    icon: Shield,
                    color: "green",
                    steps: [
                      "Unit Testing",
                      "Integration Testing",
                      "Performance Evaluation",
                    ],
                  },
                  {
                    phase: "Deployment",
                    icon: Zap,
                    color: "orange",
                    steps: ["Production Setup", "Monitoring", "Documentation"],
                  },
                ].map((phase, index) => (
                  <Card
                    key={index}
                    className='hover:shadow-lg transition-all duration-300'>
                    <CardHeader className='text-center'>
                      <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4'>
                        <phase.icon className='w-6 h-6 text-blue-600' />
                      </div>
                      <CardTitle className='text-blue-900'>
                        {phase.phase}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-2'>
                        {phase.steps.map((step, stepIndex) => (
                          <li
                            key={stepIndex}
                            className='flex items-center text-sm text-slate-600'>
                            <div className='w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 flex-shrink-0'></div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className='text-2xl font-bold text-blue-900 mb-8 text-center'>
                Technologies Used
              </h3>
              <TechCarousel />
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[
                  {
                    category: "Large Language Models",
                    icon: Brain,
                    technologies: ["GPT-4", "LLaMA", "Custom Fine-tuning"],
                  },
                  {
                    category: "Multi-Agent Frameworks",
                    icon: Network,
                    technologies: ["LangChain", "Custom Agents"],
                  },
                  {
                    category: "Backend Technologies",
                    icon: Settings,
                    technologies: ["Python", "Flask", "PostgreSQL", "Laravel"],
                  },
                  {
                    category: "Frontend Technologies(Web & Mobile)",
                    icon: Settings,
                    technologies: [
                      "React",
                      "Vitejs",
                      "TypeScript",
                      "React Native",
                      "Tailwind CSS",
                    ],
                  },
                  {
                    category: "Cloud Infrastructure",
                    icon: Zap,
                    technologies: ["GCP", "Docker", "Kubernetes", "Terraform"],
                  },
                  {
                    category: "Insurance Integration",
                    icon: Car,
                    technologies: ["REST APIs", "POSTMAN", "Custom Connectors"],
                  },
                ].map((tech, index) => (
                  <Card
                    key={index}
                    className='hover:shadow-lg transition-all duration-300'>
                    <CardHeader>
                      <div className='inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mb-3'>
                        <tech.icon className='w-5 h-5 text-purple-600' />
                      </div>
                      <CardTitle className='text-blue-900 text-lg'>
                        {tech.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='flex flex-wrap gap-2'>
                        {tech.technologies.map((technology, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant='secondary'
                            className='text-xs'>
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section id='milestones' className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6'>
                <Trophy className='w-8 h-8 text-orange-600' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4'>
                Milestones
              </h2>
              <p className='text-xl text-slate-600'>
                Project assessments and key deliverables
              </p>
            </div>

            {/* Milestone Selector */}
            <div className='flex flex-wrap justify-center gap-2 mb-8'>
              {Object.entries(milestones).map(([key, milestone]) => (
                <Button
                  key={key}
                  variant={selectedMilestone === key ? "default" : "outline"}
                  size='sm'
                  onClick={() => setSelectedMilestone(key)}
                  className={`transition-all duration-200 ${
                    selectedMilestone === key
                      ? "bg-blue-900 text-white"
                      : "text-slate-600 hover:text-blue-900"
                  }`}>
                  {milestone.title}
                </Button>
              ))}
            </div>

            {/* Selected Milestone Details */}
            <Card className='mb-8 hover:shadow-lg transition-all duration-300'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-2xl text-blue-900 flex items-center'>
                    {milestones[selectedMilestone as keyof typeof milestones]
                      .status === "completed" ? (
                      <CheckCircle className='w-6 h-6 text-green-500 mr-3' />
                    ) : milestones[selectedMilestone as keyof typeof milestones]
                        .status === "pending" ? (
                      <Clock className='w-6 h-6 text-blue-500 mr-3' />
                    ) : (
                      <Circle className='w-6 h-6 text-slate-400 mr-3' />
                    )}
                    {
                      milestones[selectedMilestone as keyof typeof milestones]
                        .title
                    }
                  </CardTitle>
                  <Badge
                    variant={
                      milestones[selectedMilestone as keyof typeof milestones]
                        .status === "completed"
                        ? "default"
                        : milestones[
                            selectedMilestone as keyof typeof milestones
                          ].status === "pending"
                        ? "secondary"
                        : "outline"
                    }
                    className='text-lg px-3 py-1'>
                    {
                      milestones[selectedMilestone as keyof typeof milestones]
                        .marks
                    }
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold text-slate-700 mb-2'>
                      Assessment Details
                    </h4>
                    <div className='space-y-2'>
                      <div className='flex items-center text-slate-600'>
                        <Calendar className='w-4 h-4 mr-2' />
                        <span>
                          Due Date:{" "}
                          {
                            milestones[
                              selectedMilestone as keyof typeof milestones
                            ].date
                          }
                        </span>
                      </div>
                      <div className='flex items-center text-slate-600'>
                        <Award className='w-4 h-4 mr-2' />
                        <span>
                          Marks Allocated:{" "}
                          {
                            milestones[
                              selectedMilestone as keyof typeof milestones
                            ].marks
                          }
                        </span>
                      </div>
                      <div className='flex items-center text-slate-600'>
                        <Target className='w-4 h-4 mr-2' />
                        <span>
                          Status:
                          {milestones[
                            selectedMilestone as keyof typeof milestones
                          ].status
                            .replace("-", " ")
                            .toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className='font-semibold text-slate-700 mb-2'>
                      Description
                    </h4>
                    <p className='text-slate-600'>
                      {
                        milestones[selectedMilestone as keyof typeof milestones]
                          .description
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* All Milestones Overview */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {Object.entries(milestones).map(([key, milestone]) => (
                <Card
                  key={key}
                  className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                    selectedMilestone === key ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedMilestone(key)}>
                  <CardContent className='p-6'>
                    <div className='flex items-center justify-between mb-3'>
                      {milestone.status === "completed" ? (
                        <CheckCircle className='w-8 h-8 text-green-500' />
                      ) : milestone.status === "pending" ? (
                        <Clock className='w-8 h-8 text-blue-500' />
                      ) : (
                        <Circle className='w-8 h-8 text-slate-400' />
                      )}
                      <Badge variant='outline' className='text-sm'>
                        {milestone.marks}
                      </Badge>
                    </div>
                    <h3 className='font-semibold text-blue-900 mb-2'>
                      {milestone.title}
                    </h3>
                    <p className='text-sm text-slate-600 mb-3'>
                      {milestone.date}
                    </p>
                    <Badge
                      variant={
                        milestone.status === "completed"
                          ? "default"
                          : milestone.status === "pending"
                          ? "secondary"
                          : "outline"
                      }
                      className='text-xs'>
                      {milestone.status.replace("-", " ")}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id='documents' className='py-16 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6'>
                <FileText className='w-8 h-8 text-green-600' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4'>
                Documents
              </h2>
              <p className='text-xl text-slate-600'>
                Project documentation and deliverables
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className='bg-white shadow-sm rounded-lg border border-slate-200 hover:shadow-md transition p-4 flex flex-col justify-between'>
                  <div className='flex items-center space-x-2 mb-3'>
                    <FileText className='w-5 h-5 text-red-500' />
                    <h2 className='text-lg font-semibold text-slate-800'>
                      {doc.title}
                    </h2>
                  </div>

                  <p className='text-sm text-slate-600 mb-1'>
                    {doc.date
                      ? `Submitted on ${doc.date}`
                      : "Yet to be submitted, link will be updated soon."}
                  </p>

                  <div className='flex justify-between items-center mt-auto pt-3 border-t border-slate-100'>
                    <span className='text-sm text-slate-500'>
                      {doc.groupType}
                    </span>
                    <a
                      href={doc.link}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <button
                        className={`text-sm flex items-center gap-1 ${
                          doc.status === "available"
                            ? "text-emerald-600 hover:underline"
                            : "text-slate-400 cursor-not-allowed"
                        }`}
                        disabled={doc.status !== "available"}>
                        {doc.status === "available" ? (
                          <>
                            <Download className='w-4 h-4' />
                            Download
                          </>
                        ) : (
                          <>
                            <Clock className='w-4 h-4' />
                            Pending
                          </>
                        )}
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section id='presentations' className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6'>
                <Presentation className='w-8 h-8 text-purple-600' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4'>
                Presentations
              </h2>
              <p className='text-xl text-slate-600'>
                Slides from past and upcoming presentations
              </p>
            </div>

            <div className='space-y-6'>
              {[
                {
                  title: "Proposal Presentation",
                  description:
                    "Initial project proposal presentation outlining research objectives and methodology",
                  date: "July 29, 2024",
                  duration: "20 minutes",
                  slides: "15 slides",
                  status: "completed",
                  audience: "Academic Panel",
                },
                {
                  title: "Progress Presentation-1",
                  description:
                    "First progress presentation covering literature review and initial system design",
                  date: "December 4, 2024",
                  duration: "25 minutes",
                  slides: "22 slides",
                  status: "completed",
                  audience: "Academic Panel",
                },
                {
                  title: "Progress Presentation-2",
                  description:
                    "Second progress presentation with implementation details and preliminary results",
                  date: "March 19, 2025",
                  duration: "30 minutes",
                  slides: "28 slides",
                  status: "completed",
                  audience: "Academic Panel",
                },
                {
                  title: "Final Presentation",
                  description:
                    "Comprehensive final presentation with complete system demonstration and results",
                  date: "May 26, 2025",
                  duration: "45 minutes",
                  slides: "35 slides",
                  status: "upcoming",
                  audience: "Academic Panel",
                },
              ].map((presentation, index) => (
                <Card
                  key={index}
                  className='hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <CardContent className='p-6'>
                    <div className='flex items-start justify-between mb-4'>
                      <div className='flex-1'>
                        <div className='flex items-center space-x-3 mb-2'>
                          <h3 className='text-xl font-semibold text-blue-900'>
                            {presentation.title}
                          </h3>
                          <Badge
                            variant={
                              presentation.status === "completed"
                                ? "default"
                                : "outline"
                            }
                            className='text-xs'>
                            {presentation.status}
                          </Badge>
                        </div>
                        <div className='grid md:grid-cols-2 gap-4 text-sm text-slate-600 mb-3'>
                          <div className='space-y-1'>
                            <div className='flex items-center'>
                              <Calendar className='w-4 h-4 mr-2' />
                              <span>{presentation.date}</span>
                            </div>
                            <div className='flex items-center'>
                              <Clock className='w-4 h-4 mr-2' />
                              <span>{presentation.duration}</span>
                            </div>
                          </div>
                          <div className='space-y-1'>
                            <div className='flex items-center'>
                              <Presentation className='w-4 h-4 mr-2' />
                              <span>{presentation.slides}</span>
                            </div>
                            <div className='flex items-center'>
                              <Users className='w-4 h-4 mr-2' />
                              <span>{presentation.audience}</span>
                            </div>
                          </div>
                        </div>
                        <p className='text-slate-600 mb-4'>
                          {presentation.description}
                        </p>
                        <div className='flex space-x-2'>
                          <Button
                            size='sm'
                            variant={
                              presentation.status === "completed"
                                ? "default"
                                : "outline"
                            }
                            disabled={presentation.status === "upcoming"}>
                            {presentation.status === "completed" ? (
                              <>
                                <Download className='w-4 h-4 mr-2' />
                                Download Slides
                              </>
                            ) : (
                              <>
                                <Clock className='w-4 h-4 mr-2' />
                                Upcoming
                              </>
                            )}
                          </Button>
                          {presentation.status === "completed" && (
                            <Button size='sm' variant='outline'>
                              <ExternalLink className='w-4 h-4 mr-2' />
                              View Online
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center ml-4'>
                        <Presentation className='w-6 h-6 text-purple-600' />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id='about'
        className='py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6'>
                <Users className='w-8 h-8 text-white' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>About Us</h2>
              <p className='text-xl text-blue-100'>
                Meet the research team behind this innovative project
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  image: "/images/supervisor.jpg",
                  name: "Dr.Samantha Rajapaksha",
                  role: "",
                  email: "samantha.r@sliit.lk",
                  expertise: "Supervisor",
                  achievements: [
                    "Head | Department of Information Technology (SLIIT)",
                    "Ph.D.(SLIIT)",
                    "M.Sc.in IT (SLIIT)",
                    "B.Sc.(Eng.) University of Moratuwa.",
                  ],
                  description:
                    "Semantic Web | Robotic Middleware | IOT | Algorithms related to Operating Systems",
                  googleschScholar:
                    "https://scholar.google.com/citations?hl=en&user=t1krVdkAAAAJ",
                  linkedin:
                    "https://www.linkedin.com/in/samantha-rajapaksha-528657b/",
                  researchGate:
                    "https://www.researchgate.net/profile/Samantha-Rajapaksha-2",
                },
                {
                  image: "/images/co_supervisor.jpg",
                  name: "Dr.Sanvitha Kasthuriarachchi",
                  role: "",
                  email: "sanvitha.k@sliit.lk",
                  expertise: "Co-Supervisor",
                  achievements: [
                    "Assistant Professor | Faculty of Computing (SLIIT)",
                    "PhD in Computer Science",
                    "M.Sc. in Information Technology",
                    "B.Sc. Special Hons in Information Technology",
                  ],
                  description:
                    "Big Data Analytics | Data Mining | Machine Learning",
                  googleschScholar:
                    "https://scholar.google.com/citations?user=0FZAXcMAAAAJ&hl=en",
                  linkedin:
                    "https://www.linkedin.com/in/sanvitha-kasthuriarachchi-31b50a37/",
                  researchGate:
                    "https://www.researchgate.net/profile/Sanvitha-Kasthuriarachchi-2",
                },
                {
                  image: "/images/external_supervisor.jpg",
                  name: "Mr. Lasitha Petthawadu",
                  role: "",
                  email: "petthawadu3@gmail.com",
                  expertise: "External-Supervisor",
                  achievements: [
                    "Founder Tetranyde (Pvt) Ltd.",
                    "Principal Software Architect",
                    "Visiting Lecturer at SLIIT",
                    "Visiting Lecturer at IIT",
                    "MSc in Computer Science (University of Moratuwa)",
                  ],
                  description:
                    "Principal Software Architect | Certified Blockchain Expert | CSM",
                  googleschScholar: "#",
                  linkedin: "https://www.linkedin.com/in/lasithapetthawadu/",
                  researchGate: "#",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className='bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2'>
                  <CardContent className='p-6'>
                    <div className='text-center mb-4'>
                      <div className='w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-4 flex items-center justify-center'>
                        <img
                          src={member.image}
                          alt={member.name}
                          className='w-20 h-20 rounded-full object-cover'
                        />
                      </div>
                      <h3 className='text-xl font-semibold mb-1'>
                        {member.name}
                      </h3>
                      <p className='text-blue-200 font-medium mb-2'>
                        {member.role}
                      </p>
                      <Badge
                        variant='secondary'
                        className='mb-3 bg-white/20 text-white border-white/30'>
                        {member.expertise}
                      </Badge>
                    </div>
                    <p className='text-blue-100 text-sm mb-4 text-center'>
                      {member.description}
                    </p>
                    <div className='space-y-2 mb-4'>
                      <div className='flex items-center text-blue-100 text-sm'>
                        <Mail className='w-4 h-4 mr-2 flex-shrink-0' />
                        <span className='truncate'>{member.email}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className='text-sm font-semibold text-white mb-2'></h4>
                      <ul className='space-y-1'>
                        {member.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className='text-blue-100 text-xs flex items-start'>
                            <div className='w-1 h-1 bg-blue-300 rounded-full mt-2 mr-2 flex-shrink-0'></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className='flex space-x-3 mt-4'>
                        {member.googleschScholar && (
                          <a
                            href={member.googleschScholar}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Button
                              variant='outline'
                              size='sm'
                              className='text-blue-100 hover:bg-blue-200 hover:text-blue-900'>
                              <span className='flex items-center gap-1'>
                                <img
                                  src='/images/google_scholar.png'
                                  alt='Google Scholar'
                                  className='w-4 h-4'
                                />
                              </span>
                            </Button>
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Button
                              variant='outline'
                              size='sm'
                              className='text-blue-100 hover:bg-blue-200 hover:text-blue-900'>
                              <span className='flex items-center gap-1'>
                                <Linkedin className='w-4 h-4 text-black' />
                              </span>
                            </Button>
                          </a>
                        )}
                        {member.researchGate && (
                          <a
                            href={member.researchGate}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Button
                              variant='outline'
                              size='sm'
                              className='text-blue-100 hover:bg-blue-200 hover:text-blue-900'>
                              <span className='flex items-center gap-1'>
                                <img
                                  src='/images/researchgate.png'
                                  alt='ResearchGate'
                                  className='w-4 h-4'
                                />
                              </span>
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <hr className='border-white/30 my-8' />
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                {
                  image: "/images/team_member_1.jpg",
                  name: "Panangala P.A.D.S.S",
                  role: "SE Undergraduate",
                  email: "it21257568@my.sliit.lk",
                  expertise: "Group Leader",
                  achievements: [
                    "Sri Lanka Institute of Information Technology",
                  ],
                  description: "Customer-Estimation-Crosschecking",
                },
                {
                  image: "/images/team_member_2.jpg",
                  name: " Munasinghe J.R",
                  role: "SE Undergraduate",
                  email: "it21258626@my.sliit.lk",
                  expertise: "Group Member",
                  achievements: [
                    "Sri Lanka Institute of Information Technology",
                  ],
                  description:
                    "Customer Risk Prediction & Insurance Document Automation",
                },
                {
                  image: "/images/team_member_3.jpg",
                  name: "Samarasinghe G.C.S.",
                  role: "SE Undergraduate",
                  email: "it21227622@my.sliit.lk",
                  expertise: "Group Member",
                  achievements: [
                    "Sri Lanka Institute of Information Technology",
                  ],
                  description: "Claim Process Automation & Fraud Detection",
                },
                {
                  image: "/images/team_member_4.jpg",
                  name: "Narasinghe N.M.N.N",
                  role: "SE Undergraduate",
                  email: "it21259302@my.sliit.lk",
                  expertise: "Group Member",
                  achievements: [
                    "Sri Lanka Institute of Information Technology",
                  ],
                  description: "Vehicle Risk Prediction & Premium Adjustment",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className='bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2'>
                  <CardContent className='p-6'>
                    <div className='text-center mb-4'>
                      <div className='w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-4 flex items-center justify-center'>
                        <img
                          src={member.image}
                          alt={member.name}
                          className='w-20 h-20 rounded-full object-cover'
                        />
                      </div>
                      <h3 className='text-xl font-semibold mb-1'>
                        {member.name}
                      </h3>
                      <p className='text-blue-200 font-medium mb-2'>
                        {member.role}
                      </p>
                      <Badge
                        variant='secondary'
                        className='mb-3 bg-white/20 text-white border-white/30'>
                        {member.expertise}
                      </Badge>
                    </div>
                    <p className='text-blue-100 text-sm mb-4 text-center'>
                      {member.description}
                    </p>
                    <div className='space-y-2 mb-4'>
                      <div className='flex items-center text-blue-100 text-sm'>
                        <Mail className='w-4 h-4 mr-2 flex-shrink-0' />
                        <span className='truncate'>{member.email}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className='text-sm font-semibold text-white mb-2'>
                        University
                      </h4>
                      <ul className='space-y-1'>
                        {member.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className='text-blue-100 text-xs flex items-start'>
                            <div className='w-1 h-1 bg-blue-300 rounded-full mt-2 mr-2 flex-shrink-0'></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <footer className='bg-slate-900 text-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='flex items-center justify-center space-x-2 mb-6'>
              <div className='w-10 h-10 p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
                <Image
                  src='/images/logo_1.svg'
                  alt='Logo'
                  width={32}
                  height={32}
                  className='rounded-full'
                />
              </div>
              <span className='font-bold text-xl'>
                24-25J-216 - Research Project
              </span>
            </div>
            <p className='text-slate-400 mb-8'>
              Advancing the future of workplace automation through intelligent
              multi-agent systems
            </p>
            <div className='flex justify-center space-x-6 text-slate-400'>
              <span>© 24-25J-216 Research Team</span>
              <span>•</span>
              <span>SLIIT Faculty of Computing</span>
              <span>•</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-900 hover:bg-blue-800 text-white shadow-lg transition-all duration-300 transform hover:scale-110 z-50'
          size='sm'>
          <ArrowUp className='w-5 h-5' />
        </Button>
      )}
    </div>
  );
}
