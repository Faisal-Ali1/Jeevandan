import { Route , Routes } from "react-router"
import HomePage from "./pages/homePage"
import AboutPage from "./pages/aboutPage"
import RegisterDonerPage from "./pages/registerDonerPage"
import FindADoner from "./pages/findADoner"
import { NavLink } from "react-router"
import Otp from "./components/otp"
import {delay, motion} from 'motion/react'


function App() {
  
 return(
  <>
  <motion.div 
    className="bg-red-950 p-5 flex justify-between items-center fixed z-99 w-full"
    initial={{opacity:0}}
    whileInView={{opacity:1, transition:{duration:1 , delay:0.5}}}>
    
    <motion.h2 
      className="max-sm:text-xl text-red-500 text-3xl italic font-bold"
      initial={{opacity:0}}
      whileInView={{opacity:1 , transition:{duration:1 , delay:0.9}}}>JeevanDan</motion.h2>

     {/* Desktop view */}
    <div className="flex gap-3 max-sm:hidden">
      
      <NavLink to="/findadoner" className="btn btn-error">Find Doner</NavLink>
    <NavLink to="/registerDoner" className="btn btn-primary">Be a doner</NavLink>
    </div>

    {/* Moble view */}
     <div className="dropdown dropdown-end min-sm:hidden">
  <div tabIndex={0} role="button" className=""> <p className="text-3xl text-white">≡</p></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><NavLink to="/findadoner" className="">Find Doner</NavLink></li>
    <li><NavLink to="/registerDoner" className="">Be a doner</NavLink></li>
  </ul>
</div>

  </motion.div>

  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/registerDoner" element={<RegisterDonerPage/>}></Route>
    <Route path="/findadoner" element={<FindADoner/>}></Route>
    <Route path="/otp" element={<Otp/>}></Route>
  </Routes>
  <div className="h-70 bg-black flex flex-col items-center justify-center text-white">
    <span>All writes are reserved © </span>
    <span>project created by </span>
    <span>Faisal Ali</span>

  </div>
  </>
 )
}

export default App
