import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { 
  Mail, 
  Cpu, 
  Database, 
  Code2, 
  Layers, 
  Video, 
  ArrowRight, 
  Menu, 
  X, 
  Terminal, 
  Flame, 
  Settings,
  Sparkles,
  Eye,
  CheckCircle2,
  ExternalLink,
  Home,
  User,
  Activity
} from 'lucide-react'
import profileImg from './assets/profile.png'
import './App.css'

const translations = {
  pt: {
    navHome: "Início",
    navAbout: "Sobre",
    navSkills: "Skills",
    navProjects: "Projetos",
    navContact: "Contato",
    heroSubtitle: "Engenheiro & Desenvolvedor Fullstack",
    heroTitle: "Soluções inteligentes de software e Visão Computacional",
    heroDesc: "Especializado em otimização de sistemas, integrações robustas de APIs, análise de dados e treinamento de modelos de inteligência artificial aplicados à detecção visual.",
    heroCTA: "Contratar Serviços",
    heroViewProjects: "Ver Projetos",
    aboutTitle: "Sobre Mim",
    aboutPara1: "Sou Engenheiro Eletricista com forte base analítica, tendo me especializado em análise de dados e, posteriormente, consolidado minha carreira como desenvolvedor Fullstack.",
    aboutPara2: "Atuo no desenvolvimento de soluções escaláveis de backend e frontend usando PHP, Python e Golang. Possuo profunda experiência prática na aplicação de inteligência artificial voltada à visão computacional, incluindo configuração de redes de câmeras, otimização de latência de streaming e customização/treinamento de modelos de detecção (como YOLO) para identificação facial e leitura automática de placas (ALPR).",
    aboutPara3: "Minha formação em engenharia me proporciona uma visão focada em resolução de problemas lógicos complexos, performance e arquitetura limpa de código.",
    statEng: "Engenharia Elétrica",
    statVision: "Visão Computacional",
    statFullstack: "Desenvolvedor Fullstack",
    statOptimization: "Otimização de Sistemas",
    skillsTitle: "Habilidades & Tecnologias",
    skillsLang: "Linguagens",
    skillsAI: "AI & Visão Computacional",
    skillsSpec: "Especialidades",
    projectsTitle: "Casos de Uso & Soluções",
    contactTitle: "Entre em Contato",
    contactDesc: "Precisa automatizar processos, integrar APIs robustas ou criar soluções sob medida com inteligência artificial e visão computacional? Vamos conversar sobre o seu projeto.",
    contactFormName: "Nome",
    contactFormNamePl: "Seu nome completo",
    contactFormEmail: "E-mail",
    contactFormEmailPl: "seu.email@dominio.com",
    contactFormMsg: "Mensagem",
    contactFormMsgPl: "Detalhes do seu projeto ou proposta...",
    contactFormSubmit: "Enviar Mensagem",
    contactSuccess: "Mensagem enviada com sucesso!",
    contactSuccessSub: "Agradeço o contato. Retornarei em breve.",
    footerText: "Todos os direitos reservados.",
    companyInfo: "Eduardo Montovanelli Dalmaso - ME | CNPJ: 52.340.739/0001-46 | Emitimos Nota Fiscal",
    // Project specific translations
    proj1Title: "Reconhecimento Automático de Placas (ALPR)",
    proj1Desc: "Desenvolvimento e treinamento de modelos de detecção de objetos (YOLO) para leitura e identificação de placas de veículos em tempo real com alta precisão e performance otimizada.",
    proj2Title: "Streaming de Câmeras IP & Monitoramento",
    proj2Desc: "Sistema robusto de gerenciamento, cadastro e transmissão em tempo real de feeds de vídeo multi-câmera com baixa latência, integrando fluxos de imagem com inteligência artificial.",
    proj3Title: "Modelos de Visão Computacional Customizados",
    proj3Desc: "Pipeline completo para coleta de datasets, treinamento e deploy de redes neurais para detecção de rostos, classificação de comportamentos e análise de imagem.",
    proj4Title: "Integração & Otimização de APIs de Alta Performance",
    proj4Desc: "Construção de microsserviços integrados de alta eficiência, focando em processamento paralelo de dados analíticos e redução no tempo de resposta das requisições.",
    proj5Title: "Processamento e Upload Otimizado de Arquivos",
    proj5Desc: "Serviço escalável para recepção, validação, compressão e upload seguro de arquivos e mídia em lote, integrado a sistemas de armazenamento e pipelines analíticos."
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    heroSubtitle: "Engineer & Fullstack Developer",
    heroTitle: "Intelligent software solutions and Computer Vision",
    heroDesc: "Specialized in systems optimization, robust API integrations, data analysis, and training artificial intelligence models applied to visual detection.",
    heroCTA: "Hire Services",
    heroViewProjects: "View Projects",
    aboutTitle: "About Me",
    aboutPara1: "I am an Electrical Engineer with a strong analytical background, having specialized in data analysis and subsequently consolidated my career as a Fullstack developer.",
    aboutPara2: "I develop scalable backend and frontend solutions using PHP, Python, and Golang. I have deep practical experience in applying artificial intelligence to computer vision, including camera network configuration, streaming latency optimization, and customization/training of detection models (such as YOLO) for facial identification and Automatic License Plate Recognition (ALPR).",
    aboutPara3: "My engineering background provides me with a focus on resolving complex logical problems, performance, and clean code architecture.",
    statEng: "Electrical Engineering",
    statVision: "Computer Vision",
    statFullstack: "Fullstack Developer",
    statOptimization: "Systems Optimization",
    skillsTitle: "Skills & Technologies",
    skillsLang: "Languages",
    skillsAI: "AI & Computer Vision",
    skillsSpec: "Specialties",
    projectsTitle: "Use Cases & Solutions",
    contactTitle: "Get in Touch",
    contactDesc: "Need to automate processes, integrate robust APIs, or build custom solutions with artificial intelligence and computer vision? Let's talk about your project.",
    contactFormName: "Name",
    contactFormNamePl: "Your full name",
    contactFormEmail: "Email",
    contactFormEmailPl: "your.email@domain.com",
    contactFormMsg: "Message",
    contactFormMsgPl: "Details of your project or proposal...",
    contactFormSubmit: "Send Message",
    contactSuccess: "Message sent successfully!",
    contactSuccessSub: "Thank you for reaching out. I will get back to you shortly.",
    footerText: "All rights reserved.",
    companyInfo: "Eduardo Montovanelli Dalmaso - ME | CNPJ: 52.340.739/0001-46 | Invoices issued",
    // Project specific translations
    proj1Title: "Automatic License Plate Recognition (ALPR)",
    proj1Desc: "Development and training of object detection models (YOLO) for real-time vehicle plate reading and identification with high accuracy and optimized performance.",
    proj2Title: "IP Camera Streaming & Monitoring",
    proj2Desc: "Robust system for real-time management, registration, and transmission of multi-camera video feeds with low latency, integrating video streams with artificial intelligence.",
    proj3Title: "Custom Computer Vision Models",
    proj3Desc: "Complete pipeline for dataset collection, training, and deployment of neural networks for face detection, behavior classification, and image analysis.",
    proj4Title: "High-Performance API Integration & Optimization",
    proj4Desc: "Building highly efficient integrated microservices, focusing on parallel processing of analytical data and reducing response times.",
    proj5Title: "Optimized File Processing & Upload",
    proj5Desc: "Scalable service for batch receiving, validation, compression, and secure upload of files and media, integrated with storage systems and analytical pipelines."
  }
}

