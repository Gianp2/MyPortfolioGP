import React, { useRef, useState, useEffect } from 'react';
import { 
  Code2, 
  Database, 
  GitBranch, 
  Github, 
  Terminal, 
  Palette, 
  FileCode2, 
  Workflow,
  Server,
  HardDrive,
  Cloud,
  CheckCircle2,
  Box,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { FadeInSection } from './FadeInSection';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  bgGlow: string;
}

const TECH_ROW_1: TechItem[] = [
  {
    name: "React",
    category: "Frontend UI",
    icon: <Code2 className="w-5 h-5 text-[#61DAFB]" />,
    color: "#61DAFB",
    bgGlow: "rgba(97, 218, 251, 0.12)"
  },
  {
    name: "TypeScript",
    category: "Typed JS",
    icon: <span className="font-mono font-bold text-sm text-[#3178C6]">TS</span>,
    color: "#3178C6",
    bgGlow: "rgba(49, 120, 198, 0.12)"
  },
  {
    name: "JavaScript",
    category: "ES6+ Core",
    icon: <span className="font-mono font-bold text-sm text-[#F7DF1E]">JS</span>,
    color: "#F7DF1E",
    bgGlow: "rgba(247, 223, 30, 0.12)"
  },
  {
    name: "HTML5",
    category: "Estructura Web",
    icon: <FileCode2 className="w-5 h-5 text-[#E34F26]" />,
    color: "#E34F26",
    bgGlow: "rgba(227, 79, 38, 0.12)"
  },
  {
    name: "CSS3",
    category: "Estilos Web",
    icon: <Palette className="w-5 h-5 text-[#1572B6]" />,
    color: "#1572B6",
    bgGlow: "rgba(21, 114, 182, 0.12)"
  },
  {
    name: "Tailwind CSS",
    category: "Utility First",
    icon: <Palette className="w-5 h-5 text-[#38BDF8]" />,
    color: "#38BDF8",
    bgGlow: "rgba(56, 189, 248, 0.12)"
  },
  {
    name: "Bootstrap",
    category: "UI Framework",
    icon: <Layers className="w-5 h-5 text-[#7952B3]" />,
    color: "#7952B3",
    bgGlow: "rgba(121, 82, 179, 0.12)"
  },
  {
    name: "PHP",
    category: "Backend Engine",
    icon: <span className="font-mono font-bold text-xs text-[#777BB4]">PHP</span>,
    color: "#777BB4",
    bgGlow: "rgba(119, 123, 180, 0.12)"
  }
];

const TECH_ROW_2: TechItem[] = [
  {
    name: "Python",
    category: "Backend & Scripts",
    icon: <span className="font-mono font-bold text-xs text-[#3776AB]">PY</span>,
    color: "#3776AB",
    bgGlow: "rgba(55, 118, 171, 0.12)"
  },
  {
    name: "MySQL",
    category: "Relational DB",
    icon: <Database className="w-5 h-5 text-[#4479A1]" />,
    color: "#4479A1",
    bgGlow: "rgba(68, 121, 161, 0.12)"
  },
  {
    name: "MongoDB",
    category: "NoSQL Document",
    icon: <HardDrive className="w-5 h-5 text-[#47A248]" />,
    color: "#47A248",
    bgGlow: "rgba(71, 162, 72, 0.12)"
  },
  {
    name: "SQLite",
    category: "Embedded DB",
    icon: <Database className="w-5 h-5 text-[#003B57]" />,
    color: "#003B57",
    bgGlow: "rgba(0, 59, 87, 0.18)"
  },
  {
    name: "Firebase",
    category: "Cloud DB & Auth",
    icon: <Database className="w-5 h-5 text-[#FFCA28]" />,
    color: "#FFCA28",
    bgGlow: "rgba(255, 202, 40, 0.12)"
  },
  {
    name: "Supabase",
    category: "Postgres BaaS",
    icon: <Database className="w-5 h-5 text-[#3ECF8E]" />,
    color: "#3ECF8E",
    bgGlow: "rgba(62, 207, 142, 0.12)"
  },
  {
    name: "Git",
    category: "Version Control",
    icon: <GitBranch className="w-5 h-5 text-[#F05032]" />,
    color: "#F05032",
    bgGlow: "rgba(240, 80, 50, 0.12)"
  },
  {
    name: "GitHub",
    category: "Repositorios",
    icon: <Github className="w-5 h-5 text-white" />,
    color: "#FFFFFF",
    bgGlow: "rgba(255, 255, 255, 0.1)"
  },
  {
    name: "Vercel",
    category: "Cloud Deploy",
    icon: <Cloud className="w-5 h-5 text-[#00DF8F]" />,
    color: "#00DF8F",
    bgGlow: "rgba(0, 223, 143, 0.12)"
  },
  {
    name: "VS Code",
    category: "IDE & Editor",
    icon: <Terminal className="w-5 h-5 text-[#007ACC]" />,
    color: "#007ACC",
    bgGlow: "rgba(0, 122, 204, 0.12)"
  }
];

