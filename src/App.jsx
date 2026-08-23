import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import profilePic from './assets/profilePic.jpg';
import SelectedWork from './components/SelectedWork';

ChartJS.register(ArcElement, Tooltip, Legend);

// Experience data
const experiences = [
    {
      id: 'blueland',
      color: 'green',
      date: 'March 2026 – August 2026',
      title: 'Technical Lead',
      company: 'Blueland',
      location: 'Remote',
      shortDescription:
        'Led technical strategy and delivery for a headless Shopify platform spanning commerce, content, subscriptions, analytics, privacy, and production reliability.',
      achievements: [
        'Led technical strategy and delivery for Blueland’s headless Shopify platform across commerce, content, subscriptions, analytics, privacy, and production support',
        'Partnered with Product, Marketing, Analytics, Legal, Design, and Engineering to translate business needs into scalable, measurable web experiences',
        'Extended a 50,000-error monthly Sentry quota that had previously been exhausted in roughly three days to last the full month through targeted production-error triage',
        'Drove technical discovery, estimation, backlog refinement, sprint planning, release coordination, vendor management, and cross-functional launches'
      ],
      delay: 0.5
    },
    {
      id: 'aws',
      color: 'blue',
      date: 'March 2024 – March 2026',
      title: 'Front End Engineer',
      company: 'Amazon Web Services',
      location: 'San Francisco, CA',
      shortDescription:
        'Built and maintained reusable React and Next.js experiences supporting high-visibility AWS marketing and product pages.',
        achievements: [
          'Developed scalable, accessible web experiences for AWS.com as part of a seven-person engineering team supporting high-traffic global platforms',
          'Built reusable React and TypeScript component systems across more than 20 global pages, reducing load times by 30%',
          'Owned an internal documentation platform serving more than 500 employees and improving content accessibility and developer productivity',
          'Partnered with Marketing, Design, and Brand teams to improve performance, accessibility, localization, and production reliability'
        ],
      delay: 0.6
    },
    {
      id: 'onemedical',
      color: 'purple',
      date: '2021 – 2024',
      title: 'Engineering Manager, Web',
      company: 'One Medical, an Amazon company',
      location: 'San Francisco, CA',
      shortDescription:
        'Managed a web development team and led enterprise website, CMS, publishing, and cross-functional platform initiatives.',
        achievements: [
          'Managed a team of engineers and established standards for code quality, documentation, release management, and professional development',
          'Architected a modular, headless-ready CMS that reduced publishing time by 40% and enabled non-technical teams to launch localized content',
          'Led web development initiatives through Amazon’s acquisition of One Medical while maintaining platform stability across patient-facing and marketing websites',
          'Led SEO, accessibility, performance, and digital-governance initiatives across One Medical’s web properties'
        ],
      delay: 0.7
    },
    {
      id: 'eandm',
      color: 'cyan',
      date: '2017 – 2021',
      title: 'Lead Front End Engineer / Interim Web Manager',
      company: 'EandM Electric',
      location: 'Healdsburg, CA',
      shortDescription:
        'Led frontend development and web operations for e-commerce, internal platforms, and digital infrastructure initiatives.',
      achievements: [
        'Directed modernization initiatives across CRM, ERP, e-commerce, and internal systems used by more than 100 employees',
        'Led onboarding and technical training programs that improved system adoption and workflow consistency',
        'Managed an intranet redesign from user research through deployment, integrating HR, sales, and operational systems',
        'Coordinated cross-functional planning, development, testing, and launch activities while serving as Interim Web Manager'
      ],
      delay: 0.8
    },
    {
      id: 'pbhs',
      color: 'orange',
      date: '2014 – 2017',
      title: 'WordPress Engineer / Technical Support Specialist',
      company: 'PBHS',
      location: 'Santa Rosa, CA',
      shortDescription:
        'Promoted from technical support into frontend development, building and maintaining custom WordPress websites for healthcare clients.',
      achievements: [
        'Earned promotion from Technical Support Specialist to Front End Developer based on technical performance and client service',
        'Built and maintained custom WordPress websites for dental and healthcare organizations',
        'Implemented responsive and accessible frontend experiences within HIPAA-conscious hosting environments',
        'Managed WordPress updates, security patches, troubleshooting, and ongoing backend maintenance'
      ],
      delay: 0.9
    }
  ];

