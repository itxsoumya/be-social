

const Login = ()=>{
    return(
        <div className="flex sm:bg-slate-100 sm:p-12 p-2 sm:shadow-xl sm:rounded-lg flex-col items-center sm:gap-10 gap-4">
            <div className="sm:text-3xl text-3xl">Login</div>
            <form className="flex flex-col gap-3">
                
                
                <input className="g-slate-300 p-2 border-solid border-2 border-gray-300 rounded-3xl m-3 px-4" type="email" placeholder="Email"/>
                
                <input className="g-slate-300 p-2 border-solid border-2 border-gray-300 rounded-3xl m-3 px-4" type="password" placeholder="Password"/>

               


                <div className="flex bg-reed-200 m-4 sm:p-6 gap-2">
                    <div className="flex-grow bg-slatee-500 flex justify-center items-center text-sky-600 underline">
                        Create
                    </div>
                    <div className="flex-grow bg-slatee-500 flex justify-center items-center"> 
                        or
                    </div>
                    <div className="flex-grow bg-slatee-500 flex justify-center items-center">
                        <button className="bg-stone-800 p-3 rounded-lg text-white ">Login</button>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default Login