import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaBriefcase, FaDownload, FaLinkedin, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import "./App.css";

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Inicializar AOS y modo oscuro
  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Lógica para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const headerBottom = header.getBoundingClientRect().bottom;
        setIsHeaderVisible(headerBottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para descargar el CV como PDF
  const downloadPDF = () => {
    const element = document.getElementById("cv-content");
    const options = {
      margin: 10,
      filename: "CV_Pablo_Hamilton.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, logging: true, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: "avoid-all" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <ParallaxProvider>
      <div className="App">
        {/* Barra fija en la parte superior */}
        <div className={`navbar ${!isHeaderVisible ? "visible" : ""}`}>
          <span>CV Hamilton</span>
          <div className="navbar-buttons">
            <button onClick={downloadPDF} className="download-button">
              <FaDownload className="download-icon" /> Descargar PDF
            </button>
          </div>
        </div>

        {/* Encabezado con foto de perfil */}
        <header>
          <div className="profile-container">
            <img src="/profile.jpg" alt="Pablo Ernesto Pérez Hamilton" className="profile-img" />
            <div className="header-text">
              <h1>Pablo Ernesto Pérez Hamilton</h1>
              <p>Desarrollador Full Stack | Especialista en Aplicaciones Web y APIs</p>
            </div>
          </div>
        </header>

        {/* Efecto Parallax con react-scroll-parallax */}
        <ParallaxBanner>
        </ParallaxBanner>

        {/* Contenido principal en dos columnas */}
        <div id="cv-content" className="container">
          {/* Columna izquierda (ancha) */}
          <div className="left-column">
            <section className="profile-section" data-aos="fade-up">
              <h2>Perfil Profesional</h2>
              <div className="profile-content">
                <p>
                  Soy un <strong>Desarrollador Full Stack</strong> con más de <strong>4 años de experiencia</strong> en el desarrollo de aplicaciones web y APIs. Mi enfoque principal es crear soluciones eficientes y escalables que resuelvan problemas reales, utilizando tecnologías modernas como:
                </p>
                <ul className="tech-list">
                  <li><strong>React</strong> y <strong>Node.js</strong> para el desarrollo frontend y backend.</li>
                  <li><strong>Python</strong> y <strong>PHP</strong> para aplicaciones robustas y dinámicas.</li>
                  <li><strong>Bases de datos relacionales</strong> como MySQL y PostgreSQL.</li>
                </ul>
                <p>
                  Me apasiona la <strong>automatización de procesos</strong> y la creación de herramientas que mejoren la productividad. Busco contribuir en proyectos desafiantes donde pueda aplicar mis habilidades técnicas y seguir creciendo profesionalmente.
                </p>
              </div>
            </section>

            <section className="experience-section" data-aos="fade-up">
              <h2>Experiencia Profesional</h2>
              <div className="experience-item">
                <div className="experience-header">
                  <FaBriefcase className="experience-icon" />
                  <div className="experience-title">
                    <h3>Desarrollador Full Stack</h3>
                    <p>2019 - Actualidad</p>
                  </div>
                </div>
                <ul className="experience-details">
                  <li>
                    <strong>Desarrollo de aplicaciones web</strong> utilizando tecnologías como React, Node.js, Python y PHP.
                  </li>
                  <li>
                    <strong>Creación de APIs RESTful</strong> para integración con sistemas externos, mejorando la interoperabilidad entre plataformas.
                  </li>
                  <li>
                    <strong>Diseño y mantenimiento</strong> de bases de datos relacionales (MySQL, PostgreSQL), optimizando el rendimiento y la escalabilidad.
                  </li>
                  <li>
                    <strong>Colaboración en equipos ágiles</strong>, participando en reuniones de planificación, revisiones de código y despliegues continuos.
                  </li>
                </ul>
              </div>
            </section>

            {/* Formación Académica */}
            <section data-aos="fade-up">
              <h2>Formación Académica</h2>
              <ul>
                <li>
                  <strong>Ingeniería Nuclear y Energética</strong>, Universidad de la Habana (2022)<br />
                  - Proyecto final: "Optimización de sistemas energéticos utilizando Python".
                </li>
              </ul>
            </section>
          </div>

          <div className="right-column">
            {/* Habilidades */}
            <section data-aos="fade-up">
              <h2>Habilidades Técnicas</h2>
              <ul className="skills-list">
                <li><strong>Lenguajes de Programación:</strong> Python, JavaScript, PHP, Java, C#.</li>
                <li><strong>Tecnologías Web:</strong> React, Node.js, Express, HTML5, CSS, Laravel.</li>
                <li><strong>Bases de Datos:</strong> MySQL, PostgreSQL.</li>
                <li><strong>Herramientas:</strong> Git, Linux, Docker.</li>
              </ul>
            </section>

            {/* Idiomas */}
            <section data-aos="fade-up">
              <h2>Idiomas</h2>
              <ul>
                <li><strong>Español:</strong> Nativo.</li>
                <li><strong>Inglés:</strong> Nivel intermedio (B1) – Capacidad para leer y escribir documentación técnica.</li>
              </ul>
            </section>

            {/* Contacto con iconos */}
            <section className="contact-info" data-aos="fade-up">
              <h2>Contacto</h2>
              <p>
                <FaMapMarkerAlt className="icon" /> <strong>Ubicación:</strong> Habana, Cuba
              </p>
              <p>
                <FaPhone className="icon" /> <strong>Teléfono:</strong> +5355942164
              </p>
              <p>
                <FaEnvelope className="icon" /> <strong>Email:</strong>{" "}
                <a href="mailto:qdftvc@gmail.com">qdftvc@gmail.com</a>
              </p>
              <p>
                <FaGithub className="icon" /> <strong>GitHub:</strong>{" "}
                <a href="https://github.com/hamiltoniano98" target="_blank" rel="noopener noreferrer">
                  github.com/hamiltoniano98
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Pie de página */}
        <footer>
          <p>&copy; 2025 Pablo Ernesto Pérez Hamilton. Todos los derechos reservados.</p>
        </footer>
      </div>
    </ParallaxProvider>
  );
}

export default App;