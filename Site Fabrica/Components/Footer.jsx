import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">PARCERIAS</h2>

        <div className="partners-grid">
          {/* GREat */}
          <div className="partner-item">
            <a
              href="https://great.uece.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <div className="partner-logo">
                <img src="../src/assets/great.jpg" alt="GREat" />
              </div>
            </a>
          </div>

          {/* Residência em Segurança da Informação */}
          <div className="partner-item">
            <a
              href="https://residenciaseguranca.uece.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <div className="partner-logo">
                <img
                  src="../src/assets/Residencia.jpg"
                  alt="Residência em Segurança da Informação"
                />
              </div>
            </a>
          </div>

          {/* DETIC */}
          <div className="partner-item">
            <a
              href="https://detic.uece.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <div className="partner-logo">
                <img src="../src/assets/detic.jpg" alt="DETIC" />
              </div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            &copy; 2025 Fábrica de Testadores - UECE. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
