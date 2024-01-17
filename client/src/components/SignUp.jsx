

const SignUp = () => {
    return (
        <div className="flex justify-center  h-full items-center">
            <div className="flex sm:bg-slate-100 sm:p-12 p-2 sm:shadoww-xl sm:rounded-xl flex-col items-center sm:gap-8 gap-4">
                <div className="sm:text-3xl text-3xl">Signup</div>
                <form className="flex flex-col gap-1">

                    <input className="g-slate-300 px-4 p-2 border-solid border-2 border-gray-300 rounded-3xl m-3" type="text" placeholder="Name" />
                    <input className="g-slate-300 p-2 border-solid border-2 border-gray-300 rounded-3xl m-3 px-4" type="text" placeholder="Username" />
                    <input className="g-slate-300 p-2 border-solid border-2 border-gray-300 rounded-3xl m-3 px-4" type="email" placeholder="Email" />
                    <input className="g-slate-300 p-2 border-solid border-2 border-gray-300 rounded-3xl m-3 px-4" type="password" placeholder="Password" />

                    <div className="flex bg-redd-200 m-6 p-6 gap-2">
                        <div className="flex-grow bg-slatee-500 flex justify-center items-center text-sky-600 underline">
                            Login
                        </div>
                        <div className="flex-grow bg-slatee-500 flex justify-center items-center">
                            or
                        </div>
                        <div className="flex-grow bg-slatee-500 flex justify-center items-center">
                            <button className="bg-stone-800 p-3 rounded-lg text-white ">Create</button>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default SignUp