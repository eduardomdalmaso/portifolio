import { useState } from 'react'
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
  CheckCircle2
} from 'lucide-react'
import profileImg from './assets/profile.png'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  const projects = [
    {
      title: "Reconhecimento Automático de Placas (ALPR)",
      desc: "Desenvolvimento e treinamento de modelos de detecção de objetos (YOLO) para leitura e identificação de placas de veículos em tempo real com alta precisão e performance otimizada.",
      tags: ["Python", "YOLO", "OpenCV", "Golang", "PyTorch"],
      icon: <Terminal className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Streaming de Câmeras IP & Monitoramento",
      desc: "Sistema robusto de gerenciamento, cadastro e transmissão em tempo real de feeds de vídeo multi-câmera com baixa latência, integrando fluxos de imagem com inteligência artificial.",
      tags: ["Golang", "PHP", "RTSP", "WebRTC", "Docker"],
      icon: <Video className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "Modelos de Visão Computacional Customizados",
      desc: "Pipeline completo para coleta de datasets, treinamento e deploy de redes neurais para detecção de rostos, classificação de comportamentos e análise de imagem.",
      tags: ["Python", "TensorFlow", "YOLOv8", "Deep Learning"],
      icon: <Eye className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Integração & Otimização de APIs de Alta Performance",
      desc: "Construção de microsserviços integrados de alta eficiência, focando em processamento paralelo de dados analíticos e redução no tempo de resposta das requisições.",
      tags: ["Golang", "PHP", "Python", "REST APIs", "Redis"],
      icon: <Layers className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Processamento e Upload Otimizado de Arquivos",
      desc: "Serviço escalável para recepção, validação, compressão e upload seguro de arquivos e mídia em lote, integrado a sistemas de armazenamento e pipelines analíticos.",
      tags: ["PHP", "Golang", "SQL", "S3 Storage", "Sistemas Distribuídos"],
      icon: <Settings className="w-6 h-6 text-amber-400" />
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
    <>
      {/* Navigation Header */}
      <header className="header">
        <div className="container header-container">
          <a href="#home" className="logo">
            <span>&lt;</span>Eduardo M. Dalmaso<span>/&gt;</span>
          </a>
          
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">Sobre</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projetos</a></li>
            <li><a href="#contact" className="nav-link">Contato</a></li>
          </ul>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
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
            <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projetos</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contato</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container grid-2 hero-grid">
          <div>
            <div className="hero-subtitle">Engenheiro & Desenvolvedor Fullstack</div>
            <h1>Soluções inteligentes de software e Visão Computacional</h1>
            <p className="hero-desc">
              Especializado em otimização de sistemas, integrações robustas de APIs, análise de dados e treinamento de modelos de inteligência artificial aplicados à detecção visual.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Contratar Serviços <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-secondary">
                Ver Projetos
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-border">
              <img src={profileImg} alt="Eduardo M. Dalmaso" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container grid-2 about-grid">
          <div>
            <h2>Sobre Mim</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Sou Engenheiro Eletricista com forte base analítica, tendo me especializado em análise de dados e, posteriormente, consolidado minha carreira como desenvolvedor Fullstack. 
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Atuo no desenvolvimento de soluções escaláveis de backend e frontend usando PHP, Python e Golang. Possuo profunda experiência prática na aplicação de inteligência artificial voltada à visão computacional, incluindo configuração de redes de câmeras, otimização de latência de streaming e customização/treinamento de modelos de detecção (como YOLO) para identificação facial e leitura automática de placas (ALPR).
            </p>
            <p>
              Minha formação em engenharia me proporciona uma visão focada em resolução de problemas lógicos complexos, performance e arquitetura limpa de código.
            </p>
          </div>
          <div>
            <div className="about-stats">
              <div className="glass-panel stat-card">
                <div className="stat-number">
                  <Cpu size={32} style={{ marginBottom: '8px', color: 'var(--secondary)' }} />
                </div>
                <div className="stat-label">Engenharia Elétrica</div>
              </div>
              <div className="glass-panel stat-card">
                <div className="stat-number">
                  <Sparkles size={32} style={{ marginBottom: '8px', color: 'var(--primary)' }} />
                </div>
                <div className="stat-label">Visão Computacional</div>
              </div>
              <div className="glass-panel stat-card">
                <div className="stat-number">
                  <Code2 size={32} style={{ marginBottom: '8px', color: 'var(--accent)' }} />
                </div>
                <div className="stat-label">Desenvolvedor Fullstack</div>
              </div>
              <div className="glass-panel stat-card">
                <div className="stat-number">
                  <Flame size={32} style={{ marginBottom: '8px', color: '#f97316' }} />
                </div>
                <div className="stat-label">Otimização de Sistemas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2>Habilidades & Tecnologias</h2>
          
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div className="glass-panel skill-category-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <Code2 className="text-indigo-400" size={24} />
                <h3>Linguagens</h3>
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
                <h3>AI & Visão Computacional</h3>
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
                <h3>Especialidades</h3>
              </div>
              <div className="skill-list">
                {skills.filter(s => s.category === "Especialidades").map((skill, index) => (
                  <span key={index} className="skill-tag">{skill.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2>Casos de Uso & Soluções</h2>
          
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            {projects.map((project, index) => (
              <div key={index} className="glass-panel project-card">
                <div className="project-content">
                  <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                    {project.icon}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container grid-2 contact-grid">
          <div>
            <h2>Entre em Contato</h2>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem' }}>
              Precisa automatizar processos, integrar APIs robustas ou criar soluções sob medida com inteligência artificial e visão computacional? Vamos conversar sobre o seu projeto.
            </p>
            
            <div className="contact-info-list">
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
                  <h3>Mensagem enviada com sucesso!</h3>
                  <p>Agradeço o contato. Retornarei em breve.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className="form-input" 
                      placeholder="Seu nome completo" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="form-input" 
                      placeholder="seu.email@dominio.com" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      className="form-textarea" 
                      placeholder="Detalhes do seu projeto ou proposta..." 
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>
                    Enviar Mensagem <ArrowRight size={18} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Eduardo M. Dalmaso. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
