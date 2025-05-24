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
} from "lucide-react";
import Image from "next/image";

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
    proposal: {
      title: "Project Proposal",
      date: "March 15, 2024",
      marks: "15%",
      status: "completed",
      description:
        "Initial project proposal with research objectives and methodology",
    },
    progress1: {
      title: "Progress Presentation-1",
      date: "May 20, 2024",
      marks: "20%",
      status: "completed",
      description:
        "First progress presentation covering literature review and initial development",
    },
    progress2: {
      title: "Progress Presentation-2",
      date: "August 15, 2024",
      marks: "25%",
      status: "in-progress",
      description:
        "Second progress presentation with system implementation and testing results",
    },
    final: {
      title: "Final Assessment",
      date: "November 30, 2024",
      marks: "30%",
      status: "pending",
      description:
        "Final project assessment including complete system demonstration",
    },
    viva: {
      title: "Viva Voce",
      date: "December 15, 2024",
      marks: "10%",
      status: "pending",
      description: "Oral examination and project defense",
    },
  };

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
                complex insurance workflows including claims processing,
                underwriting, customer service, and compliance management. Our
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
                className='border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300'
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
                      LLM Applications in Enterprise
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
                      Multi-Agent System Architectures
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-slate-600'>
                      Review of collaborative agent architectures, coordination
                      mechanisms, and their application in insurance domain task
                      automation and real-time decision-making.
                    </p>
                  </CardContent>
                </Card>

                <Card className='border-l-4 border-l-green-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <CardHeader>
                    <CardTitle className='flex items-center text-green-600'>
                      <Car className='w-5 h-5 mr-2' />
                      Insurance Industry Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-slate-600'>
                      Current state of automation in motor insurance industry,
                      including claims processing, underwriting, customer
                      service workflows, and regulatory compliance requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className='border-l-4 border-l-orange-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <CardHeader>
                    <CardTitle className='flex items-center text-orange-600'>
                      <Zap className='w-5 h-5 mr-2' />
                      Workflow Optimization Techniques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-slate-600'>
                      Studies on intelligent workflow optimization, process
                      automation techniques, and their impact on operational
                      efficiency in complex business environments.
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
                      Limited integration between LLM capabilities and
                      multi-agent coordination in specialized insurance
                      workflows and compliance requirements.
                    </p>
                  </div>
                  <div className='text-center'>
                    <Badge variant='destructive' className='mb-4'>
                      Domain Specificity
                    </Badge>
                    <p className='text-slate-700'>
                      Lack of specialized solutions for motor insurance task
                      automation that address industry-specific regulations and
                      business processes.
                    </p>
                  </div>
                  <div className='text-center'>
                    <Badge variant='destructive' className='mb-4'>
                      Scalability Issues
                    </Badge>
                    <p className='text-slate-700'>
                      Current systems struggle with enterprise-scale deployment,
                      real-time decision making, and adaptive learning
                      capabilities.
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
                    coordination between different system components, manual
                    processing inefficiencies, and limited adaptability to
                    changing business requirements and regulatory compliance.
                    Current automation solutions fail to provide the level of
                    intelligence and coordination required for comprehensive
                    workplace task automation in insurance operations.
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
                  "Design and develop a scalable multi-agent architecture optimized for LLM integration in motor insurance workflows",
                  "Implement intelligent task automation for claims processing, underwriting, and customer service operations",
                  "Create seamless integration capabilities with existing insurance management systems and databases",
                  "Achieve significant improvements in processing time, accuracy, and operational efficiency metrics",
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
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[
                  {
                    category: "Large Language Models",
                    icon: Brain,
                    technologies: [
                      "GPT-4",
                      "Claude",
                      "LLaMA",
                      "Custom Fine-tuning",
                    ],
                  },
                  {
                    category: "Multi-Agent Frameworks",
                    icon: Network,
                    technologies: [
                      "LangChain",
                      "AutoGen",
                      "CrewAI",
                      "Custom Agents",
                    ],
                  },
                  {
                    category: "Backend Technologies",
                    icon: Settings,
                    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"],
                  },
                  {
                    category: "Cloud Infrastructure",
                    icon: Zap,
                    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
                  },
                  {
                    category: "Insurance Integration",
                    icon: Car,
                    technologies: [
                      "REST APIs",
                      "SOAP Services",
                      "EDI",
                      "Custom Connectors",
                    ],
                  },
                  {
                    category: "Monitoring & Analytics",
                    icon: Target,
                    technologies: [
                      "Prometheus",
                      "Grafana",
                      "ELK Stack",
                      "Custom Dashboards",
                    ],
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
                        .status === "in-progress" ? (
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
                          ].status === "in-progress"
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
                          Status:{" "}
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
                      ) : milestone.status === "in-progress" ? (
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
                          : milestone.status === "in-progress"
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
              {[
                {
                  title: "Project Charter",
                  description:
                    "Initial project charter defining scope, objectives, and stakeholder requirements",
                  type: "PDF",
                  size: "1.2 MB",
                  date: "February 2024",
                  status: "available",
                },
                {
                  title: "Proposal Document",
                  description:
                    "Comprehensive project proposal with detailed research methodology and timeline",
                  type: "PDF",
                  size: "3.4 MB",
                  date: "March 2024",
                  status: "available",
                },
                {
                  title: "Literature Review Checklist",
                  description:
                    "Systematic checklist for literature review process and quality assurance",
                  type: "PDF",
                  size: "0.8 MB",
                  date: "April 2024",
                  status: "available",
                },
                {
                  title: "System Design Document",
                  description:
                    "Detailed system architecture and design specifications",
                  type: "PDF",
                  size: "4.1 MB",
                  date: "May 2024",
                  status: "available",
                },
                {
                  title: "Implementation Report",
                  description:
                    "Progress report on system implementation and development milestones",
                  type: "PDF",
                  size: "2.7 MB",
                  date: "July 2024",
                  status: "available",
                },
                {
                  title: "Final Document (Main)",
                  description:
                    "Complete final project documentation with all research findings",
                  type: "PDF",
                  size: "8.5 MB",
                  date: "November 2024",
                  status: "pending",
                },
                {
                  title: "Technical Appendix",
                  description:
                    "Technical appendix with code documentation and API references",
                  type: "PDF",
                  size: "3.2 MB",
                  date: "November 2024",
                  status: "pending",
                },
                {
                  title: "User Manual",
                  description:
                    "Comprehensive user guide for platform operation and maintenance",
                  type: "PDF",
                  size: "2.1 MB",
                  date: "November 2024",
                  status: "pending",
                },
              ].map((doc, index) => (
                <Card
                  key={index}
                  className='hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <CardContent className='p-6'>
                    <div className='flex items-start justify-between mb-4'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                          <FileText className='w-5 h-5 text-blue-600' />
                        </div>
                        <div>
                          <h3 className='font-semibold text-blue-900'>
                            {doc.title}
                          </h3>
                          <div className='flex items-center space-x-2 text-sm text-slate-500'>
                            <Badge variant='outline' className='text-xs'>
                              {doc.type}
                            </Badge>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className='text-right'>
                        <p className='text-sm text-slate-500 mb-2'>
                          {doc.date}
                        </p>
                        <Badge
                          variant={
                            doc.status === "available" ? "default" : "outline"
                          }
                          className='text-xs'>
                          {doc.status}
                        </Badge>
                      </div>
                    </div>
                    <p className='text-slate-600 text-sm mb-3'>
                      {doc.description}
                    </p>
                    <Button
                      size='sm'
                      variant={
                        doc.status === "available" ? "default" : "outline"
                      }
                      disabled={doc.status === "pending"}
                      className='w-full'>
                      {doc.status === "available" ? (
                        <>
                          <Download className='w-4 h-4 mr-2' />
                          Download
                        </>
                      ) : (
                        <>
                          <Clock className='w-4 h-4 mr-2' />
                          Pending
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
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
                  date: "March 20, 2024",
                  duration: "20 minutes",
                  slides: "15 slides",
                  status: "completed",
                  audience: "Academic Panel",
                },
                {
                  title: "Progress Presentation-1",
                  description:
                    "First progress presentation covering literature review and initial system design",
                  date: "May 25, 2024",
                  duration: "25 minutes",
                  slides: "22 slides",
                  status: "completed",
                  audience: "Supervisors & Peers",
                },
                {
                  title: "Progress Presentation-2",
                  description:
                    "Second progress presentation with implementation details and preliminary results",
                  date: "August 20, 2024",
                  duration: "30 minutes",
                  slides: "28 slides",
                  status: "completed",
                  audience: "Industry Experts",
                },
                {
                  title: "Final Presentation",
                  description:
                    "Comprehensive final presentation with complete system demonstration and results",
                  date: "December 5, 2024",
                  duration: "45 minutes",
                  slides: "35 slides",
                  status: "upcoming",
                  audience: "Evaluation Panel",
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
                  name: "Dr. Sarah Johnson",
                  role: "Principal Investigator",
                  email: "sarah.johnson@university.edu",
                  expertise: "AI & Machine Learning",
                  achievements: [
                    "15+ years in AI research",
                    "50+ published papers",
                    "IEEE Fellow",
                  ],
                  description:
                    "Leading expert in LLM applications with extensive experience in enterprise AI solutions",
                },
                {
                  name: "Michael Chen",
                  role: "Lead Developer",
                  email: "michael.chen@university.edu",
                  expertise: "Multi-Agent Systems",
                  achievements: [
                    "Senior Software Architect",
                    "Open Source Contributor",
                    "Tech Conference Speaker",
                  ],
                  description:
                    "Specialized in distributed systems and agent-based architectures for enterprise applications",
                },
                {
                  name: "Dr. Emily Rodriguez",
                  role: "Insurance Domain Expert",
                  email: "emily.rodriguez@university.edu",
                  expertise: "Motor Insurance Technology",
                  achievements: [
                    "20+ years in InsurTech",
                    "Industry Consultant",
                    "Patent Holder",
                  ],
                  description:
                    "Expert in insurance technology and automation with deep industry knowledge",
                },
                {
                  name: "David Kim",
                  role: "ML Engineer",
                  email: "david.kim@university.edu",
                  expertise: "LLM Fine-tuning",
                  achievements: [
                    "Google AI Researcher",
                    "Kaggle Grandmaster",
                    "ML Competition Winner",
                  ],
                  description:
                    "Expert in large language model optimization, fine-tuning, and deployment strategies",
                },
                {
                  name: "Lisa Wang",
                  role: "Research Analyst",
                  email: "lisa.wang@university.edu",
                  expertise: "Data Analysis & Research",
                  achievements: [
                    "PhD in Statistics",
                    "Research Methodology Expert",
                    "Data Science Consultant",
                  ],
                  description:
                    "Specialized in performance analysis, statistical modeling, and research methodology",
                },
                {
                  name: "James Thompson",
                  role: "Systems Architect",
                  email: "james.thompson@university.edu",
                  expertise: "Cloud Infrastructure",
                  achievements: [
                    "AWS Solutions Architect",
                    "DevOps Expert",
                    "Cloud Security Specialist",
                  ],
                  description:
                    "Expert in scalable cloud architecture, DevOps practices, and enterprise infrastructure",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className='bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2'>
                  <CardContent className='p-6'>
                    <div className='text-center mb-4'>
                      <div className='w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-4 flex items-center justify-center'>
                        <Users className='w-8 h-8 text-white' />
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
                        Key Achievements:
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
      <section id='contact' className='py-16 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6'>
                <Phone className='w-8 h-8 text-blue-600' />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-4'>
                Contact Us
              </h2>
              <p className='text-xl text-slate-600'>
                Get in touch with our research team
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Contact Information */}
              <div>
                <h3 className='text-2xl font-bold text-blue-900 mb-6'>
                  General Contact Information
                </h3>
                <div className='space-y-6'>
                  <Card className='hover:shadow-md transition-all duration-300'>
                    <CardContent className='p-6'>
                      <div className='flex items-start space-x-4'>
                        <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                          <Mail className='w-6 h-6 text-blue-600' />
                        </div>
                        <div>
                          <h4 className='font-semibold text-blue-900 mb-2'>
                            Email
                          </h4>
                          <p className='text-slate-600'>
                            llm.research@university.edu
                          </p>
                          <p className='text-slate-600'>
                            project.team@university.edu
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='hover:shadow-md transition-all duration-300'>
                    <CardContent className='p-6'>
                      <div className='flex items-start space-x-4'>
                        <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                          <Phone className='w-6 h-6 text-green-600' />
                        </div>
                        <div>
                          <h4 className='font-semibold text-blue-900 mb-2'>
                            Phone
                          </h4>
                          <p className='text-slate-600'>+1 (555) 123-4567</p>
                          <p className='text-slate-600'>+1 (555) 987-6543</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className='hover:shadow-md transition-all duration-300'>
                    <CardContent className='p-6'>
                      <div className='flex items-start space-x-4'>
                        <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                          <MapPin className='w-6 h-6 text-purple-600' />
                        </div>
                        <div>
                          <h4 className='font-semibold text-blue-900 mb-2'>
                            Address
                          </h4>
                          <p className='text-slate-600'>
                            Faculty of Computing
                            <br />
                            University Research Center
                            <br />
                            123 Innovation Drive
                            <br />
                            Tech City, TC 12345
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className='text-2xl font-bold text-blue-900 mb-6'>
                  Send us a Message
                </h3>
                <Card className='hover:shadow-lg transition-all duration-300'>
                  <CardContent className='p-6'>
                    <form className='space-y-6'>
                      <div className='grid md:grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-medium text-slate-700 mb-2'>
                            First Name
                          </label>
                          <Input placeholder='Enter your first name' />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-slate-700 mb-2'>
                            Last Name
                          </label>
                          <Input placeholder='Enter your last name' />
                        </div>
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>
                          Email
                        </label>
                        <Input
                          type='email'
                          placeholder='Enter your email address'
                        />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>
                          Subject
                        </label>
                        <Input placeholder='Enter message subject' />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-slate-700 mb-2'>
                          Message
                        </label>
                        <Textarea
                          placeholder='Enter your message here...'
                          className='min-h-[120px]'
                        />
                      </div>
                      <Button className='w-full bg-blue-900 hover:bg-blue-800 transition-all duration-300'>
                        <Mail className='w-4 h-4 mr-2' />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
                  <h4 className='font-semibold text-blue-900 mb-2'>
                    Response Time
                  </h4>
                  <p className='text-sm text-blue-700'>
                    We typically respond to inquiries within 24-48 hours during
                    business days. For urgent matters, please call our direct
                    phone line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <span>© 2024 Research Team</span>
              <span>•</span>
              <span>Faculty of Computing</span>
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
