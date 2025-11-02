import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import profilePic from './assets/profilePic.png';

ChartJS.register(ArcElement, Tooltip, Legend);

// Experience Section Component
function ExperienceSection({ darkMode, textPrimary, textSecondary }) {
  const [openModalId, setOpenModalId] = useState(null);

  const experiences = [
    {
      id: 'aws',
      color: "blue",
      date: "2024 - Present",
      title: "Front End Engineer",
      company: "Amazon Web Services (AWS)",
      location: "San Francisco, CA",
      shortDescription: "Develop and maintain performant, reusable React components powering global AWS marketing pages",
      achievements: [
        'Develop and maintain performant, reusable React components powering global AWS marketing pages increasing time to production by 20%',
        'Collaborate with design, product, and marketing to ensure brand, UX, and SEO alignment',
        'Drive performance and accessibility improvements across multiple web properties',
        'Lead sprint planning, prioritization, and on-call rotations supporting high-traffic pages'
      ],
      delay: 0.5
    },
    {
      id: 'onemedical',
      color: "purple",
      date: "2021 - 2024",
      title: "Lead Front End Engineer",
      company: "Amazon One Medical",
      location: "San Francisco, CA",
      shortDescription: "Owned internal web publishing and content management platforms",
      achievements: [
        'Owned internal web publishing and content management platforms used across marketing and editorial teams, ensuring reliability, accessibility, and performance',
        'Partnered with leadership to align roadmap priorities and communicate technical trade-offs to non-technical stakeholders',
        'Reduced campaign launch timelines by 40% through automation and documentation workflows',
        'Led SEO and accessibility audits improving page performance by 35% and ADA compliance site-wide',
        'Mentored engineers and led sprint ceremonies across distributed teams'
      ],
      delay: 0.6
    },
    {
      id: 'eandm',
      color: "cyan",
      date: "2017 - 2021",
      title: "Lead Front End Engineer / Web Manager",
      company: "EandM Electric",
      location: "Healdsburg, CA",
      shortDescription: "Directed internal web infrastructure projects and large-scale eCommerce initiatives",
      achievements: [
        'Directed internal web infrastructure projects and large-scale eCommerce initiatives',
        'Oversaw intranet redesign from UX research to launch for 100+ employees',
        'Collaborated with operations, sales, and IT to prioritize backlog and align goals',
        'Served as Web Manager during major launch cycles ensuring delivery alignment'
      ],
      delay: 0.7
    },
    {
      id: 'pbhs',
      color: "orange",
      date: "2014 - 2017",
      title: "WordPress Engineer / Technical Support Specialist",
      company: "PBHS",
      location: "Santa Rosa, CA",
      shortDescription: "Promoted from Technical Support to Front-End Developer for custom WordPress builds",
      achievements: [
        'Promoted from Technical Support to Front-End Developer for custom WordPress builds',
        'Designed and implemented secure, accessible sites for healthcare clients',
        'Managed patch updates and backend maintenance for HIPAA-compliant hosting environments'
      ],
      delay: 0.8
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          {...exp}
          darkMode={darkMode}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
          isAnyModalOpen={openModalId !== null}
          isThisModalOpen={openModalId === exp.id}
          onOpenModal={() => setOpenModalId(exp.id)}
          onCloseModal={() => setOpenModalId(null)}
        />
      ))}
    </div>
  );
}

