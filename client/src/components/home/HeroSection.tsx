import "../../styles/HeroSection.css";
import { NavLink } from "react-router-dom";
import heroImage from "../../assets/images/hero-section.jpg";
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT: Text */}
        <div className="hero-content">
          <h1>Convert your leads into real opportunities</h1>
          <p>
            ConnectSphere helps teams identify high-quality leads and focus on
            prospects that actually convert.
          </p>

          <div className="flex items-center gap-4">
            <NavLink
              to="/register"
              className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Get Started
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              Login
            </NavLink>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={heroImage}
            alt="Decision intelligence dashboard illustration"
          />
        </div>
      </div>
    </section>
  );
}
