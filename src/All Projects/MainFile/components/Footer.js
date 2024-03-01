import github from '../Images/github-mark.png'
import instagram from '../Images/instagram.png'
import linkedin from '../Images/linkedin.png'


function Footer(){
  return(
    <>
      <div className="bg-red-500 min-h-[20vh]">
        <nav className="flex justify-center flex-wrap py-5">
          <ul>
            <h1 className="text-3xl">Manav Jain</h1>
            <li>Currently a FrontEnd Developer</li>
            <li className="text-2xl pt-3"><a>My Portfolio</a></li>
          </ul>

          <ul className="px-10 flex flex-col space-y-2">
            <li className="text-2xl border-b-2">Projects</li>
            <li><a href="https://manavjain01.github.io/My-Mini-Projects/MainFile/">HTML/CSS/JS Projects</a></li>
            <li><a href="https://manavjain01.github.io/My-React-Projects/#/Body">React Projects</a></li>
            <li><a href="https://manavjain01.github.io/MachineLearning/MainFile/#">ML Projects</a></li>
            <li><a href="https://manavjain01.github.io/My-Java-Projects/web/">Java Projects</a></li>
          </ul>

          <ul className="flex flex-col items-center">
            <li className="border-b-2">Let's be social</li>
            <li className="flex space-x-2 pt-3">
              <a href="#Body"><img src={github} className="w-7" /></a>
              <a href="#Body"><img src={instagram} className="w-7" /></a>
              <a href="#Body"><img src={linkedin} className="w-7" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Footer;