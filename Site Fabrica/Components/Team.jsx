import "./Team.css";

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="team-header">
        <div className="team-container">
          <h1 className="team-title">
            <span className="title-orange">NOSSA</span>{" "}
            <span className="title-dark">EQUIPE</span>
          </h1>

          {/* Coordenador em destaque */}
          <div className="coordinator-card">
            <div className="member-photo coordinator-photo">
              <img src="/Site-Fabrica/placeholder-avatar.svg" alt="Ismayle Santos" />
            </div>
            <div className="member-info">
              <h3 className="member-name">ISMAYLE SANTOS</h3>
              <p className="member-role">COORDENADOR</p>
              <div className="member-social">
                <a href="https://www.linkedin.com/in/ismayle-de-sousa-santos-8b769620/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <img src="/Site-Fabrica/linkedin-icon.svg" alt="LinkedIn" />
                </a>
                <a href="http://lattes.cnpq.br/4278565937358466" target="_blank" rel="noopener noreferrer" className="social-link lattes">
                  <img src="/Site-Fabrica/Lattes.png" alt="Lattes" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-members">
        <div className="team-container">
          <div className="members-grid">
            {/* Primeira linha */}
            <div className="member-card">
              <div className="member-photo">
                <img src="/Site-Fabrica/placeholder-avatar.svg" alt="Wallison" />
              </div>
              <div className="member-info">
                <h3 className="member-name">WALLISON AQUINO</h3>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/wallison-aquino-5ab2931aaq/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <img src="/Site-Fabrica/linkedin-icon.svg" alt="LinkedIn" />
                  </a>
                  <a href="http://lattes.cnpq.br/7204284995879329" target="_blank" rel="noopener noreferrer" className="social-link lattes">
                    <img src="/Site-Fabrica/Lattes.png" alt="Lattes" />
                  </a>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="member-photo">
                <img src="/Site-Fabrica/placeholder-avatar.svg" alt="Pedro" />
              </div>
              <div className="member-info">
                <h3 className="member-name">PEDRO HENRIQUE</h3>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/pedro-henrique-rocha-dos-santos-nonato-a71802227/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <img src="/Site-Fabrica/linkedin-icon.svg" alt="LinkedIn" />
                  </a>
                  <a href="http://lattes.cnpq.br/2465649502211452" target="_blank" rel="noopener noreferrer" className="social-link lattes">
                    <img src="/Site-Fabrica/Lattes.png" alt="Lattes" />
                  </a>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="member-photo">
                <img src="/Site-Fabrica/placeholder-avatar.svg" alt="Letícia" />
              </div>
              <div className="member-info">
                <h3 className="member-name">LETÍCIA CARNEIRO</h3>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/let%C3%ADcia-carneiro-61b50821a/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <img src="/Site-Fabrica/linkedin-icon.svg" alt="LinkedIn" />
                  </a>
                  <a href="http://lattes.cnpq.br/0529063511031444" target="_blank" rel="noopener noreferrer" className="social-link lattes">
                    <img src="/Site-Fabrica/Lattes.png" alt="Lattes" />
                  </a>
                </div>
              </div>
            </div>

            {/* Segunda linha */}
            <div className="member-card">
              <div className="member-photo">
                <img src="/Site-Fabrica/placeholder-avatar.svg" alt="Wesley" />
              </div>
              <div className="member-info">
                <h3 className="member-name">WESLEY MACIEL</h3>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/wesley-maciel-975322170/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <img src="/Site-Fabrica/linkedin-icon.svg" alt="LinkedIn" />
                  </a>
                  <a href="http://lattes.cnpq.br/9741752086582194" target="_blank" rel="noopener noreferrer" className="social-link lattes">
                    <img src="/Site-Fabrica/Lattes.png" alt="Lattes" />
                  </a>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="member-photo">
                <img
                  src="/Site-Fabrica/placeholder-avatar.svg"
                  alt="Hidelbrando"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">HIDELBRANDO ISRAEL</h3>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/hildebrando-israel/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <img src="/Site-Fabrica/linkedin-icon.svg" alt="LinkedIn" />
                  </a>
                  <a href="http://lattes.cnpq.br/5089004502145919" target="_blank" rel="noopener noreferrer" className="social-link lattes">
                      <img src="/Site-Fabrica/Lattes.png" alt="Lattes" />
                  </a>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="member-photo">
                <img src="/Site-Fabrica/placeholder-avatar.svg" alt="Larissa" />
              </div>
              <div className="member-info">
                <h3 className="member-name">LARISSA KELLY</h3>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/lari-kelly/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <img src="/Site-Fabrica/linkedin-icon.svg" alt="LinkedIn" />
                  </a>
                  <a href="http://lattes.cnpq.br/6911951105227474" target="_blank" rel="noopener noreferrer" className="social-link lattes">
                    <img src="/Site-Fabrica/Lattes.png" alt="Lattes" />
                  </a>
                </div>
              </div>
            </div>

            {/* Terceira linha - centralizada */}
            <div className="member-card center-card">
              <div className="member-photo">
                <img
                  src="/Site-Fabrica/placeholder-avatar.svg"
                  alt="GABRIEL PINHEIRO"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">GABRIEL PINHEIRO</h3>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/gbrl-pnhr/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <img src="/Site-Fabrica/linkedin-icon.svg" alt="LinkedIn" />
                  </a>
                  <a href="http://lattes.cnpq.br/1708943350538903" target="_blank" rel="noopener noreferrer" className="social-link lattes">
                    <img src="/Site-Fabrica/Lattes.png" alt="Lattes" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
