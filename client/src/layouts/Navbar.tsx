import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <div className="flex items-center gap-2 text-xl font-semibold text-slate-900">
          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
          SignalMind
        </div>

        <div className="flex items-center gap-6">
          <NavLink
            to="/login"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
