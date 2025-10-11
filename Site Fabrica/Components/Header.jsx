import "./Header.css";
import Background from "../src/assets/Background.jpg";

export default function Header() {
  return (
    <header id="home" className="header">
      {/* Background */}
      <img src={Background} alt="Background" className="header-bg" />
      <div className="header-overlay"></div>

      {/* Container */}
      <div className="header-container">
        
        {/* Logos institucionais */}
        <div className="institution-logos">
          <a href="https://www.uece.br/" target="_blank" rel="noopener noreferrer">
            <img src="../src/assets/logo_uece.png" alt="UECE" className="inst-logo" />
          </a>
          <a href="https://gesaduece.com.br/pt" target="_blank" rel="noopener noreferrer">
            <img src="../src/assets/logo_gesad.png" alt="GESAD" className="inst-logo" />
          </a>
        </div>

        {/* Conteúdo principal */}
        <div className="hero-section">
          <div className="logo-section">
            <img src="../src/assets/logo_fabrica-removebg-preview.png" alt="Fábrica de Testadores" className="main-logo" />
          </div>
          
          <div className="text-section">
            <h1 className="hero-title">FÁBRICA DE TESTADORES</h1>
            <p className="hero-subtitle">Projeto de Extensão Universitária</p>
            <p className="hero-description">
              Formando profissionais especializados em teste de software
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}