// Interactive background grid reveal component
function DetectionReveal() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Detect if mouse is already in window
    const handleFirstMove = () => {
      setIsHovered(true)
      document.removeEventListener('mousemove', handleFirstMove)
    }
    document.addEventListener('mousemove', handleFirstMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousemove', handleFirstMove)
    }
  }, [])

  return (
    <>
      <div 
        className="detection-bg-container"
        style={{
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`,
          '--spotlight-opacity': isHovered ? 1 : 0,
        } as React.CSSProperties}
      >
        <div className="detection-grid">
          {/* CAM 01 - Cameras / General Surveillance */}
          <div className="cam-feed">
            <img src="/cameras.png" alt="General Surveillance" className="cam-img" />
            <div className="cam-hud">
              <span className="cam-tag">CAM_01: GENERAL_SURVEILLANCE</span>
              <span className="cam-status live">LIVE</span>
            </div>
          </div>

          {/* CAM 02 - Pedestrians */}
          <div className="cam-feed">
            <img src="/pedestrians.jpg" alt="Pedestrian Crossing" className="cam-img" />
            <div className="cam-hud">
              <span className="cam-tag">CAM_02: CROSSWALK_EAST</span>
              <span className="cam-status live">LIVE</span>
            </div>
            <div className="bbox person" style={{ top: '35%', left: '25%', width: '15%', height: '50%' }}>
              <span className="bbox-label">[Pedestrian: 96%]</span>
            </div>
            <div className="bbox person" style={{ top: '40%', left: '48%', width: '12%', height: '45%' }}>
              <span className="bbox-label">[Pedestrian: 89%]</span>
            </div>
            <div className="bbox car" style={{ top: '55%', left: '70%', width: '22%', height: '35%' }}>
              <span className="bbox-label">[Car: 99%]</span>
            </div>
          </div>

          {/* CAM 03 - Robbery / Incident */}
          <div className="cam-feed">
            <img src="/robbery.jpg" alt="Incident Alert" className="cam-img" />
            <div className="cam-hud">
              <span className="cam-tag">CAM_03: SECURITY_LOBBY</span>
              <span className="cam-status warning">ALERT: UNUSUAL ACTIVITY</span>
            </div>
            <div className="bbox threat" style={{ top: '25%', left: '40%', width: '35%', height: '60%' }}>
              <span className="bbox-label">[Threat: 99% - INCIDENT]</span>
            </div>
            <div className="bbox person" style={{ top: '30%', left: '15%', width: '18%', height: '55%' }}>
              <span className="bbox-label">[Person: 95%]</span>
            </div>
          </div>

          {/* CAM 04 - Traffic */}
          <div className="cam-feed">
            <img src="/traffic.jpg" alt="Traffic Monitor" className="cam-img" />
            <div className="cam-hud">
              <span className="cam-tag">CAM_04: INTERSECTION_SOUTH</span>
              <span className="cam-status live">LIVE</span>
            </div>
            <div className="bbox car" style={{ top: '42%', left: '20%', width: '22%', height: '32%' }}>
              <span className="bbox-label">[Car: 95%]</span>
            </div>
            <div className="bbox car" style={{ top: '38%', left: '52%', width: '18%', height: '28%' }}>
              <span className="bbox-label">[Car: 91%]</span>
            </div>
            <div className="bbox truck" style={{ top: '25%', left: '75%', width: '20%', height: '45%' }}>
              <span className="bbox-label">[Truck: 88%]</span>
            </div>
          </div>
        </div>

        {/* Scan line sweeping across the background */}
        <div className="scan-line"></div>
      </div>

      {/* Spotlight Ring element to render overlay border and glow */}
      <div 
        className="spotlight-ring"
        style={{
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`,
          '--spotlight-opacity': isHovered ? 1 : 0,
        } as React.CSSProperties}
      />
    </>
  )
}

