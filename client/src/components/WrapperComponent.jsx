
const WrapperComponent = ({ children }) => {
  return (
    <div className="flex-grow bg-ed-200 flex text-xl">
      <div className="md:max-w-6xl m-auto bg-cyan--200 w-full   h-full">



        {children}


      </div>
    </div>
  )
}

export default WrapperComponent;