// Experience Section Component
function ExperienceSection({ darkMode, textPrimary, textSecondary }) {
  const [openModalId, setOpenModalId] = useState(null);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          {...experience}
          darkMode={darkMode}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
          isModalOpen={openModalId === experience.id}
          onOpenModal={() => setOpenModalId(experience.id)}
          onCloseModal={() => setOpenModalId(null)}
        />
      ))}
    </div>
  );
}

// Experience Card Component
function ExperienceCard({
  darkMode,
  textPrimary,
  textSecondary,
  color,
  date,
  title,
  company,
  location,
  shortDescription,
  achievements,
  delay,
  isModalOpen,
  onOpenModal,
  onCloseModal
}) {
  const colorClasses = {
    blue: {
      border: 'border-blue-500',
      bg: darkMode ? 'bg-slate-800/50' : 'bg-blue-50',
      dot: 'bg-blue-500',
      text: 'text-blue-500',
      hoverText: 'group-hover:text-blue-500',
      gradient: 'from-blue-500 to-blue-600',
      ring: 'ring-blue-500'
    },
    purple: {
      border: 'border-purple-500',
      bg: darkMode ? 'bg-slate-800/50' : 'bg-purple-50',
      dot: 'bg-purple-500',
      text: 'text-purple-500',
      hoverText: 'group-hover:text-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      ring: 'ring-purple-500'
    },
    cyan: {
      border: 'border-cyan-500',
      bg: darkMode ? 'bg-slate-800/50' : 'bg-cyan-50',
      dot: 'bg-cyan-500',
      text: 'text-cyan-500',
      hoverText: 'group-hover:text-cyan-500',
      gradient: 'from-cyan-500 to-cyan-600',
      ring: 'ring-cyan-500'
    },
    orange: {
      border: 'border-orange-500',
      bg: darkMode ? 'bg-slate-800/50' : 'bg-orange-50',
      dot: 'bg-orange-500',
      text: 'text-orange-500',
      hoverText: 'group-hover:text-orange-500',
      gradient: 'from-orange-500 to-orange-600',
      ring: 'ring-orange-500'
    },
    green: {
      border: 'border-green-500',
      bg: darkMode ? 'bg-slate-800/50' : 'bg-green-50',
      dot: 'bg-green-500',
      text: 'text-green-500',
      hoverText: 'group-hover:text-green-500',
      gradient: 'from-green-500 to-green-600',
      ring: 'ring-green-500'
    }
  };

  const colors = colorClasses[color];
  
  return (
    <>
      <motion.button
        type="button"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        onClick={onOpenModal}
        aria-label={`View details for ${title} at ${company}`}
        className={`w-full text-left border-l-4 ${colors.border} pl-6 relative ${colors.bg} p-6 rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${colors.ring} ${darkMode ? 'ring-offset-slate-900' : 'ring-offset-white'}`}
      >
        <div className={`absolute left-0 top-6 w-3 h-3 ${colors.dot} rounded-full -translate-x-[8.5px]`} />
        
        <p className={`text-xs ${textSecondary} mb-2`}>{date}</p>
        <h3 className={`text-xl font-bold ${textPrimary} mb-1 ${colors.hoverText} transition`}>{title}</h3>
        <p className={`${colors.text} font-medium mb-1`}>{company}</p>
        <p className={`text-xs ${textSecondary} mb-3 italic`}>{location}</p>
        <p className={`${textSecondary} text-sm line-clamp-2`}>
          {shortDescription}
        </p>
        
        <div className={`mt-3 ${colors.text} text-sm font-medium flex items-center gap-2`}>
          <span>View Details</span>
          <span>→</span>
        </div>
      </motion.button>

      {/* Modal */}
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        darkMode={darkMode}
        textPrimary={textPrimary}
        textSecondary={textSecondary}
        color={color}
        date={date}
        title={title}
        company={company}
        location={location}
        achievements={achievements}
      />
    </>
  );
}

