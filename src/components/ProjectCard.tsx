import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  const CardWrapper = project.url ? 'a' : 'div';

  const cardProps = project.url
    ? {
        href: project.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `Explorar proyecto ${project.title}`,
      }
    : {};

  /*
   * En mobile cada tarjeta tiene un top diferente.
   * Esto genera el efecto de "stacking" al hacer scroll.
   *
   * Card 1 -> 16px
   * Card 2 -> 32px
   * Card 3 -> 48px
   * Card 4 -> 64px
   * etc.
   */
  const mobileTop = 16 + index * 16;

  /*
   * Aumentamos ligeramente el z-index de las tarjetas
   * posteriores para que la siguiente quede por encima.
   */
  const stackZIndex = 10 + index;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        zIndex: stackZIndex,
      }}
      className="
        group
        relative

        /* STACKING MOBILE */
        sticky
        bg-[#131312]
        border border-[#262624]
        hover:border-[#42423e]

        rounded-xl
        sm:rounded-3xl

        p-3.5
        sm:p-6
        md:p-8
        lg:p-9

        shadow-[0_12px_40px_rgba(0,0,0,0.95)]
        hover:shadow-[0_20px_50px_rgba(0,0,0,1)]

        transition-all
        duration-300

        block
        cursor-pointer

        /* ESPACIO PARA EL STACK */
        mb-8

        /* DESKTOP: VOLVER AL FLUJO NORMAL */
        lg:static
        lg:mb-0
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
        El top se aplica únicamente mediante CSS inline.
        En desktop sticky deja de funcionar gracias a lg:static.
      */}
      <div
        className="contents"
        style={{
          ['--mobile-top' as string]: `${mobileTop}px`,
        }}
      >
        <CardWrapper
          {...cardProps}
          className="block w-full h-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">

            {/* =========================================
                PROJECT EDITORIAL COLUMN
            ========================================== */}
            <div
              className={`
                lg:col-span-6
                flex flex-col
                justify-between
                space-y-3.5
                sm:space-y-4

                ${isEven ? 'lg:order-1' : 'lg:order-2'}
              `}
            >
              <div className="space-y-3 sm:space-y-3.5">

                {/* HEADER */}
                <div className="flex items-center justify-between border-b border-[#242422] pb-2 sm:pb-2.5">
                  <div className="flex items-center gap-2">

                    <span className="font-mono text-xs sm:text-base font-bold text-white">
                      {project.number}
                    </span>

                    <span
                      className="
                        text-[9px]
                        min-[360px]:text-[10px]
                        sm:text-xs
                        font-mono
                        uppercase
                        tracking-wider
                        text-[#8e8e88]
                        px-2
                        py-0.5
                        rounded
                        bg-[#181816]
                        border
                        border-[#282826]
                      "
                    >
                      {project.category}
                    </span>

                  </div>
                </div>

                {/* TITLE + ROLE */}
                <div className="space-y-1">

                  <h3
                    className="
                      text-base
                      min-[360px]:text-lg
                      sm:text-2xl
                      md:text-3xl
                      font-display
                      font-bold
                      uppercase
                      tracking-tight
                      text-white
                      group-hover:text-emerald-400
                      transition-colors
                      leading-tight
                    "
                  >
                    {project.title}
                  </h3>

                  {project.role && (
                    <div
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-[11px]
                        sm:text-xs
                        font-mono
                        text-[#a1a19a]
                      "
                    >
                      <span className="text-emerald-400 font-semibold">
                        Rol:
                      </span>

                      <span>
                        {project.role}
                      </span>
                    </div>
                  )}

                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[11px]
                    min-[360px]:text-xs
                    sm:text-sm
                    text-[#d4d4ce]
                    leading-relaxed
                  "
                >
                  {project.description}
                </p>

                {/* KEY HIGHLIGHTS */}
                {project.highlights &&
                  project.highlights.length > 0 && (
                    <div
                      className="
                        space-y-1.5
                        pt-1.5
                        border-t
                        border-[#20201e]
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          font-mono
                          uppercase
                          tracking-wider
                          text-[#8e8e88]
                          block
                        "
                      >
                        Puntos clave:
                      </span>

                      <ul className="space-y-1 sm:space-y-1.5">

                        {project.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="
                              flex
                              items-start
                              gap-1.5
                              sm:gap-2
                              text-[11px]
                              sm:text-xs
                              text-[#b5b5ad]
                              leading-relaxed
                            "
                          >
                            <span
                              className="
                                text-emerald-400
                                font-mono
                                text-[10px]
                                leading-tight
                                shrink-0
                                mt-0.5
                              "
                            >
                              ✦
                            </span>

                            <span>
                              {item}
                            </span>
                          </li>
                        ))}

                      </ul>
                    </div>
                  )}

                {/* IMPACT */}
                {project.impact && (
                  <div
                    className="
                      px-2.5
                      py-1.5
                      sm:px-3
                      sm:py-2
                      rounded-lg
                      bg-emerald-500/10
                      border
                      border-emerald-500/20
                      text-[11px]
                      sm:text-xs
                      font-mono
                      text-[#e5e5e0]
                      flex
                      items-start
                      gap-1.5
                      sm:gap-2
                    "
                  >
                    <span className="text-emerald-400 font-bold shrink-0">
                      Impacto:
                    </span>

                    <span className="leading-snug text-[#d4d4ce]">
                      {project.impact}
                    </span>
                  </div>
                )}

              </div>
            </div>

            {/* =========================================
                PROJECT MOCKUP COLUMN
            ========================================== */}
            <div
              className={`
                lg:col-span-6

                ${isEven
                  ? 'lg:order-2'
                  : 'lg:order-1'
                }
              `}
            >
              <div
                className="
                  h-44
                  min-[380px]:h-52
                  min-[480px]:h-60
                  sm:h-72
                  md:h-80
                  lg:h-full
                  lg:min-h-[340px]

                  rounded-lg
                  sm:rounded-2xl

                  overflow-hidden

                  border
                  border-[#262624]

                  group-hover:border-[#4f4f49]

                  transition-all
                  duration-300

                  shadow-md
                "
              >
                <ProjectMockup
                  project={project}
                  isHovered={isHovered}
                />
              </div>
            </div>

          </div>
        </CardWrapper>
      </div>
    </motion.article>
  );
};