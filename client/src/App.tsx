import { Routes,Route} from "react-router-dom"
import HomePage from "./pages/public/HomePage"
import PageNotFound from "./pages/pageNotFound"

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
