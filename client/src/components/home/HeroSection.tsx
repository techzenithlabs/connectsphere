import "../../styles/HeroSection.css";
import { NavLink } from "react-router-dom";
export default function HeroSection() {
  return (
   <section className="hero">
      <div className="hero-content">
        <h1>Convert your leads into real opportunities</h1>
        <p>
          ConnectSphere helps teams identify high-quality leads and focus on
          prospects that actually convert.
        </p>

        <div className="hero-actions">
          <NavLink to="/register" className="btn-primary">Get Started</NavLink>
          <NavLink to="/login" className="btn-secondary">Login</NavLink>
        </div>
      </div>
    </section>
  );
}

