import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Your Name</h1>
              <p className="text-xl text-blue-100 mb-2">Full Stack Developer</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <a href="mailto:your.email@example.com" className="hover:text-blue-200 transition">
                  📧 your.email@example.com
                </a>
                <a href="tel:+1234567890" className="hover:text-blue-200 transition">
                  📱 (123) 456-7890
                </a>
                <a href="https://github.com/yourusername" className="hover:text-blue-200 transition" target="_blank" rel="noopener noreferrer">
                  💻 GitHub
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-200 transition" target="_blank" rel="noopener noreferrer">
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="p-8 border-b">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">👋</span> About Me
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Passionate developer with expertise in building modern web applications. 
            I love creating elegant solutions to complex problems and continuously 
            learning new technologies. Experienced in React, Node.js, and cloud technologies.
          </p>
        </section>

        {/* Skills Section */}
        <section className="p-8 border-b bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-blue-600">🛠️</span> Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'React', color: 'bg-blue-100 text-blue-800' },
              { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800' },
              { name: 'Node.js', color: 'bg-green-100 text-green-800' },
              { name: 'Git', color: 'bg-orange-100 text-orange-800' },
              { name: 'Python', color: 'bg-indigo-100 text-indigo-800' },
              { name: 'SQL', color: 'bg-purple-100 text-purple-800' },
              { name: 'REST APIs', color: 'bg-pink-100 text-pink-800' }
            ].map((skill) => (
              <div key={skill.name} className={`${skill.color} p-3 rounded-lg shadow text-center hover:shadow-md transition-all hover:scale-105`}>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="p-8 border-b">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-blue-600">💼</span> Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 hover:bg-gray-50 p-4 rounded transition">
              <h3 className="text-xl font-semibold text-gray-800">Senior Developer</h3>
              <p className="text-gray-600 mb-2">Company Name • 2020 - Present</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>Led development of multiple web applications using React and Node.js</li>
                <li>Improved application performance by 40% through optimization</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented CI/CD pipelines and automated testing</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 hover:bg-gray-50 p-4 rounded transition">
              <h3 className="text-xl font-semibold text-gray-800">Junior Developer</h3>
              <p className="text-gray-600 mb-2">Another Company • 2018 - 2020</p>
              <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                <li>Built responsive web interfaces using modern frameworks</li>
                <li>Collaborated with cross-functional teams in Agile environment</li>
                <li>Implemented RESTful APIs and database integrations</li>
                <li>Participated in daily standups and sprint planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="p-8 bg-gray-50 border-b">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-blue-600">🚀</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">E-Commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                Full-stack e-commerce application with payment integration, shopping cart, 
                and admin dashboard. Handles 10k+ daily users.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MongoDB</span>
              </div>
              <a href="https://github.com/yourusername/project" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View on GitHub →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Task Management App</h3>
              <p className="text-gray-600 mb-4">
                Collaborative task manager with real-time updates, drag-and-drop interface, 
                and team collaboration features.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Tailwind</span>
              </div>
              <a href="https://github.com/yourusername/project2" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View on GitHub →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Weather Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Real-time weather application with forecasts, interactive maps, 
                and location-based recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">API</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Chart.js</span>
              </div>
              <a href="https://github.com/yourusername/project3" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View on GitHub →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Portfolio Generator</h3>
              <p className="text-gray-600 mb-4">
                Automated portfolio website generator that creates custom sites 
                based on user input and templates.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Jinja2</span>
              </div>
              <a href="https://github.com/yourusername/project4" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View on GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="p-8 border-b">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-blue-600">🎓</span> Education
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-600">University Name • 2014 - 2018</p>
              <p className="text-gray-600 mt-2">GPA: 3.8/4.0 • Dean's List</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>• AWS Certified Developer Associate</li>
                <li>• Meta React Developer Certificate</li>
                <li>• Google Cloud Platform Fundamentals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 text-center">
          <p className="mb-2">© 2024 Your Name. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;