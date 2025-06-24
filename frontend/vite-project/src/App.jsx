import { Route , Routes } from "react-router"
import HomePage from "./pages/homePage"
import AboutPage from "./pages/aboutPage"
import RegisterDonerPage from "./pages/registerDonerPage"
import FindADoner from "./pages/findADoner"
import { NavLink } from "react-router"


function App() {
 return(
  <>
  <div className="bg-red-950 p-5 flex justify-between fixed z-99 w-full">
    <h2 className="text-red-500 text-3xl italic">JeevanDan</h2>
    <div>
      <NavLink to="/findadoner" className="btn btn-error mr-5">Find Doner</NavLink>
    <NavLink to="/registerDoner" className="btn btn-primary">Be a doner</NavLink>
    </div>
  </div>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/registerDoner" element={<RegisterDonerPage/>}></Route>
    <Route path="/findadoner" element={<FindADoner/>}></Route>
  </Routes>
  <div className="h-70 bg-black flex flex-col items-center justify-center">
    <span>All writes are reserved © </span>
    <span>project created by </span>
    <span>Faisal Ali || Mirza Farhan Baig || Rehan hussain</span>

  </div>
  </>
 )
}

export default App
