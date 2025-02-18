// Main Application Component
// This is the core file containing all the portfolio sections and logic
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Globe, Server } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const skills = [
    { name: 'Solution Architect', icon: <Globe className="w-6 h-6" />, level: 90 },
    { name: 'Devops Practices', icon: <Server className="w-6 h-6" />, level: 85 },
    { name: 'Cloud and Network architecture', icon: <Code className="w-6 h-6" />, level: 80 },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      link: '#'
    },
    {
      title: 'AI Task Manager',
      description: 'Smart task management app using AI to prioritize and categorize tasks. Built with React, TypeScript, and OpenAI API integration.',
      image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'TypeScript', 'OpenAI', 'TailwindCSS'],
      link: '#'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard for real-time data visualization. Features WebSocket connections and dynamic charts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'D3.js', 'WebSocket', 'Express'],
      link: '#'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Sachin Singh</h1>
            <p className="text-xl md:text-2xl mb-8">IT by design Engineer</p>
          </div>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="#" className="p-2 hover:text-indigo-200 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-indigo-200 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 hover:text-indigo-200 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          <a 
            href="#about" 
            className="animate-bounce inline-block hover:text-indigo-200 transition-colors"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                alt="Working on laptop"
                className="rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate full-stack developer with 5 years of experience building
                web applications. I specialize in React, Node.js, and cloud technologies.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                When I'm not coding, you can find me contributing to open-source projects,
                writing technical blog posts, or exploring new technologies.
              </p>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center mb-2">
                      <div className="mr-2 transform group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.link}
                        className="text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500 group"
                  >
                    View Details 
                    <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Feel free to connect</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <div className="text-green-600 text-center">Message sent successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center">Failed to send message. Please try again.</div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Sachin Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
