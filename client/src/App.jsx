import { BrowserRouter, Route, Routes } from "react-router-dom";
import WrapperComponent from "./components/WrapperComponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/SignUp'
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <div className="flex flex-col  h-screen">
      <BrowserRouter>
        <Navbar />
        <WrapperComponent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </WrapperComponent>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
