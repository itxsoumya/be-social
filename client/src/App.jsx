import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="flex flex-col  h-screen">

      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App;
