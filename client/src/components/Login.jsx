

const Login = () => {
  return (
    <div className="flex justify-center  h-full items-center">
      <div className="flex sm:bg-slate-100 sm:p-12 p-2 sm:shadoww-xl sm:rounded-xl flex-col items-center sm:gap-10 gap-4 ">
        <div className="sm:text-3xl text-3xl">Login</div>
        <form className="flex flex-col gap-3">


          <input className="g-slate-300 p-2 border-solid border-2 border-gray-300 rounded-3xl m-3 px-4" type="email" placeholder="Email" required />

          <input className="g-slate-300 p-2 border-solid border-2 border-gray-300 rounded-3xl m-3 px-4" type="password" placeholder="Password" required />




          <div className="flex bg-reed-200 m-4 sm:p-6 gap-2">
            <div className="flex-grow bg-slatee-500 flex justify-center items-center text-sky-600 underline text-lg">
              Create
            </div>
            <div className="flex-grow bg-slatee-500 flex justify-center text-lg items-center">
              or
            </div>
            <div className="flex-grow bg-slatee-500 flex justify-center items-center">
              <button className="bg-zinc-800 p-2 px-4 rounded-3xl text-white text-lg">Login</button>
            </div>

          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
