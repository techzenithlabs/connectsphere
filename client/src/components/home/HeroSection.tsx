import heroImage from "../../assets/images/hero-section.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen pt-16 overflow-hidden bg-slate-50">
      
      <img
        src={heroImage}
        alt="Decision intelligence dashboard illustration"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10">
        {/* hero text later */}
      </div>

    </section>
  );
}
