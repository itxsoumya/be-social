import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import logo from '../assets/logo.png'




const Navbar = ()=>{
    return(
        <div className="mb-16 sm:mb-20">
           <div className="fixed bg-zinc-800  text-white p-3 w-full shadow-lg">
           <div className="bg-cyan--950 max-w-3xl mx-auto flex">
           <div className="flex-grow flex justify-start items-center text-3xl"><CgProfile />
</div>
           <div className="flex-grow flex justify-center items-center text-3xl"><img className="h-11"  src={logo} alt="be social" /></div>
           <div className="flex-grow flex justify-end items-center text-2xl"><IoSearch />

</div>
           </div>
           </div>
        </div>
    )
}

export default Navbar;