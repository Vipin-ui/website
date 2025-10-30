import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, FileText, Menu, X } from 'lucide-react';

// Constants
const RESUME_DATA = {
  name: 'Vipin Pandey',
  title: 'Full Stack Developer',
  location: 'Jaipur, Rajasthan',
  summary: 'A dedicated Computer Science student with strong expertise in full-stack web development using MERN stack. Passionate about building scalable applications and solving complex problems with modern technologies.',
  contact: {
    email: 'vipinpandey3510@gmail.com',
    github: 'https://github.com/vipin-ui',
    linkedin: 'https://www.linkedin.com/in/vipin-pandey-aa060b1a9/',
    portfolio: 'https://vipin-plum.vercel.app/',
    resume: 'https://resume-eight-nu-24.vercel.app/'
  }
};

const PROJECTS = [
  { id: 1, name: 'BookingApp', description: 'Full-stack booking application with dynamic UI and real-time backend data handling.', tech: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'React'], icon: '🎫', link: 'https://resume-git-main-vipin-pandeys-projects.vercel.app/' },
  { id: 2, name: 'QUIZ-APP', description: 'Interactive quiz application with dynamic question rendering and score tracking.', tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redux'], icon: '📝', link: 'https://resume-git-main-vipin-pandeys-projects.vercel.app/' },
  { id: 3, name: 'E-Commerce Platform', description: 'Complete e-commerce solution with product catalog and checkout system.', tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'], icon: '🛍️', link: 'https://resume-git-main-vipin-pandeys-projects.vercel.app/' },
  { id: 4, name: 'chai-with-backend', description: 'Full-stack app integrating backend APIs for user and data management.', tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB'], icon: '☕', link: 'https://resume-git-main-vipin-pandeys-projects.vercel.app/' },
  // { id: 5, name: 'Social Media Dashboard', description: 'Real-time social analytics dashboard with data visualization metrics.', tech: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'], icon: '📊', link: 'https://resume-git-main-vipin-pandeys-projects.vercel.app/' },
  { id: 6, name: 'Task Management System', description: 'Collaborative task management tool with real-time updates.', tech: ['MERN Stack', 'Socket.io', 'Redis'], icon: '✅', link: 'https://resume-git-main-vipin-pandeys-projects.vercel.app/' }
];

const EXPERIENCE = [
  { role: 'Full Stack Developer', company: 'Comply Relex', duration: 'July 2025 - Present', description: 'Developing scalable MERN applications and RESTful APIs.', icon: '💼' },
  { role: 'MERN Stack Intern', company: 'SKIT, Jaipur', duration: 'Summer 2023', description: 'Built full-stack applications and participated in code reviews.', icon: '🎓' }
];

const EDUCATION = [
  { degree: 'Bachelor of Technology in Computer Science', institution: 'Swami Keshvanand Institute of Technology (SKIT)', location: 'Jaipur, Rajasthan', duration: '2021 - 2025', icon: '🎓' }
];

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    subtitle: 'Modern UI & Interactive Interfaces',
    icon: '🎨',
    color: 'cyan',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Redux', 'Responsive Design']
  },
  {
    title: 'Backend Development',
    subtitle: 'Scalable APIs & Server Architecture',
    icon: '⚙️',
    color: 'purple',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Database Design', 'PHP', 'Server Management', 'API Integration']
  },
  {
    title: 'Databases & Tools',
    subtitle: 'Data Management & Development Tools',
    icon: '💾',
    color: 'green',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Git & GitHub', 'VS Code', 'Postman', 'Docker', 'Linux']
  },
  {
    title: 'Programming Languages',
    subtitle: 'Core Languages & Fundamentals',
    icon: '🔤',
    color: 'orange',
    skills: ['JavaScript', 'C++', 'Python', 'HTML5', 'CSS3', 'PHP', 'Problem Solving', 'Data Structures']
  }
];

const NAV_ITEMS = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'resume', 'contact'];

