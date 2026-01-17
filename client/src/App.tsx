import { Routes,Route} from "react-router-dom"
import HomePage from "./pages/public/HomePage"
import PageNotFound from "./pages/pageNotFound"
import LoginPage from "./pages/public/LoginPage"
import RegisterPage from "./pages/public/RegisterPage" 

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </div>
  )
}

export default App
