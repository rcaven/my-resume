import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';
import {
  selectedWork,
  selectedWorkIntro,
  selectedWorkDisclaimer,
} from '../data/selectedWork';

// Accent classes are written out in full so Tailwind's scanner can see them.
// Keys match the colors used by the Professional Experience cards.
//
// Light and dark shades are split deliberately: the mid-500 shades the résumé
// cards use fall below 4.5:1 against both the dark slate and light surfaces at
// the small sizes used here, so each mode gets a shade that clears it.
const accents = {
  blue: {
    rule: 'bg-blue-500',
    textLight: 'text-blue-600',
    textDark: 'text-blue-400',
    hoverLight: 'group-hover:text-blue-600',
    hoverDark: 'group-hover:text-blue-400',
    ring: 'ring-blue-500',
    tagLight: 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    tagDark: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  },
  purple: {
    rule: 'bg-purple-500',
    textLight: 'text-purple-600',
    textDark: 'text-purple-400',
    hoverLight: 'group-hover:text-purple-600',
    hoverDark: 'group-hover:text-purple-400',
    ring: 'ring-purple-500',
    tagLight: 'bg-purple-500/10 text-purple-700 border-purple-500/30',
    tagDark: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  },
  green: {
    rule: 'bg-green-500',
    textLight: 'text-green-700',
    textDark: 'text-green-400',
    hoverLight: 'group-hover:text-green-700',
    hoverDark: 'group-hover:text-green-400',
    ring: 'ring-green-500',
    tagLight: 'bg-green-500/10 text-green-700 border-green-500/30',
    tagDark: 'bg-green-500/10 text-green-300 border-green-500/30',
  },
};

const COLLAPSED_TAG_COUNT = 5;

function ProjectCard({
  project,
  darkMode,
  textPrimary,
  textSecondary,
  borderColor,
  isOpen,
  onToggle,
}) {
  const reduceMotion = useReducedMotion();
  const accent = accents[project.color];
  const detailId = `selected-work-detail-${project.id}`;
  const headingId = `selected-work-title-${project.id}`;

  const visibleTags = isOpen
    ? project.tags
    : project.tags.slice(0, COLLAPSED_TAG_COUNT);
  const hiddenTagCount = project.tags.length - visibleTags.length;

  const surface = darkMode ? 'bg-slate-800/40' : 'bg-white';
  const insetSurface = darkMode ? 'bg-slate-900/40' : 'bg-gray-50';
  const ringOffset = darkMode ? 'ring-offset-slate-900' : 'ring-offset-white';
  const tagClass = darkMode ? accent.tagDark : accent.tagLight;
  const linkHover = darkMode ? 'hover:text-white' : 'hover:text-gray-900';
  const accentText = darkMode ? accent.textDark : accent.textLight;
  const accentHover = darkMode ? accent.hoverDark : accent.hoverLight;

  return (
    <article
      aria-labelledby={headingId}
      className={`group relative overflow-hidden rounded-2xl border ${borderColor} ${surface} transition-shadow duration-200 hover:shadow-xl`}
    >
      {/* Accent rule keeps company identity without using logos */}
      <div className={`absolute inset-y-0 left-0 w-1 ${accent.rule}`} aria-hidden="true" />

      <div className="p-5 pl-6 sm:p-6 sm:pl-8">
        <p className={`text-xs font-semibold uppercase tracking-wider ${accentText}`}>
          {project.company}
        </p>
        <h3
          id={headingId}
          className={`mt-2 text-lg font-bold sm:text-xl ${textPrimary} ${accentHover} transition-colors`}
        >
          {project.title}
        </h3>
        <p className={`mt-1 text-sm font-medium ${textSecondary}`}>{project.role}</p>

        <p className={`mt-3 max-w-3xl text-sm leading-relaxed ${textSecondary}`}>
          {project.overview}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies and capabilities for ${project.company}`}>
          {visibleTags.map((tag) => (
            <li
              key={tag}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${tagClass}`}
            >
              {tag}
            </li>
          ))}
          {hiddenTagCount > 0 && (
            <li className={`rounded-full border px-3 py-1 text-xs font-medium ${borderColor} ${textSecondary}`}>
              +{hiddenTagCount} more
            </li>
          )}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={detailId}
            className={`inline-flex items-center gap-2 rounded-lg text-sm font-semibold ${accentText} transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${accent.ring} ${ringOffset}`}
          >
            {isOpen ? 'Hide case study' : 'Read case study'}
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="inline-flex"
              aria-hidden="true"
            >
              <FiChevronDown size={16} />
            </motion.span>
          </button>

          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-lg text-sm font-medium underline underline-offset-4 transition-colors ${textSecondary} ${linkHover} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${accent.ring} ${ringOffset}`}
          >
            {project.link.label}
            <FiExternalLink size={14} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={detailId}
            key="detail"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`mb-5 ml-6 mr-5 border-t ${borderColor} pt-5 sm:mb-6 sm:ml-8 sm:mr-6`}>
              <h4 className={`text-sm font-bold uppercase tracking-wide ${textSecondary}`}>
                Contributions
              </h4>
              <ul className="mt-3 space-y-2">
                {project.contributions.map((item) => (
                  <li key={item} className={`flex gap-3 text-sm leading-relaxed ${textSecondary}`}>
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.rule}`} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {project.phases && (
                <>
                  <h4 className={`mt-6 text-sm font-bold uppercase tracking-wide ${textSecondary}`}>
                    Phased office-page model
                  </h4>
                  {project.phasesIntro && (
                    <p className={`mt-2 max-w-3xl text-sm leading-relaxed ${textSecondary}`}>
                      {project.phasesIntro}
                    </p>
                  )}
                  <ol className="mt-3 grid gap-3 sm:grid-cols-3">
                    {project.phases.map((phase) => (
                      <li key={phase.label} className={`rounded-xl p-4 ${insetSurface}`}>
                        <p className={`text-sm font-semibold ${accentText}`}>{phase.label}</p>
                        <p className={`mt-1 text-xs leading-relaxed ${textSecondary}`}>
                          {phase.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                </>
              )}

              <div className={`mt-6 rounded-xl p-4 ${insetSurface}`}>
                <h4 className={`text-sm font-bold uppercase tracking-wide ${accentText}`}>
                  Impact
                </h4>
                <p className={`mt-2 text-sm leading-relaxed ${textSecondary}`}>{project.impact}</p>
              </div>

              {project.scopeNote && (
                <p className={`mt-4 text-xs italic leading-relaxed ${textSecondary}`}>
                  {project.scopeNote}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function SelectedWork({ darkMode, textPrimary, textSecondary, borderColor }) {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <div className="mb-6 max-w-3xl">
        <h2 id="selected-work-heading" className={`text-3xl font-bold ${textPrimary}`}>
          Selected Work
        </h2>
        <p className={`mt-3 text-sm leading-relaxed sm:text-base ${textSecondary}`}>
          {selectedWorkIntro}
        </p>
        <p className={`mt-3 text-xs leading-relaxed ${textSecondary}`}>
          {selectedWorkDisclaimer}
        </p>
      </div>

      <div className="space-y-4 md:space-y-5">
        {selectedWork.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            darkMode={darkMode}
            textPrimary={textPrimary}
            textSecondary={textSecondary}
            borderColor={borderColor}
            isOpen={openId === project.id}
            onToggle={() => setOpenId(openId === project.id ? null : project.id)}
          />
        ))}
      </div>
    </>
  );
}

export default SelectedWork;
