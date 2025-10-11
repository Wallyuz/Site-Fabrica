import "./Performance.css";

export default function Performance() {
  return (
    <section id="performance" className="performance">
      <div className="performance-container">
        <div className="performance-grid">
          {/* Card 1 - Pessoas Impactadas */}
          <div className="performance-card">
            <div className="card-icon">
              <div className="icon-group">
                <div className="person-icon"></div>
                <div className="person-icon center"></div>
                <div className="person-icon"></div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                <span className="title-blue">PESSOAS</span>
                <span className="title-orange">IMPACTADAS</span>
              </h3>
              <div className="card-number">+200</div>
            </div>
          </div>

          {/* Card 2 - Softwares Impactados */}
          <div className="performance-card">
            <div className="card-icon">
              <div className="laptop-icon">
                <div className="laptop-screen"></div>
                <div className="laptop-keyboard"></div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                <span className="title-blue">SOFTWARES</span>
                <span className="title-orange">IMPACTADOS</span>
              </h3>
              <div className="card-number">05</div>
            </div>
          </div>

          {/* Card 3 - Projetos Realizados */}
          <div className="performance-card">
            <div className="card-icon">
              <div className="project-icon">
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                <span className="title-blue">SERVIÇOS</span>
                <span className="title-orange">REALIZADOS</span>
              </h3>
              <div className="card-number">05</div>
            </div>
          </div>

          {/* Card 4 - Cursos Oferecidos */}
          <div className="performance-card">
            <div className="card-icon">
              <div className="course-icon">
                <div className="book-spine"></div>
                <div className="book-pages"></div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                <span className="title-blue">CURSOS</span>
                <span className="title-orange">OFERECIDOS</span>
              </h3>
              <div className="card-number">06</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
