import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


// Experience Card Component (Clickable)
function ExperienceCard({ darkMode, textPrimary, textSecondary, color, date, title, company, location, shortDescription, achievements, delay }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const bgColor = darkMode ? 'bg-slate-800/50' : `bg-${color}-50`;
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        whileHover={{ x: 10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className={`border-l-4 border-${color}-500 pl-6 relative ${bgColor} p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl group`}
      >
        <motion.div 
          className={`absolute left-0 top-6 w-3 h-3 bg-${color}-500 rounded-full -translate-x-[8.5px]`}
          whileHover={{ scale: 1.5 }}
        />
        
        <p className={`text-xs ${textSecondary} mb-2`}>{date}</p>
        <h3 className={`text-xl font-bold ${textPrimary} mb-1 group-hover:text-${color}-500 transition`}>{title}</h3>
        <p className={`text-${color}-500 font-medium mb-1`}>{company}</p>
        <p className={`text-xs ${textSecondary} mb-3 italic`}>{location}</p>
        <p className={`${textSecondary} text-sm line-clamp-2`}>
          {shortDescription}
        </p>
        
        <div className={`mt-3 text-${color}-500 text-sm font-medium flex items-center gap-2`}>
          <span>View Details</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
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
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative max-w-3xl w-full max-h-[90vh] overflow-y-auto ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              } rounded-2xl shadow-2xl border ${
                darkMode ? 'border-slate-700' : 'border-gray-200'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient */}
              <div className={`sticky top-0 bg-gradient-to-r from-${color}-500 to-${color}-600 p-8 rounded-t-2xl`}>
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
                      <span className={`text-${color}-500 text-xl flex-shrink-0 mt-1`}>✓</span>
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
                    className={`w-full py-3 px-6 bg-gradient-to-r from-${color}-500 to-${color}-600 text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105`}
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

  // Loading animation
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
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/Ryan_Caven_Resume.pdf'; // You'll need to add your PDF to the public folder
    link.download = 'Ryan_Caven_Resume.pdf';
    link.click();
  };

  // Skills data for chart
  const skillsData = {
    labels: ['React/Next.js', 'TypeScript', 'HTML/CSS', 'Python', 'CMS/WordPress', 'Performance Opt'],
    datasets: [
      {
        data: [95, 90, 95, 80, 90, 88],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: darkMode ? 'rgba(30, 41, 59, 1)' : 'rgba(255, 255, 255, 1)',
        borderWidth: 2,
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
          font: { size: 11 }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    },
    maintainAspectRatio: true,
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
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl"
            >
              RC
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
                Engineering leader specializing in content and publishing platforms, scalable CMS architectures, 
                and high-performance web systems. Experienced in building high-performance, accessible websites 
                with React, Next.js, and TypeScript. Adept at leading cross-functional teams, improving technical 
                processes, and mentoring engineers to deliver impactful digital experiences that align brand, UX, 
                and performance objectives.
              </motion.p>
            </div>
          </motion.div>

          {/* Interactive Skills Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className={`lg:col-span-1 bg-gradient-to-br ${cardBg} rounded-3xl p-6 shadow-2xl border ${borderColor}`}
          >
            <h3 className={`text-xl font-bold ${textPrimary} mb-4 text-center`}>Skills Distribution</h3>
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
            className="lg:col-span-2 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Front-End Architecture',
                'React / Next.js',
                'TypeScript',
                'CMS Governance',
                'Web Performance',
                'SEO & Accessibility',
                'Cross-Functional Leadership',
                'Mentoring',
                'Agile Delivery',
                'Stakeholder Management',
                'WordPress',
                'HubSpot',
                'Figma',
                'Jira'
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
            
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* AWS */}
              <ExperienceCard
                darkMode={darkMode}
                textPrimary={textPrimary}
                textSecondary={textSecondary}
                color="blue"
                date="2024 - Present"
                title="Front End Engineer"
                company="Amazon Web Services (AWS)"
                location="San Francisco, CA"
                shortDescription="Develop and maintain performant, reusable React components powering global AWS marketing pages"
                achievements={[
                  'Develop and maintain performant, reusable React components powering global AWS marketing pages increasing time to production by 20%',
                  'Collaborate with design, product, and marketing to ensure brand, UX, and SEO alignment',
                  'Drive performance and accessibility improvements across multiple web properties',
                  'Lead sprint planning, prioritization, and on-call rotations supporting high-traffic pages'
                ]}
                delay={0.5}
              />

              {/* One Medical */}
              <ExperienceCard
                darkMode={darkMode}
                textPrimary={textPrimary}
                textSecondary={textSecondary}
                color="purple"
                date="2021 - 2024"
                title="Lead Front End Engineer"
                company="Amazon One Medical"
                location="San Francisco, CA"
                shortDescription="Owned internal web publishing and content management platforms"
                achievements={[
                  'Owned internal web publishing and content management platforms used across marketing and editorial teams, ensuring reliability, accessibility, and performance',
                  'Partnered with leadership to align roadmap priorities and communicate technical trade-offs to non-technical stakeholders',
                  'Reduced campaign launch timelines by 40% through automation and documentation workflows',
                  'Led SEO and accessibility audits improving page performance by 35% and ADA compliance site-wide',
                  'Mentored engineers and led sprint ceremonies across distributed teams'
                ]}
                delay={0.6}
              />

              {/* EandM Electric */}
              <ExperienceCard
                darkMode={darkMode}
                textPrimary={textPrimary}
                textSecondary={textSecondary}
                color="cyan"
                date="2017 - 2021"
                title="Lead Front End Engineer / Web Manager"
                company="EandM Electric"
                location="Healdsburg, CA"
                shortDescription="Directed internal web infrastructure projects and large-scale eCommerce initiatives"
                achievements={[
                  'Directed internal web infrastructure projects and large-scale eCommerce initiatives',
                  'Oversaw intranet redesign from UX research to launch for 100+ employees',
                  'Collaborated with operations, sales, and IT to prioritize backlog and align goals',
                  'Served as Web Manager during major launch cycles ensuring delivery alignment'
                ]}
                delay={0.7}
              />

              {/* PBHS */}
              <ExperienceCard
                darkMode={darkMode}
                textPrimary={textPrimary}
                textSecondary={textSecondary}
                color="orange"
                date="2014 - 2017"
                title="WordPress Engineer / Technical Support Specialist"
                company="PBHS"
                location="Santa Rosa, CA"
                shortDescription="Promoted from Technical Support to Front-End Developer for custom WordPress builds"
                achievements={[
                  'Promoted from Technical Support to Front-End Developer for custom WordPress builds',
                  'Designed and implemented secure, accessible sites for healthcare clients',
                  'Managed patch updates and backend maintenance for HIPAA-compliant hosting environments'
                ]}
                delay={0.8}
              />

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
              {[
                { value: '20%', label: 'Production Time Increase', color: 'blue' },
                { value: '40%', label: 'Campaign Launch Reduction', color: 'purple' },
                { value: '35%', label: 'Performance Improvement', color: 'green' },
                { value: '10+', label: 'Years Experience', color: 'cyan' },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`bg-gradient-to-br from-${achievement.color}-500/20 to-${achievement.color}-600/20 p-6 rounded-xl text-center border border-${achievement.color}-500/30`}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                    className={`text-4xl font-bold text-${achievement.color}-400 mb-2`}
                  >
                    {achievement.value}
                  </motion.div>
                  <div className={`text-xs ${textSecondary}`}>{achievement.label}</div>
                </motion.div>
              ))}
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