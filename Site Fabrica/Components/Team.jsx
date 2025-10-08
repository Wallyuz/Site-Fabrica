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
              <img src="../src/assets/team/ismayle.jpg" alt="Ismayle Santos" />
            </div>
            <div className="member-info">
              <h3 className="member-name">ISMAYLE SANTOS</h3>
              <p className="member-role">COORDENADOR</p>
              <div className="member-social">
                <a href="#" className="social-link linkedin">
                  <span>in</span>
                </a>
                <a href="#" className="social-link github">
                  <span>G</span>
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
                <img src="../src/assets/team/wallison.jpg" alt="Wallison" />
              </div>
              <div className="member-info">
                <h3 className="member-name">WALLISON</h3>
                <p className="member-role">BOLSISTA</p>
                <div className="member-social">
                  <a href="#" className="social-link linkedin">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-link github">
                    <span>G</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="member-photo">
                <img src="../src/assets/team/pedro.jpg" alt="Pedro" />
              </div>
              <div className="member-info">
                <h3 className="member-name">PEDRO</h3>
                <p className="member-role">VOLUNTÁRIO</p>
                <div className="member-social">
                  <a href="#" className="social-link linkedin">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-link github">
                    <span>G</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="member-photo">
                <img src="../src/assets/team/leticia.jpg" alt="Letícia" />
              </div>
              <div className="member-info">
                <h3 className="member-name">LETÍCIA</h3>
                <p className="member-role">VOLUNTÁRIA</p>
                <div className="member-social">
                  <a href="#" className="social-link linkedin">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-link github">
                    <span>G</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Segunda linha */}
            <div className="member-card">
              <div className="member-photo">
                <img src="../src/assets/team/wesley.jpg" alt="Wesley" />
              </div>
              <div className="member-info">
                <h3 className="member-name">WESLEY</h3>
                <p className="member-role">BOLSISTA</p>
                <div className="member-social">
                  <a href="#" className="social-link linkedin">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-link github">
                    <span>G</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="member-photo">
                <img
                  src="../src/assets/team/hidelbrando.jpg"
                  alt="Hidelbrando"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">HIDELBRANDO</h3>
                <p className="member-role">VOLUNTÁRIO</p>
                <div className="member-social">
                  <a href="#" className="social-link linkedin">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-link github">
                    <span>G</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="member-card">
              <div className="member-photo">
                <img src="../src/assets/team/larissa.jpg" alt="Larissa" />
              </div>
              <div className="member-info">
                <h3 className="member-name">LARISSA</h3>
                <p className="member-role">VOLUNTÁRIA</p>
                <div className="member-social">
                  <a href="#" className="social-link linkedin">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-link github">
                    <span>G</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Terceira linha - centralizada */}
            <div className="member-card center-card">
              <div className="member-photo">
                <img
                  src="../src/assets/team/carlos.jpg"
                  alt="GABRIEL PINHEIRO"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">GABRIEL PINHEIRO</h3>
                <p className="member-role">VOLUNTÁRIO</p>
                <div className="member-social">
                  <a href="#" className="social-link linkedin">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-link github">
                    <span>G</span>
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