// Experience Modal Component
function ExperienceModal({ isOpen, onClose, darkMode, textPrimary, textSecondary, color, date, title, company, location, achievements }) {
  
  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      check: 'text-blue-500',
      button: 'from-blue-500 to-blue-600'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      check: 'text-purple-500',
      button: 'from-purple-500 to-purple-600'
    },
    cyan: {
      gradient: 'from-cyan-500 to-cyan-600',
      check: 'text-cyan-500',
      button: 'from-cyan-500 to-cyan-600'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-600',
      check: 'text-orange-500',
      button: 'from-orange-500 to-orange-600'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      check: 'text-green-500',
      button: 'from-green-500 to-green-600'
    }
  };

  const colors = colorClasses[color];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Covers entire page */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal - Fixed position, always centered in viewport */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`experience-title-${company.replace(/\s+/g, '-').toLowerCase()}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative w-full max-w-3xl max-h-[85vh] overflow-y-auto pointer-events-auto ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              } rounded-2xl shadow-2xl border ${
                darkMode ? 'border-slate-700' : 'border-gray-200'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient */}
              <div className={`sticky top-0 bg-gradient-to-r ${colors.gradient} p-8 rounded-t-2xl z-10`}>
                <div className="flex justify-between items-start">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-white/80 mb-2"
                    >
                      {date}
                    </motion.p>
                    <motion.h2
                      id={`experience-title-${company.replace(/\s+/g, '-').toLowerCase()}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl text-white/90 mb-1"
                    >
                      {company}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-white/70"
                    >
                      📍 {location}
                    </motion.p>
                  </div>
                  
                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    aria-label="Close experience details"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition"
                  >
                    ✕
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`text-xl font-bold ${textPrimary} mb-4`}
                >
                  Key Responsibilities & Achievements
                </motion.h3>
                
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className={`flex items-start gap-4 ${textSecondary} text-base leading-relaxed p-4 rounded-lg ${
                        darkMode ? 'bg-slate-700/30' : 'bg-gray-50'
                      } hover:shadow-md transition-all`}
                    >
                      <span className={`${colors.check} text-xl flex-shrink-0 mt-1`}>✓</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700"
                >
                  <button
                    onClick={onClose}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${colors.button} text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105`}
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Theme colors
  const bgClass = darkMode 
  ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
  : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50';
  
  const cardBg = darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-gray-50';
  const borderColor = darkMode ? 'border-slate-700' : 'border-gray-200';
  const textPrimary = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = darkMode ? 'text-slate-400' : 'text-gray-600';
  const textAccent = darkMode ? 'text-blue-400' : 'text-blue-600';

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(timer);
  }, []);

  // Mouse tracking for particle effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Engineering Focus Areas
  const focusAreas = [
    {
      name: 'Web Engineering & Architecture',
      percentage: 25,
      description:
        'Designing scalable, maintainable web platforms that support content, commerce, marketing, and product experiences.',
      toolsLabel: 'Technologies',  
      tools:
        'React, Next.js, TypeScript, JavaScript, Shopify Hydrogen, Node.js, APIs, Testing Frameworks'
    },
    {
      name: 'Engineering Leadership',
      percentage: 25,
      description:
        'Leading teams and cross-functional initiatives from technical discovery and planning through launch and production support.',
      toolsLabel: 'Capabilities',  
      tools:
        'Technical Strategy, Roadmap Planning, Agile Delivery, Mentoring, Jira, GitHub, Stakeholder Management'
    },
    {
      name: 'Platforms & Integrations',
      percentage: 25,
      description:
        'Connecting content, commerce, analytics, subscription, and third-party systems into cohesive digital platforms.',
      toolsLabel: 'Platforms',  
      tools:
        'AEM, Pack CMS, Shopify, Recharge, WordPress, GA4, Google Tag Manager, REST APIs'
    },
    {
      name: 'Performance & Governance',
      percentage: 25,
      description:
        'Improving website speed, stability, accessibility, observability, privacy compliance, and long-term maintainability.',
      toolsLabel: 'Practices & Tools',  
      tools:
        'Core Web Vitals, Lighthouse, Sentry, Accessibility Testing, Consent Management, SEO, CI/CD'
    }
  ];

  const skillsData = {
    labels: focusAreas.map(area => area.name),
    datasets: [
      {
        data: focusAreas.map(area => area.percentage),
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: darkMode ? 'rgba(30, 41, 59, 1)' : 'rgba(255, 255, 255, 1)',
        borderWidth: 2,
        hoverOffset: 15,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: darkMode ? '#e2e8f0' : '#334155',
          padding: 15,
          font: { size: 15 },
          boxWidth: 15,
        }
      },
      tooltip: {
        enabled: false,
        external: function(context) {
          let tooltipEl = document.getElementById('chartjs-tooltip');

          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.transition = 'all 0.2s ease';
            tooltipEl.style.zIndex = 10;
            document.body.appendChild(tooltipEl);
          }

          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          if (tooltipModel.body) {
            const dataIndex = tooltipModel.dataPoints[0].dataIndex;
            const area = focusAreas[dataIndex];

            const innerHTML = `
              <div style="
                background: ${darkMode ? 'rgba(30, 41, 59, 0.98)' : 'rgba(255, 255, 255, 0.98)'};
                color: ${darkMode ? '#e2e8f0' : '#1e293b'};
                border: 1px solid ${darkMode ? '#475569' : '#cbd5e1'};
                border-radius: 12px;
                padding: 16px 20px;
                max-width: 400px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                font-family: system-ui, -apple-system, sans-serif;
              ">
                <div style="
                  font-size: 15px;
                  font-weight: bold;
                  margin-bottom: 8px;
                  color: ${darkMode ? '#e2e8f0' : '#1e293b'};
                ">
                  ${area.name}
                </div>
                <div style="
                  font-size: 13px;
                  line-height: 1.6;
                  color: ${darkMode ? '#cbd5e1' : '#475569'};
                  margin-bottom: 12px;
                ">
                  ${area.description}
                </div>
                <div style="
                  font-size: 12px;
                  font-weight: 600;
                  color: ${darkMode ? '#94a3b8' : '#64748b'};
                  margin-bottom: 6px;
                  margin-top: 12px;
                  border-top: 1px solid ${darkMode ? '#334155' : '#e2e8f0'};
                  padding-top: 12px;
                ">
                  ${area.toolsLabel}:
                </div>
                <div style="
                  font-size: 12px;
                  line-height: 1.6;
                  color: ${darkMode ? '#cbd5e1' : '#64748b'};
                ">
                  ${area.tools}
                </div>
              </div>
            `;

            tooltipEl.innerHTML = innerHTML;
          }

          const position = context.chart.canvas.getBoundingClientRect();

          tooltipEl.style.opacity = 1;
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        }
      }
    },
    maintainAspectRatio: true,
    responsive: true,
    interaction: {
      mode: 'nearest',
      intersect: true
    },
    onHover: (event, activeElements) => {
      event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
    }
  };

  const coreSkills = [
    'Technical Strategy',
    'Engineering Leadership',
    'Frontend Architecture',
    'React / Next.js',
    'TypeScript',
    'Shopify Hydrogen',
    'AEM / Headless CMS',
    'Web Performance',
    'Accessibility & SEO',
    'Analytics & Tagging',
    'Observability',
    'Stakeholder Management',
    'Mentoring'
  ];

  // Loading Screen
  if (loading) {
    return (
      <div className={`min-h-screen ${bgClass} flex items-center justify-center`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-2xl font-bold ${textPrimary}`}
          >
            Loading Portfolio...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgClass} p-4 md:p-8 relative overflow-hidden transition-colors duration-500`}>
      
      {/* Particle Effect - Subtle */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-purple-500'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: (mousePosition.x - window.innerWidth / 2) / 100,
              y: (mousePosition.y - window.innerHeight / 2) / 100,
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Dark/Light Mode Toggle */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        className={`fixed top-8 right-8 z-50 p-4 rounded-full ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border shadow-lg ${textPrimary} hover:shadow-xl transition-all`}
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </motion.button>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Navigation */}
        <nav
          aria-label="Section navigation"
          className="mb-4 md:mb-6 flex flex-wrap items-center gap-2 pr-20 md:pr-24"
        >
          {[
            { label: 'Profile', href: '#profile' },
            { label: 'Experience', href: '#experience' },
            { label: 'Selected Work', href: '#selected-work' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${darkMode ? 'bg-slate-800/60 border-slate-700 ring-offset-slate-900 hover:bg-slate-700' : 'bg-white/70 border-gray-200 ring-offset-white hover:bg-white'} ${textPrimary} backdrop-blur-sm shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-blue-500`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Profile Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
            id="profile"
            className={`lg:col-span-1 lg:row-span-2 scroll-mt-24 bg-gradient-to-br ${cardBg} rounded-3xl p-8 shadow-2xl border ${borderColor} transition-all duration-300`}
          >
            <motion.div 
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-32 h-32 mx-auto mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse opacity-75"></div>
              <img 
                src={profilePic}
                alt="Ryan Caven" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
              />
            </motion.div>
            <div className="text-center mb-6">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-3xl font-bold ${textPrimary} mb-2`}
              >
                Ryan Caven
              </motion.h1>
              <p className={`${textSecondary} mb-1`}>Web Engineering Leader</p>
              <p className={`${textAccent} text-sm`}>Engineering Leadership • Web Platforms • Digital Experience</p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 text-sm"
            >
              {[
                { icon: '📍', text: 'Bay Area, CA', link: null },
                { icon: '📧', text: 'ryancaven21@gmail.com', link: 'mailto:ryancaven21@gmail.com' },
                { icon: '💼', text: 'linkedin.com/in/rcaven', link: 'https://linkedin.com/in/rcaven' },
                { icon: '💻', text: 'github.com/rcaven', link: 'https://github.com/rcaven' },
                { icon: '📄', text: 'PDF résumé available upon request', link: null },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-3 ${textSecondary} ${darkMode ? 'bg-slate-800/50' : 'bg-gray-100'} p-3 rounded-lg ${
                    item.highlight ? 'border-2 border-blue-500/30' : ''
                  }`}
                >
                  <span className={item.highlight ? 'text-blue-500' : 'text-blue-500'}>{item.icon}</span>
                  {item.link ? (
                    <a href={item.link} className={`flex-1 hover:${textAccent} transition text-xs`} target={item.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                      {item.text}
                    </a>
                  ) : (
                    <span className={`flex-1 text-xs ${item.highlight ? 'font-medium italic' : ''}`}>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* About Me Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden group"
          >
            <motion.div 
              className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"
            />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Professional Profile</h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-blue-50 leading-relaxed"
              >
               Web engineering leader with 10+ years of experience building and operating high-impact digital platforms across commerce, marketing, healthcare, and cloud technology. I combine hands-on technical expertise with engineering leadership, translating business needs into scalable, accessible, and reliable web experiences. My background includes React, Next.js, TypeScript, headless commerce, enterprise CMS platforms, analytics, performance, and cross-functional delivery.
               <br/>
               <br/>
               Focused on building web platforms that are reliable in production, maintainable over time, and effective for the teams and customers who use them.
              </motion.p>
            </div>
          </motion.div>

          {/* Interactive Focus Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className={`lg:col-span-1 bg-gradient-to-br ${cardBg} rounded-3xl p-6 shadow-2xl border ${borderColor}`}
          >
            <h3 className={`text-xl font-bold ${textPrimary} mb-4 text-center`}>Areas of Expertise</h3>
            <div className="w-full max-w-xs mx-auto">
              <Doughnut data={skillsData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="lg:col-span-1 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline - Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -2 }}
            id="experience"
            className={`lg:col-span-3 scroll-mt-24 bg-gradient-to-br ${cardBg} rounded-3xl p-8 shadow-2xl border ${borderColor}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-3xl font-bold ${textPrimary}`}>Professional Experience</h2>
              <p className={`text-sm ${textSecondary}`}>Click to view details</p>
            </div>

            <ExperienceSection darkMode={darkMode} textPrimary={textPrimary} textSecondary={textSecondary} />
          </motion.div>

          {/* Selected Work */}
          <motion.section
            id="selected-work"
            aria-labelledby="selected-work-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`lg:col-span-3 scroll-mt-24 bg-gradient-to-br ${cardBg} rounded-3xl p-6 md:p-8 shadow-2xl border ${borderColor}`}
          >
            <SelectedWork
              darkMode={darkMode}
              textPrimary={textPrimary}
              textSecondary={textSecondary}
              borderColor={borderColor}
            />
          </motion.section>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -2 }}
            className={`lg:col-span-3 bg-gradient-to-br ${cardBg} rounded-3xl p-8 shadow-2xl border ${borderColor}`}
          >
            <h2 className={`text-2xl font-bold ${textPrimary} mb-6`}>Tools & Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { name: 'GitHub', icon: '📦' },
                { name: 'Jira', icon: '📊' },
                { name: 'Figma', icon: '🎨' },
                { name: 'HubSpot', icon: '🚀' },
                { name: 'AEM', icon: '📝' },
                { name: 'WordPress', icon: '📰' },
                { name: 'AWS', icon: '☁️' },
              ].map((tool) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.05, delay: 0.01 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className={`${darkMode ? 'bg-slate-800/50' : 'bg-gray-100'} p-4 rounded-xl text-center hover:shadow-lg transition`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-3xl mb-2"
                  >
                    {tool.icon}
                  </motion.div>
                  <div className={`${textSecondary} text-xs font-medium`}>{tool.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className={`lg:col-span-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 text-9xl text-white/10 font-serif">"</div>
            <h2 className="text-2xl font-bold text-white mb-6">What People Say</h2>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl"
              >
                <p className="text-white/90 text-sm mb-3 italic">
                "Ryan combines exceptional technical skill with empathy and adaptability rarely seen in engineering. He consistently delivers beyond expectations, communicates across disciplines with clarity, and thrives under pressure. His curiosity, strategic mindset, and action-oriented approach make him the kind of engineer teams trust instinctively — a true unicorn hire."
                </p>
                <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    OM
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Creative Director, One Medical</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl"
              >
                <p className="text-white/90 text-sm mb-3 italic">
                "Ryan is an exceptional collaborator and technical leader who consistently drives complex projects to the finish line. From launching high-impact integration pages to leading the redesign of key growth funnels and the One Medical Seniors experience, he balances precision with partnership. His technical insight, adaptability, and calm problem-solving make him a trusted go-to across teams."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    OM
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Product Lead, One Medical</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -2 }}
            className={`lg:col-span-2 bg-gradient-to-br ${cardBg} rounded-3xl p-8 shadow-2xl border ${borderColor}`}
          >
            <h2 className={`text-2xl font-bold ${textPrimary} mb-6`}>
              Career Impact
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Sentry Reliability */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-xl text-center border border-blue-500/30"
              >
                <div className="text-2xl mb-1">🛡️</div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring' }}
                  className="text-4xl font-bold text-blue-400 mb-2"
                >
                  50K
                </motion.div>
                <div className={`text-xs ${textSecondary}`}>
                  Monthly Errors Managed
                </div>
              </motion.div>

              {/* Team Leadership */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                whileHover={{ scale: 1.04 }}
                className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-xl text-center border border-purple-500/30"
              >
                <div className="text-2xl mb-1">👥</div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3, type: 'spring' }}
                  className="text-4xl font-bold text-purple-400 mb-2"
                >
                  4
                </motion.div>
                <div className={`text-xs ${textSecondary}`}>
                  Engineers Managed
                </div>
              </motion.div>

              {/* Faster Launches */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.04 }}
                className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-xl text-center border border-green-500/30"
              >
                <div className="text-2xl mb-1">🚀</div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: 'spring' }}
                  className="text-4xl font-bold text-green-400 mb-2"
                >
                  40%
                </motion.div>
                <div className={`text-xs ${textSecondary}`}>
                  Faster Campaign Launches
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ scale: 1.04 }}
                className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-6 rounded-xl text-center border border-cyan-500/30"
              >
                <div className="text-2xl mb-1">⭐</div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: 'spring' }}
                  className="text-4xl font-bold text-cyan-400 mb-2"
                >
                  10+
                </motion.div>
                <div className={`text-xs ${textSecondary}`}>
                  Years in Web Engineering
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="lg:col-span-1 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl"
              >
                🎓
              </motion.div>
              <div>
                <h2 className="text-xl font-bold text-white">Education</h2>
              </div>
            </div>
            <div className="text-white">
              <h3 className="font-bold mb-2">A.A. in Interactive Media Design</h3>
              <p className="text-green-100 text-sm">Santa Rosa Junior College</p>
              <p className="text-green-200 text-xs mt-1">Santa Rosa, CA</p>
            </div>
          </motion.div>          
        </div>

        {/* Social Links - Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
          className="fixed bottom-8 right-8 flex gap-3"
        >
          {[
            { icon: <FiLinkedin size={20} />, link: 'https://linkedin.com/in/rcaven', color: 'blue' },
            { icon: <FiGithub size={20} />, link: 'https://github.com/rcaven', color: 'slate' },
            { icon: <FiMail size={20} />, link: 'mailto:ryancaven21@gmail.com', color: 'purple' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target={social.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border rounded-full flex items-center justify-center ${textPrimary} hover:bg-${social.color}-600 hover:text-white hover:border-${social.color}-600 transition-all shadow-lg`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default App;