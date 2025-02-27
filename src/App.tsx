import About from "./Components/About"
import Header from "./Components/Header"
import Projects from "./Components/Projects"
import Testimonials from "./Components/Testimonials"


function App() {
 
  return (
   <div className="w-full overflow-hidden">
     <Header/>
     <About/>
     <Projects/>
     <Testimonials/>
   </div>
  )
}

export default App
