import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import logo from '../assets/logo.png'
import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";


const Search = ({ tuggleSearch }) => {
  return (
    <div className="fixed w-full left-0 top-0 h-full flex justify-center items-center">
      <div className="bg-zinc-800 shadow-xl rounded-md">
        <div className="text-right p-4" onClick={() => tuggleSearch()}>X</div>
        <div className="p-20">Search is not yet available</div>
      </div>
    </div>
  )
}



// defining my profile float section
//

const SideBar = memo(({ tugglesidebar }) => {
  return (
    <div className="fixed top-16 h-full bg-zinc-800 text-white w-2/3 sm:w-1/3">
      <div className="p-4 flex justify-end text-2xl cursor-pointer"><div onClick={() => tugglesidebar(false)}><RxCross1 /></div></div>
      <div className="text-xl flex flex-col justify-center mx-10 gap-7">
        <div className="hover:bg-zinc-700 p-3 px-6 rounded-lg cursor-pointer">Profile</div>
        <div className="hover:bg-zinc-700 p-3 px-6 rounded-lg cursor-pointer">About</div>
        <div className="hover:bg-zinc-700 p-3 px-6 rounded-lg cursor-pointer">Bookmark</div>
        <div className="hover:bg-zinc-700 p-3 px-6 rounded-lg cursor-pointer">saved</div>
        <div className="hover:bg-zinc-700 p-3 px-6 rounded-lg cursor-pointer">Saved</div>
      </div>
    </div>
  )
})




{/* <IoSearch /> */ }
const Navbar = () => {
  const [tuggleSearch, setTuggleSearch] = useState(false)
  const [tuggleSideBar, setTuggleSideBar] = useState(false)
  return (
    <div className="mb-16 sm:mb-20">

      {/* adding my side card here */}

      {(tuggleSideBar) ? <SideBar tugglesidebar={setTuggleSideBar} /> : ''}

      <div className="fixed z-20 bg-zinc-800  text-white p-3 w-full shadow-lg">
        <div className="bg-cyan--950 max-w-3xl mx-auto flex">
          <div className="flex-grow flex justify-start items-center text-3xl"><div onClick={() => setTuggleSideBar(!tuggleSideBar)}><CgProfile /></div>
          </div>
          <div className="flex-grow flex justify-center items-center text-3xl"><Link to={'/'}><img className="sm:h-11 h-10" src={logo} alt="be social" /></Link></div>
          <div className="flex-grow flex justify-end items-center text-2xl">
            <div className="cursor-pointer" onClick={() => setTuggleSearch(!tuggleSearch)}>
              <IoSearch />
              {tuggleSearch ? <Search tuggleSearch={() => setTuggleSearch(!tuggleSearch)} /> : ''}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
