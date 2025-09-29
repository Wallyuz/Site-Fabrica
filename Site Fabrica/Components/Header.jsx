import "./Header.css";
import Background from "../src/assets/Background.jpg";

export default function Header() {
  return (
    <header className="header">
      <img src={Background} alt="Background" className="header-background" />
      <div className="header-titles">
        <h1> FÁBRICA DE </h1>
        <h1> TESTADORES</h1>
      </div>
    </header>
  );
}
