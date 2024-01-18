import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import logo from '../assets/logo.png'
import { useState } from "react";


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

{/* <IoSearch /> */ }
const Navbar = () => {
    const [tuggleSearch, setTuggleSearch] = useState(false)
    return (
        <div className="mb-16 sm:mb-20">

            <div className="fixed z-20 bg-zinc-800  text-white p-3 w-full shadow-lg">
                <div className="bg-cyan--950 max-w-3xl mx-auto flex">
                    <div className="flex-grow flex justify-start items-center text-3xl"><CgProfile />
                    </div>
                    <div className="flex-grow flex justify-center items-center text-3xl"><img className="sm:h-11 h-10" src={logo} alt="be social" /></div>
                    <div className="flex-grow flex justify-end items-center text-2xl">
                        <div className="cursor-pointer" onClick={()=>setTuggleSearch(!tuggleSearch)}>
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