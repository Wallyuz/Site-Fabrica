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
              href="https://www.great.ufc.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <div className="partner-logo">
                <img src="../src/assets/great.png" alt="GREat" />
              </div>
            </a>
          </div>

          {/* Residência em Segurança da Informação */}
          <div className="partner-item">
            <a
              href="http://rsi.dc.ufc.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <div className="partner-logo">
                <img
                  src="../src/assets/Residencia.png"
                  alt="Residência em Segurança da Informação"
                />
              </div>
            </a>
          </div>

          {/* DETIC */}
          <div className="partner-item">
            <a
              href="https://www.uece.br/proplan/detic/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <div className="partner-logo">
                <img src="../src/assets/detic.png" alt="DETIC" />
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