function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt')
  const [activePage, setActivePage] = useState<'home' | 'about' | 'skills' | 'projects' | 'contact'>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const t = translations[lang]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setErrorMessage('')

    if (!recaptchaToken) {
      setErrorMessage(lang === 'pt' ? 'Por favor, marque a caixa de verificação do Captcha.' : 'Please complete the Captcha verification.')
      setIsSending(false)
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US', {
          dateStyle: 'short',
          timeStyle: 'short',
        }),
        'g-recaptcha-response': recaptchaToken,
      },
      publicKey
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      setFormSubmitted(true)
      setIsSending(false)
      setFormData({ name: '', email: '', message: '' })
      setRecaptchaToken(null)
      recaptchaRef.current?.reset()
      setTimeout(() => {
        setFormSubmitted(false)
      }, 5000)
    })
    .catch((err) => {
      console.error('FAILED...', err)
      setErrorMessage(lang === 'pt' ? 'Erro ao enviar. Verifique se configurou as chaves corretas no arquivo .env.' : 'Error sending. Check if you configured the correct keys in the .env file.')
      setIsSending(false)
      setRecaptchaToken(null)
      recaptchaRef.current?.reset()
    })
  }

  const projects = [
    {
      title: t.proj1Title,
      desc: t.proj1Desc,
      tags: ["Python", "YOLO", "OpenCV", "Golang", "PyTorch"],
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      link: "https://github.com/eduardomdalmaso/ALPR_model",
      repo: "eduardomdalmaso/ALPR_model"
    },
    {
      title: t.proj2Title,
      desc: t.proj2Desc,
      tags: ["Golang", "PHP", "RTSP", "WebRTC", "Docker"],
      icon: <Video className="w-6 h-6 text-indigo-400" />,
      link: "https://github.com/eduardomdalmaso/fast_api-podman",
      repo: "eduardomdalmaso/fast_api-podman"
    },
    {
      title: t.proj3Title,
      desc: t.proj3Desc,
      tags: ["Python", "TensorFlow", "YOLOv8", "Deep Learning"],
      icon: <Eye className="w-6 h-6 text-purple-400" />,
      link: "https://github.com/eduardomdalmaso/face_D",
      repo: "eduardomdalmaso/face_D"
    },
    {
      title: t.proj4Title,
      desc: t.proj4Desc,
      tags: ["Golang", "PHP", "Python", "REST APIs", "Redis"],
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      link: "https://github.com/eduardomdalmaso/emendas_DA",
      repo: "eduardomdalmaso/emendas_DA"
    },
    {
      title: t.proj5Title,
      desc: t.proj5Desc,
      tags: ["PHP", "Golang", "SQL", "S3 Storage", "Sistemas Distribuídos"],
      icon: <Settings className="w-6 h-6 text-amber-400" />,
      link: "https://github.com/eduardomdalmaso/cartpole-ppo",
      repo: "eduardomdalmaso/cartpole-ppo"
    }
  ]

  const skills = [
    { name: "Python", category: "Linguagens" },
    { name: "Golang", category: "Linguagens" },
    { name: "PHP", category: "Linguagens" },
    { name: "SQL / PostgreSQL", category: "Linguagens" },
    { name: "JavaScript / TS", category: "Linguagens" },
    
    { name: "YOLO (v5, v8, v10)", category: "AI & Visão" },
    { name: "OpenCV", category: "AI & Visão" },
    { name: "Treinamento de Modelos", category: "AI & Visão" },
    { name: "Reconhecimento Facial / Placas", category: "AI & Visão" },
    { name: "Processamento de Vídeo", category: "AI & Visão" },
    
    { name: "Integração de APIs", category: "Especialidades" },
    { name: "Otimização de Algoritmos", category: "Especialidades" },
    { name: "Análise de Dados", category: "Especialidades" },
    { name: "Docker", category: "Especialidades" },
    { name: "Engenharia Elétrica (Hardware/IoT)", category: "Especialidades" }
  ]

  return (
    <div className="app-container">
      {/* Dynamic reveal overlay under the site */}
      <DetectionReveal />

      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <a href="#home" className="sidebar-logo" onClick={() => setActivePage('home')}>
          <span>&lt;</span>Eduardo M. Dalmaso<span>/&gt;</span>
        </a>

        <nav style={{ flexGrow: 1 }}>
          <ul className="sidebar-nav">
            <li>
              <button 
                className={`sidebar-link-btn ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => setActivePage('home')}
              >
                <Home size={18} /> {t.navHome}
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-link-btn ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => setActivePage('about')}
              >
                <User size={18} /> {t.navAbout}
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-link-btn ${activePage === 'skills' ? 'active' : ''}`}
                onClick={() => setActivePage('skills')}
              >
                <Cpu size={18} /> {t.navSkills}
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-link-btn ${activePage === 'projects' ? 'active' : ''}`}
                onClick={() => setActivePage('projects')}
              >
                <Activity size={18} /> {t.navProjects}
              </button>
            </li>
            <li>
              <button 
                className={`sidebar-link-btn ${activePage === 'contact' ? 'active' : ''}`}
                onClick={() => setActivePage('contact')}
              >
                <Mail size={18} /> {t.navContact}
              </button>
            </li>
          </ul>
        </nav>

        {/* Sidebar Footer containing CNPJ & Language Switch */}
        <div className="sidebar-footer">
          <div className="sidebar-lang-switch">
            <button 
              className={`lang-btn ${lang === 'pt' ? 'active' : ''}`}
              onClick={() => setLang('pt')}
            >
              PT
            </button>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Navbar Hamburger & Language Selector */}
        <div className="mobile-only-lang" style={{ display: 'none' }}>
          <button className={`lang-btn ${lang === 'pt' ? 'active' : ''}`} onClick={() => setLang('pt')}>PT</button>
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu glass-panel" style={{
            position: 'absolute',
            top: '70px',
            right: '24px',
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '20px',
            zIndex: 99
          }}>
            <button className={`sidebar-link-btn ${activePage === 'home' ? 'active' : ''}`} onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}>{t.navHome}</button>
            <button className={`sidebar-link-btn ${activePage === 'about' ? 'active' : ''}`} onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }}>{t.navAbout}</button>
            <button className={`sidebar-link-btn ${activePage === 'skills' ? 'active' : ''}`} onClick={() => { setActivePage('skills'); setMobileMenuOpen(false); }}>{t.navSkills}</button>
            <button className={`sidebar-link-btn ${activePage === 'projects' ? 'active' : ''}`} onClick={() => { setActivePage('projects'); setMobileMenuOpen(false); }}>{t.navProjects}</button>
            <button className={`sidebar-link-btn ${activePage === 'contact' ? 'active' : ''}`} onClick={() => { setActivePage('contact'); setMobileMenuOpen(false); }}>{t.navContact}</button>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        
        {/* Dynamic Pages switched via ActivePage State */}
        {activePage === 'home' && (
          <section className="page-enter" style={{ display: 'flex', alignItems: 'center', flexGrow: 1, padding: 0, border: 'none' }}>
            <div className="grid-2" style={{ alignItems: 'center', width: '100%' }}>
              <div>
                <div className="hero-subtitle">{t.heroSubtitle}</div>
                <h1>{t.heroTitle}</h1>
                <p className="hero-desc">{t.heroDesc}</p>
                <div className="hero-actions">
                  <a href="https://wa.me/5527999395171" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    {t.heroCTA} <ArrowRight size={18} />
                  </a>
                  <button onClick={() => setActivePage('projects')} className="btn-secondary">
                    {t.heroViewProjects}
                  </button>
                </div>
              </div>
              <div className="hero-image-wrapper">
                <div className="hero-image-border">
                  <img src={profileImg} alt="Eduardo M. Dalmaso" className="hero-img" />
                </div>
              </div>
            </div>
          </section>
        )}

        {activePage === 'about' && (
          <section className="page-enter" style={{ padding: 0, border: 'none' }}>
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <h2>{t.aboutTitle}</h2>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>{t.aboutPara1}</p>
                <p style={{ marginBottom: '1.5rem' }}>{t.aboutPara2}</p>
                <p>{t.aboutPara3}</p>
              </div>
              <div>
                <div className="about-stats">
                  <div className="glass-panel stat-card">
                    <div className="stat-number">
                      <Cpu size={32} style={{ marginBottom: '8px', color: 'var(--secondary)' }} />
                    </div>
                    <div className="stat-label">{t.statEng}</div>
                  </div>
                  <div className="glass-panel stat-card">
                    <div className="stat-number">
                      <Sparkles size={32} style={{ marginBottom: '8px', color: 'var(--primary)' }} />
                    </div>
                    <div className="stat-label">{t.statVision}</div>
                  </div>
                  <div className="glass-panel stat-card">
                    <div className="stat-number">
                      <Code2 size={32} style={{ marginBottom: '8px', color: 'var(--accent)' }} />
                    </div>
                    <div className="stat-label">{t.statFullstack}</div>
                  </div>
                  <div className="glass-panel stat-card">
                    <div className="stat-number">
                      <Flame size={32} style={{ marginBottom: '8px', color: '#f97316' }} />
                    </div>
                    <div className="stat-label">{t.statOptimization}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activePage === 'skills' && (
          <section className="page-enter" style={{ padding: 0, border: 'none' }}>
            <h2>{t.skillsTitle}</h2>
            <div className="grid-3" style={{ marginTop: '2rem' }}>
              <div className="glass-panel skill-category-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <Code2 className="text-indigo-400" size={24} />
                  <h3>{t.skillsLang}</h3>
                </div>
                <div className="skill-list">
                  {skills.filter(s => s.category === "Linguagens").map((skill, index) => (
                    <span key={index} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              <div className="glass-panel skill-category-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <Sparkles className="text-cyan-400" size={24} />
                  <h3>{t.skillsAI}</h3>
                </div>
                <div className="skill-list">
                  {skills.filter(s => s.category === "AI & Visão").map((skill, index) => (
                    <span key={index} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              <div className="glass-panel skill-category-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <Database className="text-purple-400" size={24} />
                  <h3>{t.skillsSpec}</h3>
                </div>
                <div className="skill-list">
                  {skills.filter(s => s.category === "Especialidades").map((skill, index) => (
                    <span key={index} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activePage === 'projects' && (
          <section className="page-enter" style={{ padding: 0, border: 'none' }}>
            <h2>{t.projectsTitle}</h2>
            <div className="grid-3" style={{ marginTop: '2rem' }}>
              {projects.map((project, index) => (
                <div key={index} className="glass-panel project-card">
                  <div className="project-content">
                    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      {project.icon}
                    </div>
                    <h3 className="project-title" style={{ marginBottom: '4px' }}>{project.title}</h3>
                    {project.repo && (
                      <div style={{ 
                        fontSize: '0.825rem', 
                        fontFamily: 'monospace', 
                        color: 'var(--secondary)', 
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        opacity: 0.9
                      }}>
                        <span>📁</span> {project.repo}
                      </div>
                    )}
                    <p className="project-desc">{project.desc}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    {project.link && (
                      <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                        >
                          {lang === 'pt' ? 'Ver no GitHub' : 'View on GitHub'} <ExternalLink size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activePage === 'contact' && (
          <section className="page-enter" style={{ padding: 0, border: 'none' }}>
            <div className="grid-2 contact-grid">
              <div>
                <h2>{t.contactTitle}</h2>
                <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem' }}>{t.contactDesc}</p>
                
                <div className="contact-info-list">
                  <a href="https://wa.me/5527999395171" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className="contact-item-text">
                      <h4>WhatsApp / Phone</h4>
                      <p>+55 27 999395171</p>
                    </div>
                  </a>

                  <a href="mailto:eduardomdalmaso@gmail.com" className="contact-item">
                    <div className="contact-icon-wrapper">
                      <Mail size={20} />
                    </div>
                    <div className="contact-item-text">
                      <h4>Email</h4>
                      <p>eduardomdalmaso@gmail.com</p>
                    </div>
                  </a>

                  <a href="https://linkedin.com/in/eduardo-m-dalmaso" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div className="contact-item-text">
                      <h4>LinkedIn</h4>
                      <p>linkedin.com/in/eduardo-m-dalmaso</p>
                    </div>
                  </a>

                  <a href="https://github.com/eduardomdalmaso" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                      </svg>
                    </div>
                    <div className="contact-item-text">
                      <h4>GitHub</h4>
                      <p>github.com/eduardomdalmaso</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="glass-panel contact-form">
                  {formSubmitted ? (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '40px 0',
                      textAlign: 'center',
                      gap: '12px'
                    }}>
                      <CheckCircle2 size={48} className="text-emerald-400" />
                      <h3>{t.contactSuccess}</h3>
                      <p>{t.contactSuccessSub}</p>
                    </div>
                  ) : (
                    <>
                      <div className="form-group">
                        <label htmlFor="name">{t.contactFormName}</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          className="form-input" 
                          placeholder={t.contactFormNamePl} 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">{t.contactFormEmail}</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          className="form-input" 
                          placeholder={t.contactFormEmailPl} 
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">{t.contactFormMsg}</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={5} 
                          value={formData.message} 
                          onChange={handleInputChange} 
                          className="form-textarea" 
                          placeholder={t.contactFormMsgPl} 
                          required
                        ></textarea>
                      </div>
                      <div className="form-group" style={{ margin: '15px 0', minHeight: '78px' }}>
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_SITE_KEY'}
                          onChange={(token) => setRecaptchaToken(token)}
                          onExpired={() => setRecaptchaToken(null)}
                          theme="dark"
                        />
                      </div>
                      {errorMessage && (
                        <div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px', fontFamily: 'monospace' }}>
                          ⚠️ {errorMessage}
                        </div>
                      )}
                      <button 
                        type="submit" 
                        className="btn-primary" 
                        style={{ marginTop: '8px', justifyContent: 'center' }}
                        disabled={isSending}
                      >
                        {isSending ? (lang === 'pt' ? 'Enviando...' : 'Sending...') : t.contactFormSubmit} 
                        <ArrowRight size={18} />
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Eduardo M. Dalmaso. {t.footerText}</p>
            <p style={{ fontSize: '0.8rem', marginTop: '8px', opacity: 0.8 }}>{t.companyInfo}</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