interface StackCategory {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  skills: { name: string; tag: string }[];
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    id: "frontend",
    badge: "01 / INTERFACES",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Frontend",
    icon: <Code2 className="w-4 h-4 text-emerald-400" />,
    summary: "Diseño y desarrollo de interfaces interactivas, responsivas y centradas en el usuario.",
    skills: [
      { name: "React", tag: "Componentes" },
      { name: "TypeScript", tag: "Tipado estricto" },
      { name: "JavaScript", tag: "ES6+" },
      { name: "Tailwind CSS", tag: "Utilidades" },
      { name: "Bootstrap", tag: "Grid & UI" },
      { name: "HTML5", tag: "Semántica" },
      { name: "CSS3", tag: "Animaciones" }
    ]
  },
  {
    id: "backend",
    badge: "02 / LÓGICA & SERVICIOS",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    title: "Backend",
    icon: <Server className="w-4 h-4 text-purple-400" />,
    summary: "Desarrollo de lógica de negocio del servidor, procesamiento y consumo de datos.",
    skills: [
      { name: "PHP", tag: "Lógica de servidor" },
      { name: "Python", tag: "Scripts & APIs" }
    ]
  },
  {
    id: "database",
    badge: "03 / PERSISTENCIA",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    title: "Bases de Datos",
    icon: <Database className="w-4 h-4 text-sky-400" />,
    summary: "Modelado, estructuración, consultas y almacenamiento seguro de datos.",
    skills: [
      { name: "MySQL", tag: "Relacional / SQL" },
      { name: "MongoDB", tag: "NoSQL / Docs" },
      { name: "SQLite", tag: "Embebida / Local" },
      { name: "Firebase", tag: "Real-time Cloud" },
      { name: "Supabase", tag: "PostgreSQL BaaS" }
    ]
  },
  {
    id: "tools",
    badge: "04 / FLUJO & DEPLOY",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    title: "Herramientas",
    icon: <Box className="w-4 h-4 text-amber-400" />,
    summary: "Control de versiones, entorno de desarrollo ágil y despliegue continuo en la nube.",
    skills: [
      { name: "Git", tag: "Control de versiones" },
      { name: "GitHub", tag: "Colaboración" },
      { name: "Vercel", tag: "Despliegue cloud" },
      { name: "VS Code", tag: "Editor principal" }
    ]
  }
];

const QUALITY_PILLARS = [
  { label: "Análisis & Resolución", desc: "Comprensión del problema antes de codificar" },
  { label: "Código Limpio & Tipado", desc: "Estructuras modulares con TypeScript" },
  { label: "Mobile-First & Adaptable", desc: "Diseños optimizados en todas las pantallas" },
  { label: "Colaboración & Entrega", desc: "Responsabilidad y aprendizaje continuo" }
];

