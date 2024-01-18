import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import SignUp from "./SignUp";

const Body = () => {
    return (
        <div className="flex-grow bg-ed-200 flex text-xl">
            <div className="md:max-w-6xl m-auto bg-cyan--200 w-full   h-full">
                {/* <Home/> */}
                {/* <SignUp/> */}
                {/* <Login/> */}
                <Profile/>
                

            </div>
        </div>
    )
}

export default Body;