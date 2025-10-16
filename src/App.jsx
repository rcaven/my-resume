import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Card */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Header Section with Gradient */}
          <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-8 sm:p-12">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Profile" 
                  className="relative w-36 h-36 rounded-full border-4 border-white shadow-2xl object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="text-center lg:text-left flex-1">
                <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                  Your Name
                </h1>
                <p className="text-2xl text-blue-100 mb-4 font-light">Full Stack Developer</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
                  <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-blue-200 transition transform hover:scale-110">
                    <span className="text-xl">📧</span> your.email@example.com
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-200 transition transform hover:scale-110">
                    <span className="text-xl">📱</span> (123) 456-7890
                  </a>
                  <a href="https://github.com/yourusername" className="flex items-center gap-2 hover:text-blue-200 transition transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                    <span className="text-xl">💻</span> GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourprofile" className="flex items-center gap-2 hover:text-blue-200 transition transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                    <span className="text-xl">💼</span> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Tab Navigation */}
          <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 px-8">
            <div className="flex flex-wrap gap-1 py-2">
              {['about', 'skills', 'experience', 'projects', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>

          {/* About Section */}
          {activeTab === 'about' && (
            <section className="p-8 animate-fadeIn">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-4xl">👋</span> About Me
                </h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Passionate developer with expertise in building modern web applications. 
                    I love creating elegant solutions to complex problems and continuously 
                    learning new technologies.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Experienced in React, Node.js, and cloud technologies. I believe in writing 
                    clean, maintainable code and creating exceptional user experiences.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center transform hover:scale-105 transition">
                    <div className="text-3xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center transform hover:scale-105 transition">
                    <div className="text-3xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl text-center transform hover:scale-105 transition">
                    <div className="text-3xl font-bold text-pink-600">10+</div>
                    <div className="text-sm text-gray-600 mt-1">Technologies</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center transform hover:scale-105 transition">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeTab === 'skills' && (
            <section className="p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">🛠️</span> Skills & Technologies
              </h2>
              
              <div className="space-y-8">
                {/* Frontend */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Frontend Development</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[
                      { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
                      { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
                      { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-cyan-600' },
                      { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600' },
                    ].map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                            {skill.name.charAt(0)}
                          </div>
                          <div className="text-center font-medium text-gray-800">{skill.name}</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Backend Development</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[
                      { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
                      { name: 'Python', level: 80, color: 'from-indigo-400 to-indigo-600' },
                      { name: 'SQL', level: 75, color: 'from-purple-400 to-purple-600' },
                      { name: 'REST APIs', level: 90, color: 'from-pink-400 to-pink-600' },
                    ].map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                            {skill.name.charAt(0)}
                          </div>
                          <div className="text-center font-medium text-gray-800">{skill.name}</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Git', 'Docker', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL', 'VS Code', 'Figma'].map((tool) => (
                      <span key={tool} className="px-5 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Experience Section */}
          {activeTab === 'experience' && (
            <section className="p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <span className="text-4xl">💼</span> Work Experience
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-pink-500">
                
                <div className="relative pl-12 group">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-gray-800">Senior Developer</h3>
                    <p className="text-purple-600 font-medium mb-2">Company Name • 2020 - Present</p>
                    <ul className="mt-4 space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Led development of multiple web applications using React and Node.js</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Improved application performance by 40% through optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Mentored junior developers and conducted code reviews</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-12 group">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-gray-800">Junior Developer</h3>
                    <p className="text-purple-600 font-medium mb-2">Another Company • 2018 - 2020</p>
                    <ul className="mt-4 space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Built responsive web interfaces using modern frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Collaborated with cross-functional teams in Agile environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Implemented RESTful APIs and database integrations</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeTab === 'projects' && (
            <section className="p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <span className="text-4xl">🚀</span> Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {[
                  {
                    title: 'E-Commerce Platform',
                    description: 'Full-stack e-commerce application with payment integration, shopping cart, and admin dashboard.',
                    tags: ['React', 'Node.js', 'MongoDB'],
                    gradient: 'from-blue-500 to-cyan-500',
                    icon: '🛒'
                  },
                  {
                    title: 'Task Management App',
                    description: 'Collaborative task manager with real-time updates and drag-and-drop interface.',
                    tags: ['React', 'Firebase', 'Tailwind'],
                    gradient: 'from-purple-500 to-pink-500',
                    icon: '✅'
                  },
                  {
                    title: 'Weather Dashboard',
                    description: 'Real-time weather application with forecasts and interactive maps.',
                    tags: ['JavaScript', 'API', 'Chart.js'],
                    gradient: 'from-orange-500 to-yellow-500',
                    icon: '🌤️'
                  },
                  {
                    title: 'Portfolio Generator',
                    description: 'Automated portfolio website generator based on user input and templates.',
                    tags: ['Python', 'Flask', 'Jinja2'],
                    gradient: 'from-green-500 to-teal-500',
                    icon: '🎨'
                  },
                ].map((project, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
                    <div className="relative bg-white p-6 rounded-xl hover:shadow-2xl transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a href="#" className={`inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} font-semibold hover:gap-3 transition-all`}>
                        View Project <span>→</span>
                      </a>
                    </div>
                  </div>
                ))}

              </div>
            </section>
          )}

          {/* Education Section */}
          {activeTab === 'education' && (
            <section className="p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <span className="text-4xl">🎓</span> Education & Certifications
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg">
                      🎓
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Bachelor of Science in Computer Science</h3>
                      <p className="text-purple-600 font-medium mb-2">University Name • 2014 - 2018</p>
                      <p className="text-gray-700">GPA: 3.8/4.0 • Dean's List • Honors Graduate</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏆</span> Professional Certifications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: 'AWS Certified Developer', icon: '☁️', color: 'from-orange-400 to-orange-600' },
                      { name: 'Meta React Developer', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
                      { name: 'Google Cloud Platform', icon: '🌐', color: 'from-red-400 to-yellow-600' },
                      { name: 'MongoDB Certified', icon: '🍃', color: 'from-green-400 to-green-600' },
                    ].map((cert) => (
                      <div key={cert.name} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all hover:-translate-y-1">
                        <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center text-2xl shadow`}>
                          {cert.icon}
                        </div>
                        <span className="font-medium text-gray-800">{cert.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Footer */}
          <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 text-center">
            <p className="text-lg mb-2">© 2024 Your Name. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Built with ❤️ using React & Tailwind CSS</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="hover:text-blue-400 transition transform hover:scale-110">GitHub</a>
              <a href="#" className="hover:text-blue-400 transition transform hover:scale-110">LinkedIn</a>
              <a href="#" className="hover:text-blue-400 transition transform hover:scale-110">Twitter</a>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}

export default App;