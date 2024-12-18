import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Twitter, Instagram,  ExternalLink, Home, FolderGit, BookOpen, Briefcase, Mail, Image } from 'lucide-react';
import Typed from 'typed.js';


const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const options = {
      strings: ['Nilesh Kanti', 'Web Dev', 'Devops'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('#typed-name', options);

    return () => {
      typed.destroy();
    };
  }, []);



  const projects = [
    {
      title: "Nivaran Health",
      description: "AI-based Healthcare App for disease prediction using ML/DL models",
      tech: "HTML, TailwindCSS, LeafletJS, VanillaJS, Gemini API, Flask ML/DL",
      date: "September 2024",
      link: "https://health-tech-nivaran.vercel.app",
      image: "projects/nivaran.png?height=200&width=300"
    },
    {
      title: "Farm_Health",
      description: "Platform for farmers using neural networks to predict plant diseases",
      tech: "HTML, CSS, Javascript, TensorFlow, ScikitLearn, Pandas, FastAPI, Keras",
      date: "June 2024",
      link: "https://github.com/kantinilesh/ACM_FarmHealth",
      image: "projects/farmhealth.jpg?height=200&width=300"
    },
    {
      title: "SUNSCOPE",
      description: "Solar energy adoption platform using YOLO v11 for rooftop analysis",
      tech: "Python, YOLO, Google Maps API",
      date: "September 2024 - Present",
      link: "https://github.com/kantinilesh/SUNSCOPE_FINAL",
      image: "projects/sunscope.png?height=200&width=300"
    },
    {
      title: "React Weather App",
      description: "Get real time weather with you City name.",
      tech: "Reactjs, TailwindCSS, Axios, OpenweatherAPI",
      date: "June 2024",
      link: "https://weather-dashboard-6jmn.vercel.app",
      image: "projects/weather.png?height=200&width=300"
    },
  ];

  const experience = [
    {
      role: "Principal Investigator",
      company: "HEALLY, North Carolina, USA",
      duration: "Oct 2024 – Present",
      logo: "/company-logos/heally.png",
      description: "Building our new startup 🚀 "
    },
    {
      role: "Member",
      company: "Google Developers Group Chennai",
      duration: "December 2023 – Present",
      logo: "/company-logos/gdg.png",
      description: "Engaged in developer-focused events and workshops, enhancing skills in Google technologies."
    },
    {
      role: "Community Builder",
      company: "Amazon Web Services",
      duration: "July 2024 – Present",
      logo: "/skill-logos/aws.svg",
      description: "Help and grow with Amazon Web Services to connect and fill this world with positive vibes of the community."
    },
    {
      role: "Technical Team Member",
      company: "ACM SRMSIGKDD",
      duration: "June 2024 - Present",
      logo: "/company-logos/acm.png",
      description: "Contributed to technical projects including web dev and machine learning initiatives."
    },
    {
      role: "Summer Internship",
      company: "MS Azure",
      duration: "January 2024 – May 2024",
      logo: "/company-logos/azure.png",
      description: "Gained hands-on experience in deploying and managing cloud-based applications."
    },
    {
      role: "Application Dev Team",
      company: "Codenex SRMIST",
      duration: "November 2024 – Present",
      logo: "/company-logos/codenex.jpeg",
      description: "Contributing with my Flutter and Dart skills"
    },
  ];

  const skills = [
    { name: "JavaScript", logo: "/skill-logos/javascript.svg" },
    { name: "Python", logo: "/skill-logos/python.svg"},
    { name: "Java", logo: "/skill-logos/java.svg"},
    { name: "C++", logo: "/skill-logos/cpp.svg"},
    { name: "Dart", logo: "/skill-logos/dart.svg"},
    { name: "ReactJS", logo: "/skill-logos/react.svg",},
    { name: "Flutter", logo: "/skill-logos/flutter.svg"},
    { name: "Tailwind CSS", logo: "/skill-logos/tailwind.svg"},
    { name: "MySQL", logo: "/skill-logos/mysql.svg"},
    { name: "Git", logo: "/skill-logos/git.svg"},
    { name: "AWS", logo: "/skill-logos/aws.svg"},
    { name: "Ms Azure", logo: "/skill-logos/azure.svg"},
    { name: "Solidity", logo: "/skill-logos/solidity.svg"},
    
  ];

  const gallery = [
    {
      title: "Image 1",
      url: "/gallery/cjb.jpeg",
      description: "baad me update karunga kal aana"
    },
    {
      title: "Image 2",
      url: "/gallery/cjb.jpeg",
      description: "O stree kal aana"
    },
    
  ];

  const HomePage = () => (
    <div className="animate-fadeIn">
      {/* Profile Image Section */}
      <div className="w-full flex justify-center mb-5">
        <div className="w-40 h-40 ">
          <img
            src="/profile-image.svg"
            alt="Nilesh Kanti"
            className="w-full h-full object-cover scale-150"
          />
        </div>
      </div>


    
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4"><u>About Me</u></h2>
        <p className="text-lg">
        I am a web developer with three years of experience in HTML, CSS, and JavaScript, with a strong foundation in data structures, object-oriented programming, and C++. 
        Recently, I've been focusing on cross-platform app development using Flutter and Dart, while also deepening my knowledge of cloud technologies 
        and exploring the blockchain world. My experience includes active roles with Google Developers Group Chennai and I am  also the  P͟r͟i͟n͟c͟i͟p͟a͟l͟ ͟I͟n͟v͟e͟s͟t͟i͟g͟a͟t͟o͟r͟  in HEALLY, a startup which aims to provide eductaion to all, currently i am worwking on Heally AI and as a Backend Software Engineer.
        <br></br>
        During a summer internship with Microsoft Azure, I gained valuable hands-on experience 
        deploying and managing applications in cloud environments. 
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4"><u>Tools I use</u> </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex flex-col items-center justify-center gap-2`}
            >
              <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
              <span>{skill.name}</span>
              
              </div>
          
          ))}
        </div>
      </section>
    </div>
  );

  const ProjectsPage = () => (
  <div className="animate-fadeIn">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="font-bold mb-2">{project.title}</h3>
          <p className="text-sm mb-2">{project.description}</p>
          <p className="text-xs text-gray-500 mb-2">{project.tech}</p>
          <p className="text-xs text-gray-500 mb-4">{project.date}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
          >
            View Project <ExternalLink size={16} />
          </a>
        </div>
      ))}
    </div>

    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold relative inline-block">
        More to Come
        <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out" />
      </h2>
    </div>

    <style jsx>{`
      h2:hover span {
        transform: scaleX(1);
      }
    `}</style>
  </div>
);


  const ExperiencePage = () => (

    <div className="animate-fadeIn">
    <div className="grid gap-6">
      {experience.map((exp, index) => (
        <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center gap-4`}>
          <div className="w-16 h-16  flex items-center justify-center">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
          </div>
          <div>
            <h3 className="font-bold">{exp.role}</h3>
            <p className="font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="text-sm mt-2">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );

  const GalleryPage = () => (

    <div className="animate-fadeIn">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {gallery.map((item, index) => (
        <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg transform hover:scale-105 transition-transform duration-300`}>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="font-bold mb-2">{item.title}</h3>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
      </div>
    </div>
  );

  const ContactPage = ({ darkMode }) => {
    return (
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h2 className="text-xl font-bold mb-6">Contact Me</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Email</p>
            <a href="mailto:kantinilesh2312@gmail.com" className="text-blue-500">
              kantinilesh2312@gmail.com
            </a>
          </div>
          <div>
            <p className="font-medium">Location</p>
            <p>Chennai, India</p>
          </div>
          <div>
            <p className="font-medium">Social Media</p>
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com/in/nileshkanti" target="_blank" rel="noopener noreferrer">
                <Linkedin className="hover:text-blue-500" />
              </a>
              <a href="https://github.com/kantinilesh" target="_blank" rel="noopener noreferrer">
                <Github className="hover:text-gray-400" />
              </a>
              <a href="https://twitter.com/ihatedsa" target="_blank" rel="noopener noreferrer">
                <Twitter className="hover:text-blue-400" />
              </a>
              <a href="https://instagram.com/nilxhh" target="_blank" rel="noopener noreferrer">
                <Instagram className="hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="flex items-center justify-center">
            Made with 
            <span className="mx-1 animate-bounce">❤️</span> 
            by Nilesh
          </p>
          <p className="flex items-center justify-center mt-2">
            using
            <img src="skill-logos/react.svg" alt="React Logo" className="w-6 h-6 ml-2" />
            <img src="skill-logos/vite.svg" alt="Vite Logo" className="w-6 h-6 ml-2" />
          </p>
          {/* Spotify Embed */}
          <div className="mt-6 flex justify-center">
            <iframe 
              src="https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe"
              width="100%" 
              height="80" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded-lg "
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage darkMode={darkMode} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className={`fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-opacity-95 backdrop-filter backdrop-blur-lg ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} transition-colors duration-300 border-b`}>
        <h1 className="text-2xl font-bold">
          <span id="typed-name"></span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <a href="https://linkedin.com/in/nileshkanti" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-blue-500" />
            </a>
            <a href="https://github.com/kantinilesh" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-gray-400" />
            </a>
            <a href="https://twitter.com/ihatedsa" target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-blue-400" />
            </a>
            <a href="https://instagram.com/nilxhh" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-pink-500" />
            </a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-700"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-20 pb-8">
        {renderPage()}
      </main>

      <nav className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-2 rounded-full shadow-lg`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('home')}
            className={`p-2 rounded-full ${currentPage === 'home' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Home page"
          >
            <Home size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('projects')}
            className={`p-2 rounded-full ${currentPage === 'projects' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Projects page"
          >
            <FolderGit size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('experience')}
            className={`p-2 rounded-full ${currentPage === 'experience' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Experience page"
          >
            <Briefcase size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('gallery')}
            className={`p-2 rounded-full ${currentPage === 'gallery' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Gallery page"
          >
            <Image size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`p-2 rounded-full ${currentPage === 'contact' ? 'bg-blue-500 text-white' : ''}`}
            aria-label="Go to Contact page"
          >
            <Mail size={20} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Portfolio;

