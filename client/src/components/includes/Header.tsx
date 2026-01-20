import Navbar from "../../layouts/Navbar";

export default function Header() {
  return (
     <header className="fixed top-0 left-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center">
        <Navbar />
      </div>
    </header>
  );
}