import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-container">
          
          
          <div className="footer-grid">

            {/* Coluna 1 - Contatos */}
            <div className="footer-column">
              <h3 className="column-title">CONTATOS</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <a href="mailto:fabrica.testadores@uece.br" className="contact-link">
                    fabrica.testadores@uece.br
                  </a>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <p>Av. Dr. Silas Munguba, 1700<br />
                    Itaperi, Fortaleza - CE<br />
                    CEP: 60714-903</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2 - Parcerias */}
            <div className="footer-column">
              <h3 className="column-title">PARCERIAS</h3>
              <div className="partners-list">
                <div className="partner-item">
                  <a href="https://www.great.ufc.br/" target="_blank" rel="noopener noreferrer">
                    <img src="/Site-Fabrica/great.png" alt="GREat" className="partner-logo" />
                  </a>
                </div>
                <div className="partner-item">
                  <a href="http://rsi.dc.ufc.br/" target="_blank" rel="noopener noreferrer">
                    <img src="/Site-Fabrica/Residencia.png" alt="Residência em Segurança da Informação" className="partner-logo" />
                  </a>
                </div>
                <div className="partner-item">
                  <a href="https://www.uece.br/proplan/detic/" target="_blank" rel="noopener noreferrer">
                    <img src="/Site-Fabrica/detic.png" alt="DETIC" className="partner-logo" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright-content">
            <p>&copy; 2025 Fábrica de Testadores - UECE. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