// Experience Card Component
function ExperienceCard({ darkMode, textPrimary, textSecondary, color, date, title, company, location, shortDescription, achievements, delay }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const colorClasses = {
    blue: {
      border: 'border-blue-500',
      bg: darkMode ? 'bg-slate-800/50' : 'bg-blue-50',
      dot: 'bg-blue-500',
      text: 'text-blue-500',
      hoverText: 'group-hover:text-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    purple: {
      border: 'border-purple-500',
      bg: darkMode ? 'bg-slate-800/50' : 'bg-purple-50',
      dot: 'bg-purple-500',
      text: 'text-purple-500',
      hoverText: 'group-hover:text-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    },
    cyan: {
      border: 'border-cyan-500',
      bg: darkMode ? 'bg-slate-800/50' : 'bg-cyan-50',
      dot: 'bg-cyan-500',
      text: 'text-cyan-500',
      hoverText: 'group-hover:text-cyan-500',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    orange: {
      border: 'border-orange-500',
      bg: darkMode ? 'bg-slate-800/50' : 'bg-orange-50',
      dot: 'bg-orange-500',
      text: 'text-orange-500',
      hoverText: 'group-hover:text-orange-500',
      gradient: 'from-orange-500 to-orange-600'
    }
  };

  const colors = colorClasses[color];
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        onClick={() => setIsModalOpen(true)}
        className={`border-l-4 ${colors.border} pl-6 relative ${colors.bg} p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl group`}
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
      </motion.div>

      {/* Modal */}
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
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
    }
  };

  const colors = colorClasses[color];

  if (!isOpen) return null;

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


  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Mouse tracking for particle effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Download PDF function
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Ryan_Caven_Resume.pdf';
    link.download = 'Ryan_Caven_Resume.pdf';
    link.click();
  };

  // Engineering Focus Areas
  const focusAreas = [
    {
      name: 'System Integration & Deployment',
      percentage: 25,
      description: 'Bridging software, hardware, and operational systems to ensure mission-critical reliability.',
      tools: 'Python, Docker, AWS, Linux, APIs, CI/CD, Infrastructure Automation'
    },
    {
      name: 'Software Engineering & Architecture',
      percentage: 35,
      description: 'Designing modular, performant software systems that scale across teams and products.',
      tools: 'React, Next.js, TypeScript, Node.js, C++ (familiarity), GitHub, Testing Frameworks'
    },
    {
      name: 'Customer Enablement & Onboarding',
      percentage: 20,
      description: 'Partnering directly with customers to deploy tools, train users, and ensure adoption success.',
      tools: 'Technical Training, Documentation, Stakeholder Communication, Onboarding Systems'
    },
    {
      name: 'Performance & Reliability Engineering',
      percentage: 20,
      description: 'Measuring, diagnosing, and improving speed, stability, and accessibility across environments.',
      tools: 'Lighthouse, Core Web Vitals, Monitoring, AI Testing, Load Optimization'
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
                  color: ${darkMode ? '#94a3b8' : '#64748b'};
                  margin-bottom: 12px;
                ">
                  ${area.percentage}% of focus
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
                  Tools & Skills:
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

  // Theme colors
  const bgClass = darkMode 
    ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
    : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50';
  
  const cardBg = darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-gray-50';
  const borderColor = darkMode ? 'border-slate-700' : 'border-gray-200';
  const textPrimary = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = darkMode ? 'text-slate-400' : 'text-gray-600';
  const textAccent = darkMode ? 'text-blue-400' : 'text-blue-600';

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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-8 right-8 z-50 p-4 rounded-full ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border shadow-lg ${textPrimary} hover:shadow-xl transition-all`}
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </motion.button>

      {/* Download PDF Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={downloadPDF}
        className={`fixed top-24 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all`}
      >
        <FiDownload size={24} />
      </motion.button>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Profile Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className={`lg:col-span-1 lg:row-span-2 bg-gradient-to-br ${cardBg} rounded-3xl p-8 shadow-2xl border ${borderColor} transition-all duration-300`}
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.3 }}
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
              <p className={`${textSecondary} mb-1`}>Front End Engineer</p>
              <p className={`${textAccent} text-sm`}>Amazon Web Services (AWS)</p>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 text-sm"
            >
              {[
                { icon: '📍', text: 'San Mateo, CA', link: null },
                { icon: '📧', text: 'ryancaven21@gmail.com', link: 'mailto:ryancaven21@gmail.com' },
                { icon: '💼', text: 'linkedin.com/in/rcaven', link: 'https://linkedin.com/in/rcaven' },
                { icon: '💻', text: 'github.com/rcaven', link: 'https://github.com/rcaven' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-3 ${textSecondary} ${darkMode ? 'bg-slate-800/50' : 'bg-gray-100'} p-3 rounded-lg`}
                >
                  <span className="text-blue-500">{item.icon}</span>
                  {item.link ? (
                    <a href={item.link} className={`flex-1 hover:${textAccent} transition text-xs`} target={item.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                      {item.text}
                    </a>
                  ) : (
                    <span className="flex-1 text-xs">{item.text}</span>
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
            whileHover={{ scale: 1.02 }}
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
                Engineering leader and systems integrator with 10+ years of experience building scalable platforms and enabling cross-functional teams. 
                I've led React, Next.js, and Python-based development for high-traffic systems, improved deployment velocity and accessibility standards, and mentored engineers to deliver measurable results. 
                My focus is building reliable, data-driven systems that bridge software, operations, and user experience — using automation and AI-assisted workflows to enhance reliability, speed, and long-term maintainability.
                <br/>
                <br/>
                Focused on delivering technology that's reliable in code and resilient in production.
              </motion.p>
            </div>
          </motion.div>

          {/* Interactive Focus Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className={`lg:col-span-1 bg-gradient-to-br ${cardBg} rounded-3xl p-6 shadow-2xl border ${borderColor}`}
          >
            <h3 className={`text-xl font-bold ${textPrimary} mb-4 text-center`}>Engineering Focus Areas</h3>
            <div className="w-full max-w-xs mx-auto">
              <Doughnut data={skillsData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-1 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Front-End Architecture',
                'React / Next.js',
                'TypeScript',
                'Python',
                'Jira',
                'Figma',
                'AI testing / Automation',
                'CMS Governance',
                'Web Performance',
                'SEO & Accessibility',
                'Cross-Functional Leadership',
                'Mentoring',
                'Stakeholder Management'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition cursor-pointer"
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
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className={`lg:col-span-3 bg-gradient-to-br ${cardBg} rounded-3xl p-8 shadow-2xl border ${borderColor}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-3xl font-bold ${textPrimary}`}>Professional Experience</h2>
              <p className={`text-sm ${textSecondary}`}>Click to view details</p>
            </div>
            
            <ExperienceSection darkMode={darkMode} textPrimary={textPrimary} textSecondary={textSecondary} />
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.01 }}
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
              ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${darkMode ? 'bg-slate-800/50' : 'bg-gray-100'} p-4 rounded-xl text-center hover:shadow-lg transition cursor-pointer`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
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
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.02 }}
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
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            className={`lg:col-span-2 bg-gradient-to-br ${cardBg} rounded-3xl p-8 shadow-2xl border ${borderColor}`}
          >
            <h2 className={`text-2xl font-bold ${textPrimary} mb-6`}>Key Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-xl text-center border border-blue-500/30"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="text-4xl font-bold text-blue-400 mb-2"
                >
                  20%
                </motion.div>
                <div className={`text-xs ${textSecondary}`}>Production Time Increase</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-xl text-center border border-purple-500/30"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3, type: "spring" }}
                  className="text-4xl font-bold text-purple-400 mb-2"
                >
                  40%
                </motion.div>
                <div className={`text-xs ${textSecondary}`}>Campaign Launch Reduction</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-xl text-center border border-green-500/30"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                  className="text-4xl font-bold text-green-400 mb-2"
                >
                  35%
                </motion.div>
                <div className={`text-xs ${textSecondary}`}>Performance Improvement</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-6 rounded-xl text-center border border-cyan-500/30"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  className="text-4xl font-bold text-cyan-400 mb-2"
                >
                  10+
                </motion.div>
                <div className={`text-xs ${textSecondary}`}>Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-1 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
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
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
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