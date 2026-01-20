import heroImage from "../../assets/images/hero-section.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen pt-16 overflow-hidden">
 
      <img
        src={heroImage}
        alt="Decision intelligence dashboard illustration"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl">
    
          <p className="text-sm font-medium text-blue-600 mb-3">
            AI-Powered Decision Intelligence
          </p>
      
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight">
            Turn complex signals into confident decisions.
          </h1>
     
          <p className="mt-5 text-lg text-slate-600">
            SignalMind helps teams cut through noise, understand what truly
            matters, and act with clarity.
          </p>
      
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Get started free
            </button>

            <button className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition">
              See how it works
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