// Header Component
const Header = ({ activeSection, onScrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onScrollToSection('home');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md z-40 border-b border-purple-500/20 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer group">
            {/* Modern Logo Design */}
            <div className="relative w-12 h-12">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
              
              {/* Inner logo container */}
              <div className="absolute inset-0.5 bg-slate-950 rounded-xl flex items-center justify-center">
                {/* Logo symbol */}
                <div className="relative">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* V shape */}
                    <path d="M4 4 L14 24 L24 4" stroke="url(#logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* P shape */}
                    <path d="M14 4 L14 24 M14 4 L20 4 Q24 4 24 8 Q24 12 20 12 L14 12" stroke="url(#logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                    <defs>
                      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                        <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Vipin Pandey
              </h1>
              <p className="text-xs text-gray-400">Full Stack Developer</p>
            </div>
          </button>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex space-x-8">
            {NAV_ITEMS.map(item => (
              <li key={item}>
                <button
                  onClick={() => onScrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            {NAV_ITEMS.map(item => (
              <li key={item}>
                <button
                  onClick={() => {
                    onScrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`capitalize w-full text-left py-2 ${
                    activeSection === item ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

// Hero Section
const HeroSection = ({ id, resumeData, onScrollToSection }) => (
  <section id={id} className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
    {/* Floating particles background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="floating-particle particle-1"></div>
      <div className="floating-particle particle-2"></div>
      <div className="floating-particle particle-3"></div>
      <div className="floating-particle particle-4"></div>
      <div className="floating-particle particle-5"></div>
    </div>
    
    <div className="text-center animate-in max-w-4xl relative z-10">
      <div className="mb-6">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-6xl mb-6 hero-avatar animate-float">
          👨‍💻
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hero-title">
        {resumeData.name}
      </h1>
      <p className="text-2xl md:text-3xl text-purple-300 mb-4 typing-text">{resumeData.title}</p>
      <p className="text-gray-400 mb-2 fade-in-up">📍 {resumeData.location}</p>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto fade-in-up">{resumeData.summary}</p>
      <div className="flex flex-wrap justify-center gap-4 mb-8 hero-buttons">
        <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all transform hover:scale-110 hover:rotate-2 button-pop">
          <Mail size={20} /> Email Me
        </a>
        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all transform hover:scale-110 hover:rotate-2 button-pop">
          <Github size={20} /> GitHub
        </a>
        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all transform hover:scale-110 hover:rotate-2 button-pop">
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>
      <button onClick={() => onScrollToSection('projects')} className="text-purple-400 hover:text-purple-300 animate-bounce pulse-glow">
        ↓ Explore My Work ↓
      </button>
    </div>
  </section>
);

// About Section
const AboutSection = ({ id }) => (
  <section id={id} className="py-20 px-6 relative overflow-hidden">
    <div className="container mx-auto max-w-6xl relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        About Me
      </h2>
      
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Card 1 - Who I Am */}
        <div className="simple-about-card bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 animate-in">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl">
            👨‍💻
          </div>
          <h3 className="text-2xl font-bold text-center text-purple-300 mb-4">Full Stack Developer</h3>
          <p className="text-gray-300 text-center leading-relaxed">
            Specializing in MERN stack development with a passion for building scalable and efficient web applications.
          </p>
          <div className="mt-6 pt-6 border-t border-purple-500/20">
            <div className="flex justify-around text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">2024</div>
                <div className="text-xs text-gray-400">Graduate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">SKIT</div>
                <div className="text-xs text-gray-400">Jaipur</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - What I Do */}
        <div className="simple-about-card bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 animate-in">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-4xl">
            🚀
          </div>
          <h3 className="text-2xl font-bold text-center text-blue-300 mb-4">What I Do</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Build scalable web applications</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Design RESTful APIs</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Create responsive UIs</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Database architecture</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-purple-500/20 text-center">
            <div className="text-2xl font-bold text-pink-400">6+</div>
            <div className="text-sm text-gray-400">Major Projects</div>
          </div>
        </div>

        {/* Card 3 - My Journey */}
        <div className="simple-about-card bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 animate-in">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-4xl">
            🎯
          </div>
          <h3 className="text-2xl font-bold text-center text-pink-300 mb-4">My Journey</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            My software development journey has equipped me with strong problem-solving skills and a deep understanding of both frontend and backend technologies.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I believe in writing clean, maintainable code and creating user experiences that make a difference.
          </p>
        </div>
      </div>

      {/* Tech Stack Section */}
      {/* <div className="mt-16 animate-in">
        <h3 className="text-2xl font-bold text-center mb-8 text-purple-300">Technologies I Work With</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'React.js', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
            { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
            { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800' },
            { name: 'Express', icon: '🚂', color: 'from-gray-600 to-gray-800' },
            { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-blue-800' },
            { name: 'JavaScript', icon: '📜', color: 'from-yellow-500 to-yellow-600' },
            { name: 'Next.js', icon: '▲', color: 'from-black to-gray-800' },
            { name: 'Tailwind', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
          ].map((tech, idx) => (
            <div key={idx} className="simple-tech-badge bg-slate-900/70 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center">
              <div className={`text-3xl mb-2 w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                {tech.icon}
              </div>
              <div className="text-white font-semibold text-sm">{tech.name}</div>
            </div>
          ))}
        </div>
      </div> */}


      <div className="mt-16">
  <h3 className="text-2xl font-bold text-center mb-8 text-purple-300">
    Technologies I Work With
  </h3>

  <div className="flex flex-wrap justify-center gap-3">
    {[
      { name: 'React.js', color: 'from-cyan-400 to-blue-500', textColor: 'text-cyan-400' },
      { name: 'Node.js', color: 'from-green-500 to-emerald-600', textColor: 'text-green-400' },
      { name: 'MongoDB', color: 'from-green-600 to-green-800', textColor: 'text-green-500' },
      { name: 'Express', color: 'from-gray-600 to-gray-800', textColor: 'text-gray-400' },
      { name: 'MySQL', color: 'from-blue-600 to-blue-800', textColor: 'text-blue-400' },
      { name: 'JavaScript', color: 'from-yellow-500 to-yellow-600', textColor: 'text-yellow-400' },
      { name: 'Next.js', color: 'from-slate-800 to-gray-900', textColor: 'text-slate-300' },
      { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500', textColor: 'text-cyan-400' },
      { name: 'Redux', color: 'from-purple-500 to-purple-700', textColor: 'text-purple-400' },
      { name: 'Git', color: 'from-orange-500 to-red-600', textColor: 'text-orange-400' },
      { name: 'Docker', color: 'from-blue-500 to-blue-700', textColor: 'text-blue-400' },
      { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-700', textColor: 'text-blue-500' },
    ].map((tech, idx) => (
      <div key={idx} className="simple-tech-badge group relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        ></div>

        <div
          className={`relative px-5 py-2.5 bg-slate-900/70 backdrop-blur-sm rounded-full border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300`}
        >
          <span
            className={`font-semibold ${tech.textColor} group-hover:text-white transition-colors duration-300`}
          >
            {tech.name}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Quick Info Bar */}
      <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 animate-in">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🎓</div>
            <div className="text-lg font-bold text-white">B.Tech CSE</div>
            <div className="text-sm text-gray-400">2021 - 2025</div>
          </div>
          <div>
            <div className="text-3xl mb-2">💼</div>
            <div className="text-lg font-bold text-white">Comply Relex</div>
            <div className="text-sm text-gray-400">Current Role</div>
          </div>
          <div>
            <div className="text-3xl mb-2">📍</div>
            <div className="text-lg font-bold text-white">Jaipur</div>
            <div className="text-sm text-gray-400">Rajasthan, India</div>
          </div>
          <div>
            <div className="text-3xl mb-2">✨</div>
            <div className="text-lg font-bold text-white">Open to Work</div>
            <div className="text-sm text-gray-400">Full Time</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Projects Section
const ProjectsSection = ({ id, projects }) => (
  <section id={id} className="py-20 px-6 bg-slate-950/50">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold mb-12 text-center animate-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="project-card bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 animate-in">
            <div className="text-5xl mb-4">{project.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-purple-300">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              View Project <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Skills Section
const SkillsSection = ({ id, skillCategories }) => {
  const colorMap = {
    cyan: 'from-cyan-500 to-blue-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-red-500'
  };

  return (
    <section id={id} className="py-20 px-6 bg-slate-950/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center animate-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="simple-skill-card bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 animate-in">
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-4xl w-16 h-16 rounded-xl bg-gradient-to-br ${colorMap[category.color]} flex items-center justify-center skill-icon-box`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.subtitle}</p>
                </div>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="simple-skill-item bg-slate-800/50 px-4 py-2 rounded-lg border border-transparent">
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = ({ id, experience }) => (
  <section id={id} className="py-20 px-6">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center animate-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Work Experience
      </h2>
      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <div key={idx} className="simple-experience-card bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 animate-in">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{exp.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-300 mb-1">{exp.role}</h3>
                <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-3">📅 {exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Education Section
const EducationSection = ({ id, education }) => (
  <section id={id} className="py-20 px-6 bg-slate-950/30">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center animate-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="simple-education-card bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 animate-in">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{edu.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-300 mb-1">{edu.degree}</h3>
                <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-gray-400 mb-1">📍 {edu.location}</p>
                <p className="text-gray-400">📅 {edu.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Resume Section
const ResumeSection = ({ id, resumeUrl }) => (
  <section id={id} className="py-20 px-6">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-bold mb-8 animate-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Resume
      </h2>
      <div className="simple-resume-card bg-slate-900/70 backdrop-blur-sm rounded-xl p-12 border border-purple-500/20 animate-in">
        <FileText size={64} className="mx-auto mb-6 text-purple-400" />
        <p className="text-gray-300 text-lg mb-8">
          Download my resume to learn more about my skills, experience, and qualifications.
        </p>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="simple-resume-button inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg transition-all"
        >
          <FileText size={24} /> Download Resume
        </a>
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = ({ id, contact }) => (
  <section id={id} className="py-20 px-6 bg-slate-950/30">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center animate-in bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <div className="simple-contact-card bg-slate-900/70 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 animate-in">
        <p className="text-gray-300 text-lg text-center mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${contact.email}`} className="simple-contact-button flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all">
            <Mail size={20} /> Email
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="simple-contact-button flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all">
            <Github size={20} /> GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="simple-contact-button flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href={contact.portfolio} target="_blank" rel="noopener noreferrer" className="simple-contact-button flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-all">
            <ExternalLink size={20} /> Portfolio
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = ({ name }) => (
  <footer className="bg-slate-950 border-t border-purple-500/20 py-8 px-6">
    <div className="container mx-auto text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

// Main App
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'resume', 'contact'];
      let currentSection = 'home';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = document.querySelectorAll('.animate-in');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-x-hidden">
      <style>{`
        .animate-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-active {
          opacity: 1;
          transform: translateY(0);
        }
        .project-card { 
          transition: all 0.4s ease; 
        }
        .project-card:hover { 
          transform: translateY(-10px) scale(1.02) rotate(2deg); 
          box-shadow: 0 25px 50px rgba(139, 92, 246, 0.5); 
        }
        .skill-item { 
          transition: all 0.3s ease; 
        }
        .skill-item:hover { 
          transform: translateX(10px); 
          background: rgba(139, 92, 246, 0.2); 
        }

        /* New Hero Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes titlePop {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .hero-title {
          animation: titlePop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        .typing-text {
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          animation: typing 2s steps(20) 0.5s forwards, fadeInUp 1s ease-out forwards;
        }

        @keyframes buttonPop {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        .button-pop {
          animation: buttonPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        .button-pop:nth-child(1) { animation-delay: 1.5s; opacity: 0; }
        .button-pop:nth-child(2) { animation-delay: 1.7s; opacity: 0; }
        .button-pop:nth-child(3) { animation-delay: 1.9s; opacity: 0; }

        @keyframes pulseGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(167, 139, 250, 1), 0 0 30px rgba(167, 139, 250, 0.8);
          }
        }
        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        /* Floating particles */
        .floating-particle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.4));
          animation: floatParticle 20s infinite;
        }
        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(100px, -100px) scale(1.2); opacity: 0.5; }
          50% { transform: translate(-50px, -200px) scale(0.8); opacity: 0.4; }
          75% { transform: translate(-150px, -100px) scale(1.1); opacity: 0.6; }
        }
        .particle-1 { width: 80px; height: 80px; top: 20%; left: 10%; animation-delay: 0s; }
        .particle-2 { width: 60px; height: 60px; top: 60%; left: 80%; animation-delay: 4s; }
        .particle-3 { width: 100px; height: 100px; top: 40%; left: 70%; animation-delay: 2s; }
        .particle-4 { width: 40px; height: 40px; top: 80%; left: 20%; animation-delay: 6s; }
        .particle-5 { width: 70px; height: 70px; top: 30%; left: 50%; animation-delay: 3s; }

        /* Avatar pulse */
        .hero-avatar {
          box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
          animation: float 3s ease-in-out infinite, avatarPulse 2s infinite;
        }
        @keyframes avatarPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 30px rgba(139, 92, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
          }
        }

        /* About Section - Simple Animations */
        .simple-about-card {
          transition: all 0.3s ease;
        }
        .simple-about-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
        }

        .simple-stat-card {
          transition: all 0.3s ease;
        }
        .simple-stat-card:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(139, 92, 246, 0.3);
        }

        .simple-tech-badge {
          transition: all 0.3s ease;
        }
        .simple-tech-badge:hover {
          transform: translateY(-3px);
          border-color: rgba(139, 92, 246, 0.8);
          box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
        }

        /* Skills Section - Simple Animations */
        .simple-skill-card {
          transition: all 0.3s ease;
        }
        .simple-skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
        }

        .skill-icon-box {
          transition: all 0.3s ease;
        }
        .simple-skill-card:hover .skill-icon-box {
          transform: scale(1.1);
        }

        .simple-skill-item {
          transition: all 0.3s ease;
        }
        .simple-skill-item:hover {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateX(5px);
        }

        /* Experience Section - Simple Animations */
        .simple-experience-card {
          transition: all 0.3s ease;
        }
        .simple-experience-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
        }

        /* Education Section - Simple Animations */
        .simple-education-card {
          transition: all 0.3s ease;
        }
        .simple-education-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
        }

        /* Resume Section - Simple Animations */
        .simple-resume-card {
          transition: all 0.3s ease;
        }
        .simple-resume-card:hover {
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);
        }

        .simple-resume-button {
          transition: all 0.3s ease;
        }
        .simple-resume-button:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(139, 92, 246, 0.5);
        }

        /* Contact Section - Simple Animations */
        .simple-contact-card {
          transition: all 0.3s ease;
        }
        .simple-contact-card:hover {
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);
        }

        .simple-contact-button {
          transition: all 0.3s ease;
        }
        .simple-contact-button:hover {
          transform: scale(1.05);
        }
      `}</style>
      
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all" style={{ width: `${scrollProgress}%` }}></div>
      
      <Header activeSection={activeSection} onScrollToSection={scrollToSection} />

      <main>
        <HeroSection id="home" resumeData={RESUME_DATA} onScrollToSection={scrollToSection} />
        <AboutSection id="about" />
        <ProjectsSection id="projects" projects={PROJECTS} />
        <SkillsSection id="skills" skillCategories={SKILL_CATEGORIES} />
        <ExperienceSection id="experience" experience={EXPERIENCE} />
        <EducationSection id="education" education={EDUCATION} />
        <ResumeSection id="resume" resumeUrl={RESUME_DATA.contact.resume} />
        <ContactSection id="contact" contact={RESUME_DATA.contact} />
      </main>

      <Footer name={RESUME_DATA.name} />
    </div>
  );
}
