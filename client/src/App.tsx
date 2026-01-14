import type { JSX } from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
function Private({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("cs_access");
  return token ? children : <Navigate to="/login" replace />;
}

function App() {

  return (
    <Routes>
       <Route path="/login" element={<LoginPage />} />
      <Route
        path="/app"
        element={
          <Private>
            <div style={{ padding: 24 }}>You’re logged in 🎉</div>
          </Private>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
