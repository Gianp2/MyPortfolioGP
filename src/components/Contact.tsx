import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, MessageCircle, ArrowUpRight, Copy, Check } from 'lucide-react';
import { siteConfig } from '../data/site';
import { FadeInSection } from './FadeInSection';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(siteConfig.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full border-t border-[#222220] bg-[#0a0a0a] text-white py-10 sm:py-20 md:py-28 relative overflow-hidden flex flex-col justify-center min-h-[calc(100svh-4rem)] sm:min-h-0"
    >
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12 w-full space-y-5 sm:space-y-10 my-auto">
        {/* Section Header */}
        <FadeInSection amount={0.2}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-6 pb-4 sm:pb-8 border-b border-[#222220]">
            <div className="space-y-1 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:py-1 rounded-md bg-[#161615] border border-[#2a2a27] text-[10px] min-[360px]:text-[11px] font-mono uppercase tracking-widest text-[#a1a19a]">
                <span className="text-white font-bold">05</span>
                <span className="text-[#555550]">/</span>
                <span>CONTACTO DIRECTO</span>
              </div>
              <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight uppercase leading-tight">
                {siteConfig.contact.headingLine1}{' '}
                <span className="text-[#a1a19a]">{siteConfig.contact.headingLine2}</span>
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 text-[10px] min-[360px]:text-[11px] sm:text-xs font-mono text-emerald-400 uppercase tracking-wider bg-emerald-950/20 border border-emerald-500/20 px-2.5 py-1 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DISPONIBLE PARA TRABAJAR</span>
            </div>
          </div>
        </FadeInSection>

        {/* Unified Main Content: Left Summary + Right Unified Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
          {/* Left Column: Brief Statement & Fast Copy */}
          <FadeInSection delay={0.1} amount={0.2} className="lg:col-span-5 space-y-3 sm:space-y-5">
            <p className="text-xs min-[360px]:text-sm sm:text-base text-[#d4d4ce] font-normal leading-relaxed">
              "{siteConfig.contact.subheading}"
            </p>

            {/* Quick Copy Email Banner */}
            <div className="p-3 sm:p-4 rounded-xl bg-[#121211] border border-[#242422] flex items-center justify-between gap-2 shadow-inner">
              <div className="flex items-center gap-2 min-w-0">
                <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] min-[360px]:text-xs sm:text-sm font-mono text-[#d4d4ce] truncate">
                  {siteConfig.social.email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                title="Copiar email"
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#1c1c1a] hover:bg-[#282824] border border-[#2e2e2a] text-[10px] sm:text-xs font-mono text-white flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-[#a1a19a]" />
                    <span className="text-[#a1a19a]">Copiar</span>
                  </>
                )}
              </button>
            </div>
          </FadeInSection>

          {/* Right Column: Unified Contact & Social Grid */}
          <FadeInSection delay={0.15} amount={0.2} className="lg:col-span-7 space-y-3 sm:space-y-4">
            {/* Top Primary Channels: WhatsApp & Email Direct */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {/* WhatsApp Direct */}
              {siteConfig.social.whatsapp && (
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 to-[#141413] border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/40 transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                        WHATSAPP DIRECTO
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors truncate block">
                        {siteConfig.social.whatsappUser || '+54 9 3471 417071'}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1.5" />
                </a>
              )}

              {/* Email Direct */}
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="p-3 sm:p-4 rounded-xl bg-[#141413] border border-[#282826] hover:border-white/50 hover:bg-[#181816] transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#8e8e88] font-bold block">
                      CORREO ELECTRÓNICO
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors truncate block">
                      {siteConfig.social.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8e8e88] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1.5" />
              </a>
            </div>

            {/* Bottom Channels: LinkedIn, GitHub, Instagram */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {/* LinkedIn */}
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3.5 rounded-xl bg-[#121211] border border-[#222220] hover:border-blue-500/50 hover:bg-[#161615] transition-all flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left group"
              >
                <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#8e8e88] block uppercase">LINKEDIN</span>
                    <span className="text-[11px] sm:text-xs font-medium text-white group-hover:text-blue-400 transition-colors truncate block hidden sm:block">
                      {siteConfig.social.linkedinUser}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8e8e88] group-hover:text-blue-400 transition-colors shrink-0 hidden sm:block ml-1" />
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3.5 rounded-xl bg-[#121211] border border-[#222220] hover:border-white/50 hover:bg-[#161615] transition-all flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left group"
              >
                <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Github className="w-3.5 h-3.5 text-[#d4d4ce]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#8e8e88] block uppercase">GITHUB</span>
                    <span className="text-[11px] sm:text-xs font-medium text-white group-hover:text-emerald-400 transition-colors truncate block hidden sm:block">
                      {siteConfig.social.githubUser}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8e8e88] group-hover:text-white transition-colors shrink-0 hidden sm:block ml-1" />
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3.5 rounded-xl bg-[#121211] border border-[#222220] hover:border-pink-500/50 hover:bg-[#161615] transition-all flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left group"
              >
                <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#8e8e88] block uppercase">INSTAGRAM</span>
                    <span className="text-[11px] sm:text-xs font-medium text-white group-hover:text-pink-400 transition-colors truncate block hidden sm:block">
                      {siteConfig.social.instagramUser}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8e8e88] group-hover:text-pink-400 transition-colors shrink-0 hidden sm:block ml-1" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
