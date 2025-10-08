import "./Header.css";
import Background from "../src/assets/Background.jpg";
import ShieldIcon from "../src/assets/shieldIcon.svg";
import ChecklistIcon from "../src/assets/clipboard.svg";
import GraduationIcon from "../src/assets/graduationHat.svg";

export default function Header() {
  return (
    <header id="home" className="header">
      <img src={Background} alt="Background" className="header-background" />

      <div className="header-logos">
        <div className="logo-uece">
          <div className="uece-text">
            <a
              href="https://www.uece.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../src/assets/logo_uece.png" alt="UECE" />
            </a>
          </div>
        </div>
        <div className="logo-gesad">
          <a
            href="https://gesaduece.com.br/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../src/assets/logo_gesad.png" alt="GESAD" />
          </a>
        </div>
      </div>

      <div className="header-content">
        <div className="header-main">
          <h1 className="main-title">FÁBRICA DE</h1>
          <h1 className="main-title">TESTADORES</h1>
          <h2 className="subtitle">PROJETO DE EXTENSÃO</h2>
        </div>

        <div className="header-icons">
          <div className="icon-item">
            <img src={ShieldIcon} alt="Segurança" className="icon" />
          </div>
          <div className="icon-item">
            <img src={ChecklistIcon} alt="Testes" className="icon" />
          </div>
          <div className="icon-item">
            <img src={GraduationIcon} alt="Educação" className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
}
