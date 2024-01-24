import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="h-full p-12">
      <p>
        This project is under development.
        And i am glad that you visited us .... Thank you so much .
        <br />
        <br />
        <p className="text-cyan-700 underline"><Link to={'/'}>Now Goback to home</Link></p>
      </p>
    </div >
  )
}


export default About;
