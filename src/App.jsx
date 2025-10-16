import React, { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8 relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Profile Card - Large */}
          <div className="lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl">
              RC
            </div>
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">Ryan Caven</h1>
              <p className="text-slate-400 mb-1">Front End Engineer</p>
              <p className="text-blue-400 text-sm">Amazon Web Services (AWS)</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-lg">
                <span className="text-blue-500">📍</span>
                <span className="flex-1">San Mateo, CA</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-lg">
                <span className="text-blue-500">📧</span>
                <a href="mailto:ryancaven21@gmail.com" className="flex-1 hover:text-blue-400 transition text-xs">ryancaven21@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-lg">
                <span className="text-blue-500">💼</span>
                <a href="https://linkedin.com/in/rcaven" target="_blank" rel="noopener noreferrer" className="flex-1 hover:text-blue-400 transition">linkedin.com/in/rcaven</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-lg">
                <span className="text-blue-500">💻</span>
                <a href="https://github.com/rcaven" target="_blank" rel="noopener noreferrer" className="flex-1 hover:text-blue-400 transition">github.com/rcaven</a>
              </div>
            </div>
          </div>

          {/* About Me Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Professional Profile</h2>
              <p className="text-blue-50 leading-relaxed">
                Engineering leader specializing in content and publishing platforms, scalable CMS architectures, 
                and high-performance web systems. Experienced in building high-performance, accessible websites 
                with React, Next.js, and TypeScript. Adept at leading cross-functional teams, improving technical 
                processes, and mentoring engineers to deliver impactful digital experiences that align brand, UX, 
                and performance objectives.
              </p>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="lg:col-span-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-700 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'React', color: 'from-cyan-400 to-blue-500' },
                { name: 'Next.js', color: 'from-slate-400 to-slate-600' },
                { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
                { name: 'Python', color: 'from-yellow-400 to-blue-500' },
                { name: 'HTML/CSS', color: 'from-orange-400 to-red-500' },
                { name: 'GitHub', color: 'from-purple-400 to-purple-600' },
              ].map((tech) => (
                <div key={tech.name} className="text-center">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg mb-2`}>
                    {tech.name.slice(0, 2)}
                  </div>
                  <p className="text-slate-400 text-xs">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
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
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Timeline - Wide */}
          <div className="lg:col-span-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* AWS */}
              <div className="border-l-4 border-blue-500 pl-6 relative bg-slate-800/50 p-6 rounded-lg">
                <div className="absolute left-0 top-6 w-3 h-3 bg-blue-500 rounded-full -translate-x-[8.5px]"></div>
                <p className="text-xs text-slate-400 mb-2">2024 - Present</p>
                <h3 className="text-xl font-bold text-white mb-1">Front End Engineer</h3>
                <p className="text-blue-400 font-medium mb-3">Amazon Web Services (AWS)</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Develop performant, reusable React components powering global AWS marketing pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Increased time to production by 20%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Drive performance and accessibility improvements across web properties</span>
                  </li>
                </ul>
              </div>

              {/* One Medical */}
              <div className="border-l-4 border-purple-500 pl-6 relative bg-slate-800/50 p-6 rounded-lg">
                <div className="absolute left-0 top-6 w-3 h-3 bg-purple-500 rounded-full -translate-x-[8.5px]"></div>
                <p className="text-xs text-slate-400 mb-2">2021 - 2024</p>
                <h3 className="text-xl font-bold text-white mb-1">Lead Front End Engineer</h3>
                <p className="text-purple-400 font-medium mb-3">Amazon One Medical</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Owned internal web publishing and CMS platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Reduced campaign launch timelines by 40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Improved page performance by 35% and ADA compliance site-wide</span>
                  </li>
                </ul>
              </div>

              {/* EandM Electric */}
              <div className="border-l-4 border-cyan-500 pl-6 relative bg-slate-800/50 p-6 rounded-lg">
                <div className="absolute left-0 top-6 w-3 h-3 bg-cyan-500 rounded-full -translate-x-[8.5px]"></div>
                <p className="text-xs text-slate-400 mb-2">2017 - 2021</p>
                <h3 className="text-xl font-bold text-white mb-1">Lead Front End Engineer / Web Manager</h3>
                <p className="text-cyan-400 font-medium mb-3">EandM Electric</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Directed internal web infrastructure and eCommerce initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Oversaw intranet redesign for 100+ employees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Collaborated with operations, sales, and IT teams</span>
                  </li>
                </ul>
              </div>

              {/* PBHS */}
              <div className="border-l-4 border-orange-500 pl-6 relative bg-slate-800/50 p-6 rounded-lg">
                <div className="absolute left-0 top-6 w-3 h-3 bg-orange-500 rounded-full -translate-x-[8.5px]"></div>
                <p className="text-xs text-slate-400 mb-2">2014 - 2017</p>
                <h3 className="text-xl font-bold text-white mb-1">WordPress Engineer</h3>
                <p className="text-orange-400 font-medium mb-3">PBHS</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Promoted from Technical Support to Front-End Developer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Built secure, accessible sites for healthcare clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Managed HIPAA-compliant hosting environments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-white mb-6">Key Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-xl text-center border border-blue-500/30">
                <div className="text-4xl font-bold text-blue-400 mb-2">20%</div>
                <div className="text-xs text-slate-300">Production Time Increase</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-xl text-center border border-purple-500/30">
                <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-xs text-slate-300">Campaign Launch Reduction</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-xl text-center border border-green-500/30">
                <div className="text-4xl font-bold text-green-400 mb-2">35%</div>
                <div className="text-xs text-slate-300">Performance Improvement</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-6 rounded-xl text-center border border-cyan-500/30">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-xs text-slate-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-1 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                🎓
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Education</h2>
              </div>
            </div>
            <div className="text-white">
              <h3 className="font-bold mb-2">A.A. in Interactive Media Design</h3>
              <p className="text-green-100 text-sm">Santa Rosa Junior College</p>
              <p className="text-green-200 text-xs mt-1">Santa Rosa, CA</p>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="lg:col-span-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-white mb-6">Tools & Platforms</h2>
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
                <div key={tool.name} className="bg-slate-800/50 p-4 rounded-xl text-center hover:bg-slate-700/50 transition">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div className="text-slate-300 text-xs font-medium">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Social Links - Bottom Right */}
        <div className="fixed bottom-8 right-8 flex gap-3">
          <a href="https://linkedin.com/in/rcaven" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition">
            <span className="text-lg">in</span>
          </a>
          <a href="https://github.com/rcaven" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition">
            <span className="text-lg">💻</span>
          </a>
          <a href="mailto:ryancaven21@gmail.com" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-600 transition">
            <span className="text-lg">📧</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;