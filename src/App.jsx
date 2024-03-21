
import Footer from "./Components/Footer/Footer"
import  Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Ourproducts from "./Components/OurProducts/Ourproducts"


function App() {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-[url('./assets/bg-main.png')] bg-cover object-center">
      <Hero/>
    </div>
    <Ourproducts/>
    <Footer/>
    </>
  )
}

export default App