export const Stack: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate which card is closest to the left/center
    const children = Array.from(el.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const distance = Math.abs(child.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveCardIndex(closestIndex);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scrollToCard = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children[index]) {
      const targetLeft = children[index].offsetLeft;
      el.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    const nextIndex = Math.min(activeCardIndex + 1, STACK_CATEGORIES.length - 1);
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(activeCardIndex - 1, 0);
    scrollToCard(prevIndex);
  };

  return (
    <section
      id="stack"
      className="w-full border-t border-[#222220] bg-[#0a0a0a] py-12 sm:py-20 md:py-28 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12 space-y-7 sm:space-y-12">
        {/* Section Header */}
        <FadeInSection amount={0.2}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 pb-4 sm:pb-8 border-b border-[#222220]">
            <div className="space-y-1 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:py-1 rounded-md bg-[#161615] border border-[#2a2a27] text-[10px] min-[360px]:text-[11px] font-mono uppercase tracking-widest text-[#a1a19a]">
                <span className="text-white font-bold">04</span>
                <span className="text-[#555550]">/</span>
                <span>TECNOLOGÍAS & HERRAMIENTAS</span>
              </div>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase text-white tracking-tight">
                STACK & ENTORNO
              </h2>
            </div>
            
            <p className="text-[11px] min-[360px]:text-xs sm:text-sm text-[#a1a19a] max-w-md font-sans leading-relaxed">
              Herramientas que aplico con responsabilidad y eficiencia para construir soluciones de software completas y de calidad.
            </p>
          </div>
        </FadeInSection>

        {/* Tech Icon Carousel (Infinite Marquee) */}
        <FadeInSection delay={0.1} amount={0.2} yOffset={16}>
          <div className="space-y-3 sm:space-y-4 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 overflow-hidden select-none py-1 sm:py-2">
            {/* Row 1 - Forward */}
            <div className="relative flex whitespace-nowrap overflow-x-hidden">
              <div className="flex animate-marquee space-x-3 sm:space-x-5 shrink-0 items-center">
                {Array.from({ length: 4 }).map((_, loopIdx) => (
                  <React.Fragment key={`r1-${loopIdx}`}>
                    {TECH_ROW_1.map((item, idx) => (
                      <div
                        key={`r1-${loopIdx}-${idx}`}
                        className="flex items-center gap-2.5 sm:gap-3.5 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#141413] border border-[#242422] hover:border-[#42423e] transition-all group shadow-sm hover:scale-[1.02]"
                      >
                        <div
                          className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg flex items-center justify-center shrink-0 border border-white/5"
                          style={{ backgroundColor: item.bgGlow }}
                        >
                          {item.icon}
                        </div>
                        <div className="text-left">
                          <span className="text-xs sm:text-sm font-display font-bold text-white block group-hover:text-emerald-400 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-mono text-[#8e8e88] block uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Row 2 - Reverse */}
            <div className="relative flex whitespace-nowrap overflow-x-hidden">
              <div className="flex animate-marquee-reverse space-x-3 sm:space-x-5 shrink-0 items-center">
                {Array.from({ length: 4 }).map((_, loopIdx) => (
                  <React.Fragment key={`r2-${loopIdx}`}>
                    {TECH_ROW_2.map((item, idx) => (
                      <div
                        key={`r2-${loopIdx}-${idx}`}
                        className="flex items-center gap-2.5 sm:gap-3.5 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#141413] border border-[#242422] hover:border-[#42423e] transition-all group shadow-sm hover:scale-[1.02]"
                      >
                        <div
                          className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg flex items-center justify-center shrink-0 border border-white/5"
                          style={{ backgroundColor: item.bgGlow }}
                        >
                          {item.icon}
                        </div>
                        <div className="text-left">
                          <span className="text-xs sm:text-sm font-display font-bold text-white block group-hover:text-emerald-400 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-mono text-[#8e8e88] block uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Structured 4-Category Grid on Desktop, Swipeable Carousel on Mobile & Tablets */}
        <div className="space-y-4 pt-2">
          {/* Header */}
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4d4ce] font-semibold">
                DOMINIOS TÉCNICOS
              </span>
              <span className="inline lg:hidden text-xs font-mono text-[#73736e]">
                ({activeCardIndex + 1} de {STACK_CATEGORIES.length})
              </span>
              <span className="hidden lg:inline text-xs font-mono text-[#73736e]">
                (4 CATEGORÍAS)
              </span>
            </div>

            {/* Next / Prev Controls (Visible only on mobile/tablets) */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={!canScrollLeft && activeCardIndex === 0}
                aria-label="Categoría anterior"
                className="w-8 h-8 rounded-lg bg-[#161615] border border-[#2a2a27] hover:border-[#484844] active:scale-95 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={!canScrollRight && activeCardIndex === STACK_CATEGORIES.length - 1}
                aria-label="Categoría siguiente"
                className="w-8 h-8 rounded-lg bg-[#161615] border border-[#2a2a27] hover:border-[#484844] active:scale-95 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards Container: Mobile/Tablet Carousel, Desktop 4-Col Grid */}
          <FadeInSection amount={0.2} yOffset={18}>
            <div
              ref={carouselRef}
              className="flex lg:grid lg:grid-cols-4 gap-3.5 sm:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none scroll-smooth pb-4 lg:pb-0 pt-1 -mx-3.5 sm:-mx-6 md:-mx-8 lg:mx-0 px-3.5 sm:px-6 md:px-8 lg:px-0 scrollbar-thin scrollbar-thumb-[#2a2a27] scrollbar-track-transparent lg:scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {STACK_CATEGORIES.map((category) => (
                <div
                  key={category.id}
                  className="snap-start shrink-0 w-[85%] min-[480px]:w-[70%] sm:w-[50%] md:w-[45%] lg:w-auto lg:shrink flex flex-col justify-between"
                >
                  <div className="h-full rounded-2xl bg-[#121211] border border-[#262624] hover:border-[#3d3d39] p-4 sm:p-5 flex flex-col justify-between space-y-4 transition-all shadow-lg hover:shadow-black/60 group">
                    {/* Category Header */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] min-[360px]:text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${category.badgeColor} uppercase tracking-wider`}>
                          {category.badge}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-[#181816] border border-[#2a2a27] flex items-center justify-center group-hover:border-[#444440] transition-colors">
                          {category.icon}
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight uppercase group-hover:text-emerald-400 transition-colors">
                        {category.title}
                      </h3>

                      <p className="text-xs text-[#a1a19a] leading-relaxed min-h-[36px]">
                        {category.summary}
                      </p>
                    </div>

                    {/* Skills Tag Cloud */}
                    <div className="space-y-1.5 pt-3 border-t border-[#222220]">
                      <div className="text-[10px] font-mono text-[#73736e] uppercase tracking-wider pb-1">
                        {category.skills.length} TECNOLOGÍAS
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md bg-[#181816] border border-[#282826] hover:border-[#3d3d39] transition-colors flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span className="text-xs font-mono text-[#f5f5f0]">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Indicator */}
                    <div className="pt-2 border-t border-[#20201e] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#73736e]">
                      <span>Stack verificado</span>
                      <span className="text-emerald-400 font-bold">✓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Dots Pagination (Only visible on mobile/tablets where carousel is active) */}
          <div className="flex lg:hidden items-center justify-center gap-2 pt-1 pb-2">
            {STACK_CATEGORIES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToCard(dotIdx)}
                aria-label={`Ir a categoría ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeCardIndex === dotIdx
                    ? 'w-6 h-1.5 bg-emerald-400'
                    : 'w-1.5 h-1.5 bg-[#2a2a27] hover:bg-[#484844]'
                }`}
              />
            ))}
          </div>

          {/* Development Standards Strip */}
          <FadeInSection delay={0.2} amount={0.2} yOffset={14}>
            <div className="p-3.5 sm:p-5 rounded-xl bg-[#141413] border border-[#242422] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {QUALITY_PILLARS.map((pillar, pIdx) => (
                <div key={pIdx} className="space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white">
                      {pillar.label}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#8e8e88] pl-5 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

