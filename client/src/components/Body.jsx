import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

const Body = () => {
    return (
        <div className="flex-grow bg-ed-200 flex text-xl">
            <div className="md:max-w-6xl m-auto bg-red-200 w-full   h-full">
                <Home/>
                {/* <SignUp/> */}
                {/* <Login/> */}
                

            </div>
        </div>
    )
}

export default Body;